import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Button,
  Box,
  Modal,
  TextField,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import BookmarkAddOutlined from "@mui/icons-material/BookmarkAddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { holidayPackageAPI } from "../store/api/holidayPackage";
import handleRazorPay from "../utils/paymentMethod";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function HolidayPackageCard() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [HolidayPackagePlace, setHolidayPackagePlace] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [members, setMembers] = useState(1);
  const [tourData, setTour] = useState({});
  const getDataHoliday = async () => {
    const getData = await holidayPackageAPI();
    setHolidayPackagePlace(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getDataHoliday()]);
  }, []);

  const handleOpen = (item) => {
    if (!Cookies.get("yh_auth_token")) {
      toast.error("Please login to continue");
      return;
    }
    setSelectedPackage(item);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      location: selectedPackage.title,
      details: selectedPackage.description,
      price: selectedPackage.price * members,
      name: tourData.name,
      mobileNumber: tourData.mobileNumber,
      date_of_travel: tourData.date_of_travel,
      total_memebers: members,
      dateOfBooking: new Date().toISOString().split("T")[0],
      serviceType: "Holoiday Package",
      email: localStorage.getItem("yh_user_email"),
    };
    handleRazorPay(data, selectedPackage.price * members);
    setOpen(false);
    setSnackbarOpen(true);
  };

  const handleIncrement = () => {
    setMembers(members + 1);
  };

  const handleDecrement = () => {
    if (members > 1) {
      setMembers(members - 1);
    }
  };

  const handleChange = (e) => {
    setTour({ ...tourData, [e.target.name]: e.target.value });
  };

  return (
    <>
     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <Grid container spacing={1}>
        {HolidayPackagePlace.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: isMobile ? 360 : 350,
                width: isMobile ? "100%" : "auto",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <IconButton
                  aria-label={`bookmark ${item.title}`}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                >
                  <BookmarkAddOutlined />
                </IconButton>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Total price:
                  </Typography>
                  <Typography variant="h6" component="div">
                    ₹ {item.price}
                  </Typography>
                </Box>
                <Link to={`/placedetail?_id=${item._id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginLeft: "auto",
                    background: "#624fa8",
                    "&:hover": {
                      background: "#624fa8",
                    },
                  }}
                >
                  Explore
                </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          Successfully connected with us, wait for our response.
        </Alert>
      </Snackbar>
    </div>
    </>
  );
}
