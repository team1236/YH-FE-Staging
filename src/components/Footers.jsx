import React from "react";
import { Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const linkStyle = {
    lineHeight: "1.5",
    color: "textSecondary",
    textDecoration: 'none'

  };

  return (
    <footer
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px 0",
        marginTop: "50px",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}
      >
        <Grid item xs={12} md={4}>
          <img
            src="/mainLogo.png"
            alt="Yours Host Logo"
            style={{ marginBottom: "10px" }}
          />
          <Typography variant="h6" gutterBottom>
            Yours Hospitality
          </Typography>
          <Typography variant="body2">
            Vivanta Faridabad, Faridabad
            <br />
            Faridabad, Haryana, 121009
            <br />
            Country
          </Typography>
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            Email: contact@yourshost.com
            <br />
            Phone: +91 85100 05461, +91 85100 05460
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
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom style={linkStyle}>
                Popular Domestic Flight
              </Typography>
              <Link href="#" style={linkStyle} color="textSecondary">
                Delhi Goa flights
              </Link>
              <br />
              <Link href="#" style={linkStyle} color="textSecondary">
                Mumbai Delhi flights
              </Link>
              <br />
              <Link href="#" style={linkStyle} color="textSecondary">
                Delhi Kolkata flights
              </Link>
              <br />
              {/* Add more links as needed */}
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Popular Hotels
              </Typography>
              <Link href="#" style={linkStyle} color="textSecondary">
                Goa hotels
              </Link>
              <br />
              <Link href="#" style={linkStyle} color="textSecondary">
                Mumbai hotels
              </Link>
              <br />
              <Link href="#" style={linkStyle} color="textSecondary">
                Bangalore hotels
              </Link>
              <br />
              {/* Add more links as needed */}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Popular Hotel Chains
              </Typography>
              <Link href="#" style={linkStyle} color="textSecondary">
                Taj Group
              </Link>
              <br />
              <Link href="#" style={linkStyle} color="textSecondary">
                Sarovar Group of Hotels
              </Link>
              <br />
              <Link href="#" style={linkStyle} color="textSecondary">
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