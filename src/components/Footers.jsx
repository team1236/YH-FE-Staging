import React from "react";
import { Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const linkStyle = {
    lineHeight: "1.5",
    color: "textSecondary",
    textDecoration: "none",
  };

  return (
    <footer
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px 0",
        marginTop: "50px",
        fontFamily: "Euclid Circular A', sans-serif",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{ width: "100%", paddingLeft: "8%", paddingRight: "8%" }}
      >
        <Grid item xs={12} md={4}>
          <img
            src="/mainLogo.png"
            alt="Yours Host Logo"
            style={{ marginBottom: "10px", width: "175px" }}
          />
          <Typography variant="body2">
            V 504, The Atrium Hotel, (Sarovar portico) Near By Shooting Range
            Rd, Surajkund, Faridabad , <br />
            New Delhi, Haryana 121009
          </Typography>
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            Email: info@yourshospitality.com
            <br />
            Phone: 8510005461/62/63/64/65/67
          </Typography>
          <Grid container spacing={1} style={{ marginTop: "10px" }}>
            <Grid item>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="inherit"
              >
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="footer-column" item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom style={linkStyle}>
                Popular Domestic Flight
              </Typography>
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Delhi Goa flights
              </Link>
              <br />
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Mumbai Delhi flights
              </Link>
              <br />
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Delhi Kolkata flights
              </Link>
              <br />
              {/* Add more links as needed */}
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Popular Hotels
              </Typography>
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Goa hotels
              </Link>
              <br />
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Mumbai hotels
              </Link>
              <br />
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Bangalore hotels
              </Link>
              <br />
              {/* Add more links as needed */}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Popular Hotel Chains
              </Typography>
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Taj Group
              </Link>
              <br />
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                Sarovar Group of Hotels
              </Link>
              <br />
              <Link className="footer-link" href="#" style={linkStyle} color="textSecondary">
                V Resorts
              </Link>
              <br />
              {/* Add more links as needed */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ marginTop: "20px" }}
      >
        © 2024 Yours Hospitality | Privacy | Security | Terms of Use | Grievance
        Redressal
      </Typography>
    </footer>
  );
};

export default Footer;
