import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Sidenav from "./Sidenav";

function MySingleService() {

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [dataByID, setDataById] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const getDataByID = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/v1/get-myservicebyId/?_id=${searchParams.get("_id")}`
      );
      setDataById(response.data.data.findData);
      setImgArr([
        response.data.data.findData.img,
        response.data.data.findData.sub_img1,
        response.data.data.findData.sub_img2,
      ]);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  const otherService = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-myservice`
      );
      setOtherData(response.data.data.findData);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getDataByID();
    otherService();
  }, []);

  return (
    <>
      <div className="col-lg-2">
        <Sidenav />
      </div>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Slider {...sliderSettings}>
          {imgArr.map((item, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <img
                src={item}
                alt={`Service Image ${index + 1}`}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </Box>
          ))}
        </Slider>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {dataByID.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {dataByID.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              What We Provide
            </Typography>
            <Typography variant="body2">{dataByID.provide_desc}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              About the Service
            </Typography>
            <Typography variant="body2">{dataByID.service_desc}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Other Services
          </Typography>
          <Grid container spacing={2}>
            {otherData &&
              otherData.map((otherService, i) => {
                if (i > 0 && i < 4) {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={i}>
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
                          src={otherService.img}
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
                  );
                }
                return null;
              })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default MySingleService;
