import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  height: "90vh",
  width: {
    xs: "90vw", // For phones
    sm: "70vw", // For tablets
    md: "60vw", // For small laptops
    lg: "50vw", // For larger screens
  },
  overflowY: "scroll",
};

export default function ApModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [amenities, setAmenities] = React.useState("");
  const [reservation, setReserve] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [guestplace, setGuestPlace] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [id, setID] = React.useState("");
  const [hotelName, setHotelName] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleChangeAmenities = (event) => {
    setAmenities(event.target.value);
  };
  const handleChangeReservation = (event) => {
    setReserve(event.target.value);
  };
  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };
  const handleChangeGuestPlace = (event) => {
    setGuestPlace(event.target.value);
  };

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = event.target.value;
    setImages(newImages);
  };

  const handleSubmit = async () => {
    const payload = {
      type: "appartments",
      hotelName: hotelName,
      city: city,
      country: "India",
      state: "4",
      image: images[0],
      reviews: "102",
      price: price,
      room_avaliable_count: "150",
      recommended: "Good",
      guest_rating: "Good",
      star_category: "5",
      descriptionImages: images,
      description_about: description,
      description_amentities: [amenities],
      description_price_breakup_serviceFee: 850,
      description_price_breakup_taxFee: 450,
      description_nonRefundable: 1500,
      description_Refundable: 1000,
      description_google_map: location,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/add-yhhotels`,
        payload
      );
      if (response.status) {
        toast.success("Apartment Applied Successfully");
      } else {
        toast.error("Something went wrong");
      }
      window.location.reload();
    } catch (error) {
      console.log("error", error);
      return;
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Apartment Form
          </Typography>
          <Box
            sx={{
              paddingTop: "1rem",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Amenities
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={amenities}
                  label="Select Amenities"
                  onChange={handleChangeAmenities}
                >
                  <MenuItem value={"wifi"}>Wi-Fi</MenuItem>
                  <MenuItem value={"tv"}>TV</MenuItem>
                  <MenuItem value={"kitchen"}>Kitchen</MenuItem>
                  <MenuItem value={"washing"}>Washing Machine</MenuItem>
                  <MenuItem value={"freeparking"}>
                    Free Parking on Premises
                  </MenuItem>
                  <MenuItem value={"paidparking"}>
                    Paid Parking on Premises
                  </MenuItem>
                  <MenuItem value={"aircondition"}>Air Conditioning</MenuItem>
                  <MenuItem value={"dedicatedworkspace"}>
                    Dedicated Workspace
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose your reservation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={reservation}
                  label="Choose your reservation"
                  onChange={handleChangeReservation}
                >
                  <MenuItem value={"air"}>Air YH Guest</MenuItem>
                  <MenuItem value={"any"}>Any experience guest</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose best Place you describe
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={place}
                  label="Choose best Place you describe"
                  onChange={handleChangePlace}
                >
                  <MenuItem value={"house"}>House</MenuItem>
                  <MenuItem value={"barn"}>Barn</MenuItem>
                  <MenuItem value={"bed"}>Bed & breakfast</MenuItem>
                  <MenuItem value={"boat"}>Boat</MenuItem>
                  <MenuItem value={"cabin"}>Cabin</MenuItem>
                  <MenuItem value={"campervanr"}>Campervan/motorhome</MenuItem>
                  <MenuItem value={"case"}>Casa particular</MenuItem>
                  <MenuItem value={"castle"}>Castle</MenuItem>
                  <MenuItem value={"cave"}>Cave</MenuItem>
                  <MenuItem value={"container"}>Container</MenuItem>
                  <MenuItem value={"cycladic"}>Cycladic home</MenuItem>
                  <MenuItem value={"flat"}>Flat/apartment</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Guest Place
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={guestplace}
                  label="Guest Place"
                  onChange={handleChangeGuestPlace}
                >
                  <MenuItem value={"place"}>A Entire Place</MenuItem>
                  <MenuItem value={"room"}>A Room</MenuItem>
                  <MenuItem value={"sharedRoom"}>A Shared Room</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter you location"
                variant="outlined"
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
              />
            </Box>

            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Image 1 URL"
                variant="outlined"
                onChange={(e) => handleImageChange(0, e)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Image 2 URL"
                variant="outlined"
                onChange={(e) => handleImageChange(1, e)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Image 3 URL"
                variant="outlined"
                onChange={(e) => handleImageChange(2, e)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Image 4 URL"
                variant="outlined"
                onChange={(e) => handleImageChange(3, e)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Image 5 URL"
                variant="outlined"
                onChange={(e) => handleImageChange(4, e)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Description for flat/apartment"
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                rows={4}
                multiline
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Price"
                variant="outlined"
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Image URL for Govt. ID"
                variant="outlined"
                onChange={(e) => handleImageChange(4, e)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter Hotel Name"
                variant="outlined"
                onChange={(e) => setHotelName(e.target.value)}
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Enter City"
                variant="outlined"
                onChange={(e) => setCity(e.target.value)}
                fullWidth
              />
            </Box>
            <Box>
              <Button variant="contained" onClick={handleSubmit}>
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
