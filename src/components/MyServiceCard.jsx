import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function ActionAreaCard() {
  const ServiceCard = [
    {
      title: "Corporate Travel",
      image:
        "https://lh4.googleusercontent.com/proxy/Pe3GvMSKM0BmGQeJxcw7MWNdFp_ZUAnPtnc9ctaQsUo_zRON5u11wTdx1UJSPRNIkJ3_nX1y3cPxlS04qKUK6Lw0CmIjt4LFgDtJ02MilOrKCWNp_iy7xyE5VpYmTN_Mg5x-aUuiA4AS8Gg",
    },
    {
      title: "Group Travel",
      image:
        "https://i0.wp.com/passporterapp.com/en/blog/wp-content/uploads/2023/05/Group-travel.jpg?fit=1271%2C768&ssl=1",
    },
    {
      title: "Exursion Booking",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FRR8suf8_Py8f-YWmKxEoL0Xzj8XnKwktg&s",
    },

    {
      title: "Hotels",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23172828.jpg?k=2f7634c19095088d6ffb2675206d22f78cef9a5b6ef6da68887cc27c048f186c&o=&hp=1",
    },
    {
      title: "Flights",
      image:
        "https://cdn.zeebiz.com/sites/default/files/2023/08/19/256870-air-india-reuters.jpg?im=FitAndFill=(1200,900)",
    },
    {
      title: "Booking Bus Tickets",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/12/369790172/RP/OR/ZR/200122440/bus-tickets-booking-service-250x250.png",
    },

    {
      title: "Corporate Event",
      image:
        "https://www.pingpongmoments.in/blog/wp-content/uploads/2019/12/Corporate-Event-Organisers-In-Gurgaon.png",
    },
    {
      title: "Corporate Meetings",
      image:
        "https://www.corporatemeetingpartner.com/uploads/7/4/4/3/74438425/istock-504987926_2_orig.jpg",
    },

    {
      title: "Event Management",
      image:
        "https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/09/How-Online-Education-is-Better-Than-Classroom-Education.jpg",
    },
    {
      title: "Hotel Bookings",
      image: "https://5.imimg.com/data5/EF/GO/MY-17287433/hotel-bookings.jpg",
    },
    {
      title: "Group Tours",
      image:
        "https://cdn.sanity.io/images/j84fdg6o/productionv2/007852f5c5c922f363e5cf133b0359f74dd39d8e-2560x1492.jpg?w=2560&h=1492&auto=format",
    },
    {
      title: "Incentive Tour",
      image:
        "https://meetings.skift.com/wp-content/uploads/2022/04/IncentiveTravel-feat.jpg",
    },
    {
      title: "Private Tour",
      image:
        "https://www.paristoversailles.com/wp-content/uploads/HG_Versailles-118.png",
    },
    {
      title: "Tour Package Bookings",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IyCtuDYBUdxXZnbP1rsXpJsZT4EUn3NrZg&s",
    },
    {
      title: "Supports Service",
      image:
        "https://www.revechat.com/wp-content/uploads/2022/02/117-Types-Process-Importance-of-Great-Customer-Support.jpg",
    },

    {
      title: "Holidays Package Tour",
      image:
        "https://5.imimg.com/data5/SE/WO/AK/SELLER-88382530/family-holiday-package.jpg",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Grid container spacing={2} justifyContent="center">
        {ServiceCard.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 300, margin: "auto" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="110"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent
                  sx={{
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
