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
  useMediaQuery,
} from "@mui/material";
import BookmarkAddOutlined from "@mui/icons-material/BookmarkAddOutlined";
import { holidayPackageAPI } from "../store/api/holidayPackage";

export default function HolidayPackageCard() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [HolidayPackagePlace, setHolidayPackagePlace] = useState([]);

  const getDataHoliday = async () => {
    const getData = await holidayPackageAPI();
    setHolidayPackagePlace(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getDataHoliday()]);
  }, []);

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
