import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";

// Example data array
const trips = [
  {
    id: 1,
    status: "Completed",
    destination: "Goa",
    origin: "Mumbai",
    dateOfBooking: "2023-06-25",
    type: "Flight",
    amount: "500",
    passengerName: "John Doe",
    mobileNumber: "1234567890",
    email: "johndoe@example.com",
    transactionId: "TXN123456",
    modeOfPayment: "Credit Card",
  },
  {
    id: 2,
    status: "Completed",
    destination: "Delhi",
    origin: "Chennai",
    dateOfBooking: "2023-06-20",
    type: "Train",
    amount: "300",
    passengerName: "Jane Smith",
    mobileNumber: "0987654321",
    email: "janesmith@example.com",
    transactionId: "TXN789012",
    modeOfPayment: "Debit Card",
  },
  // Add more trips as needed
];

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
              My Trip to {trip.destination}
            </Typography>
            {showDetails && (
              <Box>
                <Typography variant="subtitle1" color="green" gutterBottom>
                  Status: {trip.status}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>To:</strong> {trip.destination}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>From:</strong> {trip.origin}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Date of Booking:</strong> {trip.dateOfBooking}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Type:</strong> {trip.type}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Amount:</strong> ${trip.amount}
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
                      <strong>Mode of Payment:</strong> {trip.modeOfPayment}
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
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {trips.map((trip) => (
        <MyTripCard key={trip.id} trip={trip} />
      ))}
    </Box>
  );
}

export default MyTripCardList;
