import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { conatctAPI } from "../store/api/contact";
import toast from "react-hot-toast";

const ContactFormContainer = styled(Card)(({ theme }) => ({
  maxWidth: "600px",
  margin: "auto",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    query: "",
  });
  const [isShow, setShow] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await conatctAPI(formData);
    if (response?.success) {
      toast.success("Thank you for contacting us", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setShow(true);
      setFormData({
        // Reset form fields
        name: "",
        mobileNumber: "",
        email: "",
        query: "",
      });
    } else {
      toast.error("Something went wrong", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      {isShow && (
        <div className="contact-us-message">
          Our support team will get back to you shortly.
        </div>
      )}
      <Box
        component="main"
        sx={{
          padding: isMobile ? "15px" : "60px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="/contact.svg"
              alt="Contact"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                margin: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactFormContainer>
              <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Your Query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ backgroundColor: "#624fa8" }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </ContactFormContainer>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <Card
                sx={{
                  p: 3,
                  backgroundColor: "#f0f0f0",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Head Office Address
                </Typography>
                <Typography>
                  V 504, The Atrium Hotel, (Sarovar portico)
                </Typography>
                <Typography>Near By Shooting Range Rd, Surajkund,</Typography>
                <Typography>Faridabad , New Delhi,</Typography>
                <Typography>Haryana 121009</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card sx={{ p: 2, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3506.659558452917!2d77.28069307528358!3d28.489797575743058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sV%20504%2C%20The%20Atrium%20Hotel%2C%20(Sarovar%20portico)%20Near%20By%20Shooting%20Range%20Rd%2C%20Surajkund%2C%20Faridabad%20%2C%20New%20Delhi%2C%20Haryana%20121009!5e0!3m2!1sen!2sin!4v1722539363719!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
