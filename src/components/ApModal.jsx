import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Autocomplete,
  Checkbox,
  IconButton,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  height: "90vh",
  width: {
    xs: "90vw", // For phones
    sm: "70vw", // For tablets
    md: "60vw", // For small laptops
    lg: "70vw", // For larger screens
  },
  overflowY: "scroll",
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const steps = [
  "Describe the Place",
  "Select Amenities",
  "Choose Reservation",
  "Guest Place",
  "Enter Location",
  "Enter Images",
  "Enter Description",
  "Enter Price",
  "Enter Hotel Name and City",
  "Review & Submit", // Added review step
];

const amenitiesList = [
  "Wi-Fi",
  "TV",
  "Kitchen",
  "Washing Machine",
  "Free Parking on Premises",
  "Paid Parking on Premises",
  "Air Conditioning",
  "Dedicated Workspace",
];

const reservationList = ["Air YH Guest", "Any experience guest"];

const placeList = [
  "House",
  "Hotel",
  "Bed & breakfast",
  "Boat",
  "Cabin",
  "Campervan/motorhome",
  "Casa particular",
  "Castle",
  "Cave",
  "Container",
  "Cycladic home",
  "Flat/apartment",
];

const guestPlaceList = ["Entire Place", "A Room", "A Shared Room"];

export default function ApModal({ open, setOpen, cabinClass }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [amenities, setAmenities] = React.useState([]);
  const [reservation, setReserve] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [guestplace, setGuestPlace] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [hotelName, setHotelName] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleClose = () => setOpen(false);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    // Optionally, you could also revoke object URLs here to free up memory
  };

  const handleSubmit = async () => {
    const types = cabinClass === "Hotels" ? "hotels" : "appartments";
    const payload = {
      type: types,
      hotelName,
      city,
      country: "India",
      state: "4",
      image: images[0],
      reviews: "102",
      price,
      room_avaliable_count: "150",
      recommended: "Good",
      guest_rating: "Good",
      star_category: "5",
      descriptionImages: images,
      description_about: description,
      description_amentities: amenities,
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
      if (response.status === 200) {
        setActiveStep(steps.length - 1);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Something went wrong");
    }
  };

  console.log("cabinClass", cabinClass);

  const handleFinalSubmit = () => {
    handleSubmit();
    toast.success("Successfully listed your property!");
    setOpen(false);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormControl fullWidth>
            <InputLabel>Describe the Place</InputLabel>
            <Select
              value={place}
              label="Describe the Place"
              onChange={(e) => setPlace(e.target.value)}
            >
              {placeList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      case 1:
        return (
          <FormControl fullWidth>
            <InputLabel id="reservation-label">Choose Reservation</InputLabel>
            <Select
              labelId="reservation-label"
              value={reservation}
              label="reservation-label"
              onChange={(e) => setReserve(e.target.value)}
            >
              {reservationList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      case 2:
        return (
          <FormControl fullWidth>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={amenitiesList}
              disableCloseOnSelect
              value={amenities}
              onChange={(event, newValue) => setAmenities(newValue)}
              getOptionLabel={(option) => option}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Amenities"
                  placeholder="Choose amenities"
                />
              )}
            />
          </FormControl>
        );
      case 3:
        return (
          <FormControl fullWidth>
            <InputLabel>Guest Place</InputLabel>
            <Select
              value={guestplace}
              label="Guest Place"
              onChange={(e) => setGuestPlace(e.target.value)}
            >
              {guestPlaceList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case 4:
        return (
          <TextField
            label="Enter Location"
            variant="outlined"
            fullWidth
            onChange={(e) => setLocation(e.target.value)}
          />
        );
      case 5:
        return (
          <>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ marginBottom: "16px", display: "block" }}
            />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{ position: "relative", margin: "8px" }}
                >
                  <img
                    src={image}
                    alt={`Uploaded preview ${index}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    style={{ position: "absolute", top: "4px", right: "4px" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </>
        );
      case 6:
        return (
          <TextField
            label="Enter Description for flat/apartment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
        );
      case 7:
        return (
          <TextField
            label="Enter Price"
            variant="outlined"
            fullWidth
            onChange={(e) => setPrice(e.target.value)}
          />
        );
      case 8:
        return (
          <>
            <TextField
              label="Enter Hotel Name"
              variant="outlined"
              fullWidth
              onChange={(e) => setHotelName(e.target.value)}
              style={{ marginBottom: "10px", width: "100%" }}
            />
            <TextField
              label="Enter City"
              variant="outlined"
              fullWidth
              onChange={(e) => setCity(e.target.value)}
            />
          </>
        );
      case 9: // Review step
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Review Your Details
            </Typography>
            <Typography>
              <strong>Hotel Name:</strong> {hotelName}
            </Typography>
            <Typography>
              <strong>City:</strong> {city}
            </Typography>
            <Typography>
              <strong>Description:</strong> {description}
            </Typography>
            <Typography>
              <strong>Price:</strong> {price}
            </Typography>
            <Typography>
              <strong>Location:</strong> {location}
            </Typography>
            <Typography>
              <strong>Amenities:</strong> {amenities.join(", ")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "16px" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded preview ${index}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "8px",
                  }}
                />
              ))}
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">Add Apartment /Hotel Form</Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box
          sx={{ paddingTop: "1rem", display: "flex", flexDirection: "column" }}
        >
          {renderStepContent(activeStep)}
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={handleFinalSubmit}>
                Confirm Submission
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
