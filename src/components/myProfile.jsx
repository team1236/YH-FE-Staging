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

const UserProfileContainer = styled(Paper)({
  padding: "20px",
  marginBottom: "20px",
});

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordSuccess, setPasswordSuccess] = useState(false);

  useEffect(() => {
    // Replace with your API endpoint
    axios
      .get("https://api.example.com/user/profile")
      .then((response) => {
        setProfile(response.data);
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
    // Replace with your change password endpoint
    axios
      .post("https://api.example.com/user/change-password", passwordDetails)
      .then((response) => {
        setPasswordSuccess(true);
      })
      .catch((error) => {
        console.error("Error changing password:", error);
      });
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logout clicked");
  };

  return (
    <Container sx={{mt:6}}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <UserProfileContainer>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
            <Avatar sx={{ width: 100, height: 100, margin: "auto" }}>U</Avatar>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h6">Name: {profile.name}</Typography>
            <Typography variant="h6">Mobile: {profile.mobile}</Typography>
            <Typography variant="h6">Email: {profile.email}</Typography>
            <Typography variant="h6">Address: {profile.address}</Typography>
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
          value={passwordDetails.currentPassword}
          onChange={(e) =>
            setPasswordDetails({
              ...passwordDetails,
              currentPassword: e.target.value,
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
