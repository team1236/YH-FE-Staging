import React from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EastIcon from "@mui/icons-material/East";
import GradeIcon from "@mui/icons-material/Grade";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: isMobile ? 0 : 3 }}>{children}</Box>
    </div>
  );
};

const Yhhotellist = () => {
  // const iMobile = useMediaQuery(`()`)
  const isMobile = useMediaQuery("(max-width:600px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hotelData = [
    {
      img: "deal1.png",
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      price: "₹848.25",
      reviews: "672",
      rating: "4.96",
    },
    {
      img: "deal2.png",
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      price: "₹848.25",
      reviews: "672",
      rating: "4.96",
    },
    // Add more hotel data as needed
  ];

  const apartmentData = [
    {
      img: "deal3.png",
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      price: "₹848.25",
      reviews: "672",
      rating: "4.96",
    },
    {
      img: "deal1.png",
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      price: "₹848.25",
      reviews: "672",
      rating: "4.96",
    },
    // Add more apartment data as needed
  ];

  const renderCard = (item, type) => (
    <Grid item xs={12} sm={6} md={4} key={item.title}>
      <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardMedia
          component="img"
          height="240"
          image={item.img}
          alt={item.title}
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h7">
              <GradeIcon /> {item.rating} <span>({item.reviews} reviews)</span>
            </Typography>
          <Typography variant="h7" component="div" sx={{ pt: 3,fontWeight:"550" }}>
            {item.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <LocationOnOutlinedIcon /> {item.location}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", pt: 2 }}>
            {type === "hotel" ? (
              <>
                <Typography variant="h6" component="div">
                  {item.price} <span>/ person</span>
                </Typography>
                <Button
                  variant="contained"
                  //   color="primary"
                  sx={{ ml: 4, background: "#624fa8", color: "white" }}
                >
                  Book Now
                </Button>
              </>
            ) : (
              <>
              
                <Button
                  startIcon={<WhatsAppIcon />}
                  variant="outlined"
                  color="success"
                  sx={{ ml: 0 }}
                >
                  WhatsApp
                </Button>
                <Button
                  startIcon={<ContactMailIcon />}
                  variant="contained"
                  color="secondary"
                  sx={{ ml: 2 }}
                >
                  Book Now
                </Button>
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="YH Hotels" />
          <Tab label="YH Apartments" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="deal-heading pt-4 mb-3">
          <div>
            <h4>Top Rated YH Hotels</h4>
            <p>Quality as judged by customers. Book at the ideal price!</p>
          </div>
        </div>
        <Grid container spacing={2}>
          {hotelData.map((item) => renderCard(item, "hotel"))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="deal-heading pt-4 mb-3">
          <div>
            <h4>Top Rated YH Apartments</h4>
            <p>Quality as judged by customers. Book at the ideal price!</p>
          </div>
        </div>
        <Grid container spacing={2}>
          {apartmentData.map((item) => renderCard(item, "apartment"))}
        </Grid>
      </TabPanel>
    </>
  );
};

export default Yhhotellist;
