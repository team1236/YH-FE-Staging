import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Button,
  Box,
  useMediaQuery
} from "@mui/material";
import BookmarkAddOutlined from "@mui/icons-material/BookmarkAddOutlined";
// import useMediaQuery from "@mui/material";

export default function HolidayPackageCard() {
  const isMobile = useMediaQuery("(max-width:600px)");
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
      title: "UK",
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
    <Grid container spacing={2} justifyContent="center">
      {HolidayPackagePlace.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              maxWidth: isMobile ? 360 : 350,
              width: isMobile ? "100%" : "auto",
              position: "relative",
              height: "100%",
              margin: "auto",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.duration}
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
              image={item.image}
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
                  {item.price}
                </Typography>
              </Box>
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
