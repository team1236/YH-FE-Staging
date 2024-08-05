import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import { myTripAPI } from "../store/api/myTripPage";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function MyTripCard({ trip }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box sx={{ width: "100%", marginBottom: 3 }}>
      <Card variant="outlined" sx={{ width: "100%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  }}>
        <CardActionArea onClick={handleCardClick}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {trip.serviceType === "hotel"
                ? `Hotel Booking: ${trip.to}`
                : trip.serviceType === "cab"
                ? `Cab Booking Details`
                : `Trip to ${trip.to}`}
            </Typography>
            {showDetails && (
              <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>To:</strong> {trip.to}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>From:</strong> {trip.from}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      <EventIcon sx={{ marginRight: 1 }} />
                      <strong>Date of Booking:</strong> {trip.dateOfBooking}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      <AttachMoneyIcon sx={{ marginRight: 1 }} />
                      <strong>Amount:</strong> ₹ {trip.amount}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      <AccountCircleIcon sx={{ marginRight: 1 }} />
                      <strong>Passenger Name:</strong> {trip.passengerName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      <strong>Mobile Number:</strong> {trip.mobileNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Email:</strong> {trip.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Transaction ID:</strong> {trip.transactionId}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Mode of Payment:</strong> {trip.modeofPayment}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
            <IconButton
              onClick={handleCardClick}
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
              }}
            >
              {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardContent>
        </CardActionArea>
        {/* Toggle Icon at the bottom of the card */}
      </Card>
    </Box>
  );
}

function MyTripCardList() {
  const [trips, setTrips] = useState([]);

  const getMyTrip = async () => {
    const getData = await myTripAPI();
    setTrips(getData.data.findData);
  };

  useEffect(() => {
    getMyTrip();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Your Booking Details
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />
      {trips.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          {trips.map((trip) => (
            <MyTripCard key={trip._id} trip={trip} />
          ))}
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            No trips found
          </Typography>
          <Box display="flex" justifyContent="center">
            <img
              src="/noData.jpg"
              alt="No trips found"
              className="no-data"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

export default MyTripCardList;
