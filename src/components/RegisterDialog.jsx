import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, InputAdornment, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useMediaQuery } from "@mui/material";


export default function RegisterDialog({ open, setOpen, setOpenLogin }) {
  const isSmallScreen = useMediaQuery("(max-width: 625px)");

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
    "& .MuiPaper-root": {
      width: "800px",
      height: isSmallScreen ? "550px" : "500px",
      maxWidth: "none",
    },
  }));
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpenLogin(true);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
              type="number"
              fullWidth
            />
            <TextField
              id="standard-basic"
              label="Enter Email"
              variant="standard"
              type="number"
              fullWidth
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
            />
            <TextField
              id="standard-basic"
              label="Enter Password"
              variant="standard"
              type="password"
              fullWidth
            />
            <FormControl sx={{ alignSelf: "self-start" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <button className="login-btn-primary">Get Register</button>
            <div className="register-text-login" onClick={handleToggle}>
              Login
            </div>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
