import * as React from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProfileAvator() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link to="/MyProfile" style={{ textDecoration: "none" }}>
        <Button>
          <AccountCircleIcon style={{ color: "#624fa8", fontSize: "28px" }} />
          <Typography sx={{ ml: 1, color: "#624fa8" }}>
            Hi, {localStorage.getItem("yh_user_name")?.split(" ")[0]}
          </Typography>
        </Button>
      </Link>
      {/* <Button
      // id="basic-button"
      // aria-controls={open ? "basic-menu" : undefined}
      // aria-haspopup="true"
      // aria-expanded={open ? "true" : undefined}
      // onClick={handleClick}
      >
        <AccountCircleIcon style={{ color: "#624fa8", fontSize: "28px" }} />
        <Typography sx={{ ml: 1, color: "#624fa8" }}>Robin khan</Typography>
      </Button> */}
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Forgot Password</MenuItem>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu> */}
    </div>
  );
}
