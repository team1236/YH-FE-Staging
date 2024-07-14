import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";
import { myTripAPI } from "../store/api/myTripPage";

function MyTripCard({ trip }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box sx={{ width: "100%", marginBottom: 2 }}>
      <Card variant="outlined" sx={{ width: "100%" }}>
        <CardActionArea onClick={handleCardClick}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              My Trip to {trip.to}
            </Typography>
            {showDetails && (
              <Box>
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
                    <Typography variant="body2">
                      <strong>Date of Booking:</strong> {trip.dateOfBooking}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Type:</strong> {trip.serviceType}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Amount:</strong> ₹ {trip.amount}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Passenger Name:</strong> {trip.passengerName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
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
          </CardContent>
        </CardActionArea>
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
    Promise.allSettled([getMyTrip()]);
  }, []);
  return (
    <>
      {trips.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {trips.map((trip) => (
            <MyTripCard key={trip._id} trip={trip} />
          ))}
        </Box>
      ) : (
        <Box>
          <Typography variant="h4" gutterBottom>
            No trips found
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/noData.jpg" alt="No trips found" className="no-data" />
          </div>
        </Box>
      )}
    </>
  );
}

export default MyTripCardList;
