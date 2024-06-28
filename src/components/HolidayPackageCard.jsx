import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton } from "@mui/material";
import { BookmarkAdd } from "@mui/icons-material";

export default function HolidayPackageCard() {
  const HolidayPackagePlace = [
    {
      title: "Manali",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$500",
      duration: "5 nights and 6 days",
    },
    {
      title: "Goa",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$700",
      duration: "4 nights and 5 days",
    },
    {
      title: "Kerala",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$800",
      duration: "7 nights and 8 days",
    },
    {
      title: "Rajasthan",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$1000",
      duration: "9 nights and 10 days",
    },
    {
      title: "Andaman  Islands",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$1500",
      duration: "6 nights and 7 days",
    },
    {
      title: "Leh-Ladakh",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$1200",
      duration: "10 nights and 11 days",
    },
    {
      title: "Darjeeling",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$600",
      duration: "3 nights and 4 days",
    },
    {
      title: "Udaipur",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
      price: "$900",
      duration: "5 nights and 6 days",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Grid container spacing={2} justifyContent="center">
        {HolidayPackagePlace.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                width: 260,
                height: 360,
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, padding: "20px 8px" }}>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.duration}
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px",
                }}
              >
                <div>
                  <Typography variant="body2">Total price:</Typography>
                  <Typography variant="h6" component="div">
                    {item.price}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    alignSelf: "center",
                    background: "#624fa8",
                    "&:hover": {
                      background: "#624fa8",
                    },
                  }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
