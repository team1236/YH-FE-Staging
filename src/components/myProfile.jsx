import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const UserProfileContainer = styled(Paper)({
  padding: "20px",
  marginBottom: "20px",
});

const MyProfile = () => {
  const [profile, setProfile] = useState({});

  const [passwordDetails, setPasswordDetails] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    mobileNumber: localStorage.getItem("yh_user_mobile"),
  });

  const [passwordSuccess, setPasswordSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/v1/get-profile-details?mobileNumber=${localStorage.getItem(
          "yh_user_mobile"
        )}`
      )
      .then((response) => {
        setProfile(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  const handlePasswordChange = () => {
    if (passwordDetails.newPassword !== passwordDetails.confirmPassword) {
      alert("New password and confirmation do not match");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/change-password`,
        passwordDetails
      )
      .then((response) => {
        setPasswordSuccess(true);
        toast.success(response.data.message);
        setPasswordDetails({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        console.error("Error changing password:", error);
      });
  };

  const handleLogout = () => {
    Cookies.remove("yh_auth_token");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <UserProfileContainer>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
            <Avatar
              sx={{ width: 100, height: 100, margin: "auto", fontSize: "5rem" }}
            >
              {profile && profile?.fullName?.slice(" ")[0]}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h6">Name: {profile.fullName}</Typography>
            <Typography variant="h6">Mobile: {profile.mobileNumber}</Typography>
            <Typography variant="h6">Email: {profile.email}</Typography>
            <Typography variant="h6">Gender: {profile.gender}</Typography>
          </Grid>
        </Grid>
      </UserProfileContainer>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Change Password
        </Typography>
        <TextField
          label="Current Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={passwordDetails.oldPassword}
          onChange={(e) =>
            setPasswordDetails({
              ...passwordDetails,
              oldPassword: e.target.value,
            })
          }
        />
        <TextField
          label="New Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={passwordDetails.newPassword}
          onChange={(e) =>
            setPasswordDetails({
              ...passwordDetails,
              newPassword: e.target.value,
            })
          }
        />
        <TextField
          label="Confirm New Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={passwordDetails.confirmPassword}
          onChange={(e) =>
            setPasswordDetails({
              ...passwordDetails,
              confirmPassword: e.target.value,
            })
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePasswordChange}
          startIcon={<LockIcon />}
          sx={{ mt: 2 }}
        >
          Change Password
        </Button>
        {passwordSuccess && (
          <Typography variant="body1" color="success" sx={{ mt: 2 }}>
            Password changed successfully!
          </Typography>
        )}
      </Box>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default MyProfile;
