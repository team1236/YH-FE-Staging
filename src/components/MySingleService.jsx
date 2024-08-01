import React, { useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Slider from "react-slick";

function MySingleService() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IyCtuDYBUdxXZnbP1rsXpJsZT4EUn3NrZg&s",
      title: "Package Tour",
      description: "Experience the best destinations with our package tours.",
      about:
        "Our package tours offer a comprehensive travel experience, including accommodation, meals, and guided tours. Enjoy stress-free travel with our well-organized tours.",
      weProvide:
        "We provide top-notch services including accommodation, meals, guided tours, and more.",
    },
    // Add more items to showcase multiple images in the slider
    {
      image:
        "https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Beach Paradise",
      description: "Relax and unwind at our exclusive beach resorts.",
      about:
        "Our beach resorts provide a serene environment with luxury amenities. Perfect for a getaway from the hustle and bustle of daily life.",
      weProvide:
        "Enjoy beachfront views, luxury accommodations, and world-class amenities.",
    },
    {
      image:
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Mountain Adventure",
      description: "Embark on thrilling mountain adventures.",
      about:
        "Experience the thrill of mountain adventures with activities like hiking, rock climbing, and more. Perfect for adventure enthusiasts.",
      weProvide:
        "We provide guided tours, equipment rental, and more for your mountain adventures.",
    },
  ];

  const otherServices = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IyCtuDYBUdxXZnbP1rsXpJsZT4EUn3NrZg&s",
      title: "City Exploration",
      description:
        "Discover the charm of urban landscapes with our city exploration tours.",
    },
    {
      image:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Cultural Heritage",
      description:
        "Immerse yourself in the rich cultural heritage of your destinations.",
    },
    {
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Gastronomic Delights",
      description: "Indulge in culinary experiences like no other.",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Automatically slide images
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Image Slider */}
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <img
              src={item.image}
              alt={`Service Image ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </Box>
        ))}
      </Slider>

      {/* Service Details */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {data[0].title}
        </Typography>
        <Typography variant="body1" paragraph>
          {data[0].description}
        </Typography>
      </Box>

      {/* Additional Information */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            What We Provide
          </Typography>
          <Typography variant="body2">{data[0].weProvide}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            About the Service
          </Typography>
          <Typography variant="body2">{data[0].about}</Typography>
        </Grid>
      </Grid>

      {/* Other Services */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Other Services
        </Typography>
        <Grid container spacing={2}>
          {otherServices.map((otherService, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: 2,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: 3,
                  },
                }}
              >
                <img
                  src={otherService.image}
                  alt={otherService.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                    marginBottom: 8,
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {otherService.title}
                </Typography>
                <Typography variant="body2">
                  {otherService.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default MySingleService;
