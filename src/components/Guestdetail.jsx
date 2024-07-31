import React, { useState, forwardRef } from "react";
import {
  TextField,
  Tabs,
  Tab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  IconButton,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import HotelIcon from "@mui/icons-material/Hotel";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

// Define a transition for the modal
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Guestdetail = ({ addOns, setAddOns, formData, setFormData }) => {
  const [title, setTitle] = useState(0);
  const [open, setOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTitle(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setPassengerIndex(null);
  };

  const handleMainPassengerChange = (e) => {
    setFormData({
      ...formData,
      mainPassenger: {
        ...formData.mainPassenger,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSave = () => {
    const nameInput = document.getElementById("guest-name").value;
    if (isEditing && passengerIndex !== null) {
      const updatedPassengers = formData.additionalPassengers.map(
        (passenger, index) => {
          if (index === passengerIndex) {
            return { ...passenger, name: nameInput };
          }
          return passenger;
        }
      );
      setFormData({ ...formData, additionalPassengers: updatedPassengers });
    } else {
      setFormData({
        ...formData,
        additionalPassengers: [
          ...formData.additionalPassengers,
          { name: nameInput },
        ],
      });
    }
    setOpen(false);
    setIsEditing(false);
    setPassengerIndex(null);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setOpen(true);
    setPassengerIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPassengers = formData.additionalPassengers.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, additionalPassengers: updatedPassengers });
  };

  const handleAddOnChange = (event) => {
    setAddOns({
      ...addOns,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="guest-detail-box pt-5">
      <h4>Passenger Details</h4>
      <p>
        Booking details will be sent to the email address provided by Passenger
      </p>
      <Tabs
        className="guest-tab pt-4"
        value={title}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Mr." />
        <Tab label="Mrs." />
        <Tab label="Ms." />
      </Tabs>
      <form className="row guest-form pt-4">
        <div className="col-lg-6 mb-4">
          <TextField
            name="firstName"
            variant="outlined"
            label="First Name"
            fullWidth
            value={formData.mainPassenger.firstName}
            onChange={handleMainPassengerChange}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextField
            name="lastName"
            variant="outlined"
            label="Last Name"
            fullWidth
            value={formData.mainPassenger.lastName}
            onChange={handleMainPassengerChange}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextField
            name="mobileNumber"
            variant="outlined"
            label="Enter Mobile Number"
            type="number"
            fullWidth
            value={formData.mainPassenger.mobileNumber}
            onChange={handleMainPassengerChange}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextField
            name="email"
            variant="outlined"
            label="Enter Email"
            type="email"
            fullWidth
            value={formData.mainPassenger.email}
            onChange={handleMainPassengerChange}
          />
        </div>
      </form>

      <div className="new-guest">
        <h4>Other Passenger</h4>
        <p>
          You may be required to show name of all Passengers for Reservation
          purpose
        </p>
        {formData.additionalPassengers.map((passenger, index) => (
          <div className="guest-name" key={index}>
            <p>
              Passenger: {""} <span>{passenger.name}</span>
            </p>
            <IconButton onClick={() => handleEdit(index)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <div className="add-Passenger-box">
          <Button onClick={handleClickOpen} disabled={open}>
            {isEditing ? "Edit Passenger" : "Add New Passenger"}
          </Button>
        </div>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="dialog-heading">
          {" "}
          <h6>{isEditing ? "Edit Passenger" : "Add New Passenger"}</h6>{" "}
        </DialogTitle>
        <DialogContent>
          <Tabs
            className="guest-tab pt-4"
            value={title}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Mr." />
            <Tab label="Mrs." />
            <Tab label="Ms." />
          </Tabs>
          <form className="pt-4">
            <TextField
              id="guest-name"
              variant="outlined"
              label="Name"
              fullWidth
              className="mb-4"
              defaultValue={
                isEditing && passengerIndex !== null
                  ? formData.additionalPassengers[passengerIndex].name
                  : ""
              }
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <div className="special-request-box pt-5">
        <h4>Add-ons</h4>
        <p>
          You can add your <b>Add-ons</b> here if any
        </p>
        <Box className="add-on-box">
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addOns.meal}
                    onChange={handleAddOnChange}
                    name="meal"
                  />
                }
                label={
                  <>
                    <RestaurantIcon /> Meal
                  </>
                }
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addOns.breakfast}
                    onChange={handleAddOnChange}
                    name="breakfast"
                  />
                }
                label={
                  <>
                    <FreeBreakfastIcon /> Breakfast
                  </>
                }
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addOns.extraBed}
                    onChange={handleAddOnChange}
                    name="extraBed"
                  />
                }
                label={
                  <>
                    <HotelIcon /> Extra Bed
                  </>
                }
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addOns.wifi}
                    onChange={handleAddOnChange}
                    name="wifi"
                  />
                }
                label={
                  <>
                    <WifiIcon /> Wi-Fi
                  </>
                }
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addOns.parking}
                    onChange={handleAddOnChange}
                    name="parking"
                  />
                }
                label={
                  <>
                    <LocalParkingIcon /> Parking
                  </>
                }
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Guestdetail;
