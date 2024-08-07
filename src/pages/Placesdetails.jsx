import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useLocation } from "react-router-dom";
import handleRazorPay from "../utils/paymentMethod";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "../components/Ourpartners";
import Sidenav from "../components/Sidenav";

const Placesdetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [members, setMembers] = useState(1);
  const [tourData, setTourData] = useState({
    name: "",
    mobileNumber: "",
    date_of_travel: "",
  });
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [placeData, setPlaceData] = useState(null);

  const getPlaceData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/v1/get-hotel-packagebyId?_id=${searchParams.get("_id")}`
      );

      setPlaceData(response.data.data.findData);
    } catch (error) {
      console.error("Error fetching place data:", error);
      toast.error("Failed to fetch place data");
    }
  };

  useEffect(() => {
    getPlaceData();
  }, []);

  const handleIncrement = () => {
    setMembers((prevMembers) => prevMembers + 1);
  };

  const handleDecrement = () => {
    setMembers((prevMembers) => (prevMembers > 1 ? prevMembers - 1 : 1));
  };

  const handleChange = (e) => {
    setTourData({ ...tourData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Cookies.get("yh_auth_token")) {
      toast.error("Please login to continue");
      return;
    }
    if (
      tourData.name === "" ||
      tourData.mobileNumber === "" ||
      tourData.date_of_travel === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    const data = {
      location: placeData.title,
      details: placeData.description,
      price: placeData.price * members,
      name: tourData.name,
      mobileNumber: tourData.mobileNumber,
      date_of_travel: tourData.date_of_travel,
      total_members: members,
      dateOfBooking: new Date().toISOString().split("T")[0],
      serviceType: "Holiday Package",
      email: localStorage.getItem("yh_user_email"),
    };
    handleRazorPay(data, placeData.price * members);
  };

  const renderBannerImages = () => {
    return placeData?.placeData?.map((ele, i) => (
      <div
        className={`banner-image banner-image-${i + 1}`}
        key={i}
        style={{ backgroundImage: `url(${ele.image})` }}
      ></div>
    ));
  };

  const renderPlaceDetails = (index) => {
    const place = placeData?.placeData?.[index];
    if (!place) return null;

    return (
      <div className="places-description">
        <div className="place">
          <img src={place.image} alt={place.title} className="place-image" />
          <div className="description">
            <h2>{place.title}</h2>
            <p>{place.description}</p>
            <ul>
              {place.list_desc.split(",").map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="app-container">
        <main className="app-main">
          <div className="container mt-4">
            <div className="row">
              <div className="col-lg-2">
                <Sidenav />
              </div>
              <div className="col-lg-10">
                <div className="places-details">
                  <div className="banner">{renderBannerImages()}</div>

                  <section className="content-section">
                    <h1>
                      {placeData?.title}: {placeData?.sub_desc}
                    </h1>

                    {renderPlaceDetails(0)}
                    {renderPlaceDetails(1)}
                    {renderPlaceDetails(2)}

                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <Box
                          component="form"
                          sx={{
                            mt: 4,
                            p: 2,
                            bgcolor: "#f8f8f8",
                            borderRadius: 2,
                            boxShadow: 1,
                          }}
                          onSubmit={handleSubmit}
                        >
                          <Typography variant="h6" component="h2" gutterBottom>
                            Book Your Tour
                          </Typography>
                          <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            required
                            name="name"
                            value={tourData.name}
                            onChange={handleChange}
                          />
                          <TextField
                            fullWidth
                            label="Contact Number"
                            margin="normal"
                            required
                            name="mobileNumber"
                            value={tourData.mobileNumber}
                            onChange={handleChange}
                          />
                          <TextField
                            fullWidth
                            label="Tour Start Date"
                            type="date"
                            name="date_of_travel"
                            value={tourData.date_of_travel}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            required
                          />
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mt: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ mr: 2 }}>
                              Number of Members:
                            </Typography>
                            <IconButton onClick={handleDecrement}>
                              <RemoveIcon />
                            </IconButton>
                            <TextField
                              value={members}
                              inputProps={{
                                readOnly: true,
                                style: { textAlign: "center", width: "50px" },
                              }}
                              sx={{ mx: 1 }}
                            />
                            <IconButton onClick={handleIncrement}>
                              <AddIcon />
                            </IconButton>
                          </Box>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                              mt: 2,
                              background: "#624fa8",
                              "&:hover": {
                                background: "#624fa8",
                              },
                            }}
                          >
                            Submit
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </section>
                </div>
                <WhyChooseUs />
                {/* <Newsletter/> */}
                <OurPartners />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Placesdetails;
