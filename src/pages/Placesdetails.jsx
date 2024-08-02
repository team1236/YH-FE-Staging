import React, { useState } from "react";
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

const Placesdetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [members, setMembers] = useState(1);
  const [tourData, setTourData] = useState({
    name: "",
    mobileNumber: "",
    date_of_travel: "",
  });

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

    
    console.log("Form submitted with data:", tourData);
  };

  return (
    <div className="places-details">
      <div className="banner">
        <div className="banner-image banner-image-1"></div>
        <div className="banner-image banner-image-2"></div>
      </div>

      <section className="content-section">
        <h1>Udaipur: The City of Lakes and Palaces</h1>

        <div className="places-description">
          <div className="place">
            <img
              src="citypalace.webp"
              alt="City Palace"
              className="place-image"
            />
            <div className="description">
              <h2>City Palace</h2>
              <p>
                The City Palace in Udaipur is a magnificent architectural wonder
                that stands as a testament to the grandeur of the Mewar dynasty.
                Overlooking the serene waters of Lake Pichola, this sprawling
                complex is a blend of Rajasthani and Mughal architectural
                styles. Visitors can explore the ornate balconies, towering
                cupolas, and elaborate gateways that adorn this historical
                masterpiece. The palace houses a museum that offers a glimpse
                into the rich heritage and culture of Udaipur, featuring royal
                artifacts, paintings, and vintage photographs. The City Palace
                complex also includes several smaller palaces, such as the Amar
                Vilas, Badi Mahal, and Sheesh Mahal, each with its unique charm
                and history. A visit to the City Palace offers an unforgettable
                journey through the opulent history and royal splendor of
                Udaipur.
              </p>
              <ul>
                <li>Built over 400 years by the Maharanas of Mewar</li>
                <li>Intricate peacock mosaics and grand architecture</li>
                <li>Offers stunning views of the city and Lake Pichola</li>
                <li>Home to several museums showcasing royal artifacts</li>
                <li>Beautifully adorned with balconies, towers, and domes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="places-description reverse">
          <div className="place">
            <div className="description">
              <h2>Lake Pichola</h2>
              <p>
                Lake Pichola is an enchanting artificial lake in Udaipur, known
                for its breathtaking beauty and tranquil ambiance. Constructed
                in 1362 AD, it is surrounded by majestic hills, heritage
                palaces, and ghats. The lake's shimmering waters provide a
                picturesque setting for boat rides, offering visitors a unique
                perspective of Udaipur's iconic landmarks, including the Lake
                Palace and Jag Mandir. The scenic views during sunrise and
                sunset are particularly captivating, with the play of colors
                reflecting on the lake's surface. The surrounding area of Lake
                Pichola is dotted with several important sites, such as the Arsi
                Vilas Bird Sanctuary and the Mohan Mandir. Whether you're
                seeking a peaceful retreat or an adventure on the water, Lake
                Pichola offers a perfect blend of natural beauty and cultural
                significance.
              </p>
              <ul>
                <li>Artificial lake created in 1362 AD</li>
                <li>Surrounded by grand palaces, temples, and ghats</li>
                <li>Offers picturesque beauty and serene boat rides</li>
                <li>Provides stunning views of Udaipur's iconic landmarks</li>
                <li>Popular spot for photography and sightseeing</li>
              </ul>
            </div>
            <img src="lake.jpg" alt="Lake Pichola" className="place-image" />
          </div>
        </div>

        <div className="places-description">
          <div className="place">
            <img src="jagmandir.jpg" alt="Jag Mandir" className="place-image" />
            <div className="description">
              <h2>Jag Mandir</h2>
              <p>
                Jag Mandir, often referred to as the "Lake Garden Palace," is an
                exquisite palace located on an island in Lake Pichola. This
                17th-century marvel was built by the Mewar kings and is renowned
                for its beautiful gardens, intricate carvings, and majestic
                architecture. The palace played a significant role in history,
                serving as a refuge for Mughal emperor Shah Jahan during a
                family dispute. Visitors to Jag Mandir can explore the stunning
                courtyards, marble sculptures, and lush green gardens that make
                this palace a tranquil oasis. The palace also offers panoramic
                views of Udaipur and its surrounding lakes, making it a favorite
                spot for both locals and tourists. Whether you're interested in
                history, architecture, or simply looking for a peaceful escape,
                Jag Mandir provides a fascinating glimpse into Udaipur's royal
                past.
              </p>
              <ul>
                <li>Historic 17th-century palace on an island in Lake Pichola</li>
                <li>Known as the "Lake Garden Palace"</li>
                <li>Famous for intricate carvings and beautiful gardens</li>
                <li>Offers stunning views of the lake and city</li>
                <li>Served as a refuge for Mughal emperor Shah Jahan</li>
              </ul>
            </div>
          </div>
        </div>
 
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
  );
};

export default Placesdetails;
