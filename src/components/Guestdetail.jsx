import React, { useState, forwardRef } from 'react';
import { TextField, Tabs, Tab, Button, Dialog, DialogTitle, DialogContent, DialogActions, Slide, IconButton, FormControlLabel, Checkbox, Box, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import HotelIcon from '@mui/icons-material/Hotel';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

// Define a transition for the modal
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Guestdetail = () => {
  const [title, setTitle] = useState(0);
  const [open, setOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [addOns, setAddOns] = useState({
    meal: false,
    breakfast: false,
    extraBed: false,
    wifi: false,
    parking: false,
  });

  const handleTabChange = (event, newValue) => {
    setTitle(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
  };

  const handleSave = () => {
    const nameInput = document.getElementById('guest-name').value;
    setGuestName(nameInput);
    setOpen(false);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = () => {
    setGuestName('');
  };

  const handleAddOnChange = (event) => {
    setAddOns({
      ...addOns,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="guest-detail-box pt-5">
      <h4>Guest Details</h4>
      <p>Booking details will be sent to the email address provided by guest</p>
      <Tabs
        className='guest-tab pt-4'
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
      <form className='row guest-form pt-4'>
        <div className="col-lg-6 mb-4">
          <TextField 
            variant="outlined"
            label="First Name"
            fullWidth
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextField 
            variant="outlined"
            label="Last Name"
            fullWidth
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextField 
            variant="outlined"
            label="Enter Mobile Number"
            type="number"
            fullWidth
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextField 
            variant="outlined"
            label="Enter Email"
            type="email"
            fullWidth
          />
        </div>
      </form>

      <div className="new-guest">
        <h4>Other Guest</h4>
        <p>You may be required to show name of all guests for Reservation purpose</p>
        {guestName && (
          <div className="guest-name">
            <p>Guest: {''} <span>{guestName}</span></p>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        )}
        <div className='add-guest-box'>
          <Button onClick={handleClickOpen} disabled={!!guestName}>
            Add New Guest
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
        <DialogTitle className='dialog-heading'> <h6>{isEditing ? 'Edit Guest' : 'Add New Guest'}</h6> </DialogTitle>
        <DialogContent>
          <Tabs
            className='guest-tab pt-4'
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
          <form className='pt-4'>
            <TextField 
              id="guest-name"
              variant="outlined"
              label="Name"
              fullWidth
              className="mb-4"
              defaultValue={isEditing ? guestName : ''}
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
        <p>You can add your <b>Add-ons</b> here if any</p>
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
                label={<><RestaurantIcon /> Meal</>}
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
                label={<><FreeBreakfastIcon /> Breakfast</>}
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
                label={<><HotelIcon /> Extra Bed</>}
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
                label={<><WifiIcon /> Wi-Fi</>}
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
                label={<><LocalParkingIcon /> Parking</>}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Guestdetail;
