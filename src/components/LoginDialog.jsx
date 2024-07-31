import React, { useState, useCallback } from "react";
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
import { useMediaQuery } from "@mui/material";
import toast from "react-hot-toast";
import { useLoginapiMutation } from "../store/api/auth/login.api";
import Cookies from "js-cookie";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "800px",
    height: (props) => (props.isSmallScreen ? "800px" : "400px"),
    maxWidth: "none",
  },
}));

function LoginDialog({ open, setOpen, setOpenRegister }) {
  const [loginApi, result] = useLoginapiMutation();
  const [payload, setPayload] = useState({
    mobileNumber: "",
    password: "",
  });

  const isSmallScreen = useMediaQuery("(max-width: 625px)");

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleAgree = useCallback(() => {
    setOpenRegister(true);
    setOpen(false);
  }, [setOpen, setOpenRegister]);

  const handleChange = useCallback((e) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = async () => {
    if (!payload.mobileNumber && !payload.password) {
      toast.error("Please fill all the fields");
    } else {
      const response = await loginApi(payload);
      if (response?.data?.success) {
        toast.success("Login Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        localStorage.setItem("yh_user_email", response.data.data.email);
        localStorage.setItem("yh_user_name", response.data.data.name);
        localStorage.setItem("yh_user_mobile", response.data.data.mobileNumber);
        Cookies.set("yh_auth_token", response.data.data.token);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
            width: isSmallScreen ? "95%" : "50%",
          }}
        >
          <img
            src="/wall.png"
            style={{
              width: "100%",
            }}
          />
        </Box>
        <Box className="login-left">
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
            value={payload.mobileNumber}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Enter Password"
            variant="standard"
            type="password"
            fullWidth
            name="password"
            value={payload.password}
            onChange={handleChange}
          />
          {result?.isLoading ? (
            <button className="login-btn-primary" disabled>
              <CircularProgress size={"30px"} />
            </button>
          ) : (
            <button className="login-btn-primary" onClick={handleSubmit}>
              Get Login
            </button>
          )}
          <div className="login-text">
            We no more support email based login. You can now login via mobile
            number & link email to access your account.
          </div>
          <div className="login-text-register" onClick={handleAgree}>
            Don't Have Account? Click Here
          </div>
          <div className="login-text-agree">
            you agree to Your's Hospitality privacy policy & terms of use.
          </div>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  );
}

export default React.memo(LoginDialog);
