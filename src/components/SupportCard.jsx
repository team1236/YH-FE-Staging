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

const ContactFormContainer = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  margin: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
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

  const ismobileNumber = useMediaQuery("(max-width: 600px)");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await conatctAPI(formData);
    if (response?.success) {
      toast.success("Thank you for contacting us ", {
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
      <main style={{ padding: ismobileNumber ? "15px" : "60px" }}>
        <Grid container spacing={2}>
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
              <Card
                sx={{
                  padding: "14px",
                  // width: ismobileNumber ? "100%" : '100%',
                  // margin: ismobileNumber ? "0" : "auto",
                }}
              >
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
                    label="mobileNumber"
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
                    label="query/Query"
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
              </Card>
            </ContactFormContainer>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default ContactForm;
