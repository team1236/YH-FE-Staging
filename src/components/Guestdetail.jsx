import React, { useState } from 'react';
import { TextField, Tabs, Tab } from '@mui/material';

const Guestdetail = () => {
  const [title, setTitle] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTitle(newValue);
  };

  return (
    <div className="guest-detail-box pt-5">
      <h4>Guest Details</h4>
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
      <form className='row guest-form pt-3'>
        <div className="col-lg-6 mb-5">
          <TextField 
            variant="outlined"
            label="First Name"
            fullWidth
          />
        </div>
        <div className="col-lg-6 mb-5">
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
    </div>
  );
}

export default Guestdetail;
