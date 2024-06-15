import React, { useCallback, useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useMediaQuery } from "@mui/material";
import toast from "react-hot-toast";
import { useRegisterapiMutation } from "../store/api/auth/register.api";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "800px",
    height: (props) => (props.isSmallScreen ? "550px" : "500px"),
    maxWidth: "none",
  },
}));

export default function RegisterDialog({ open, setOpen, setOpenLogin }) {
  const [registerApi, result] = useRegisterapiMutation();
  const [payload, setpayload] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    gender: "",
  });

  const isSmallScreen = useMediaQuery("(max-width: 625px)");

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleToggle = useCallback(() => {
    setOpenLogin(true);
    setOpen(false);
  }, [setOpen, setOpenLogin]);

  const handleChange = useCallback((e) => {
    setpayload((prevPayload) => ({
      ...prevPayload,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = async () => {
    if (
      !payload.email &&
      !payload.fullName &&
      !payload.mobileNumber &&
      !payload.password &&
      !payload.gender
    ) {
      toast.error("Please fill all the fields");
    } else {
      const response = await registerApi(payload);
      if (response?.data?.success) {
        toast.success("Registered Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleToggle();
      } else {
        toast.error(response?.error?.data?.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        isSmallScreen={isSmallScreen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="login-dialog">
          <Box
            sx={{
              width: "50%",
              display: isSmallScreen ? "none" : "block",
            }}
          >
            <img
              src="/reg.png"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Box className="register-left">
            <TextField
              id="standard-basic"
              label="Enter Full Name"
              variant="standard"
              fullWidth
              name="fullName"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Enter Email"
              variant="standard"
              fullWidth
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Enter Mobile Number"
              variant="standard"
              type="number"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              name="mobileNumber"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Enter Password"
              variant="standard"
              type="password"
              fullWidth
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <FormControl sx={{ alignSelf: "self-start" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                onChange={(e) => handleChange(e)}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            {result?.isLoading ? (
              <button className="login-btn-primary" disabled>
                <CircularProgress size={"30px"} />
              </button>
            ) : (
              <button className="login-btn-primary" onClick={handleSubmit}>
                Get Register
              </button>
            )}
            <div className="register-text-login" onClick={handleToggle}>
              Login
            </div>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
