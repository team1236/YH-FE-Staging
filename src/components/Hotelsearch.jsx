import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

const Hotelsearch = () => {
  const [fromValue, setFromValue] = useState('');
  const [departureDateValue, setDepartureDateValue] = useState('');
  const [returnDateValue, setReturnDateValue] = useState('');
  const [passengerValue, setPassengerValue] = useState({ adults: 0, children: 0, infants: 0 });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleInputChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePassengerChange = (type, increment) => {
    setPassengerValue((prev) => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(prev[type] - 1, 0),
    }));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'passenger-popover' : undefined;

  return (
    <div className="search-section mt-3">
      <div className="search-banner">
        <div className='search-banner-text'>
          <h4>Search Hotels</h4>
          <p>Enjoy hassle-free bookings with Hospitality</p>
        </div>
        <div>
          <img src="human.png" alt="" width={167} height={150} />
        </div>
      </div>

      <div className="search-column">
        <div className="row search-input-column mt-3">
          <div className="col-lg-4 place-field">
            <div className={`location-input ${fromValue ? 'active' : ''}`}>
              <input
                type="text"
                id="from"
                className="input-field"
                placeholder='Enter Locality, landmark, city or hotel'
                value={fromValue}
                onChange={(event) => handleInputChange(event, setFromValue)}
              />
              <span className='location-icon'><LocationOnOutlinedIcon /></span>
            </div>
          </div>

          <div className="col-lg-4 place-field">
            <div className={`input-wrapper from-input ${departureDateValue ? 'active' : ''}`}>
              <input
                type="date"
                id="departureDate"
                className="input-field"
                placeholder="dd-mm-yyyy"
                value={departureDateValue}
                onChange={(event) => handleInputChange(event, setDepartureDateValue)}
              />
            </div>
            <div className={`input-wrapper to-input ${returnDateValue ? 'active' : ''}`}>
              <input
                type="date"
                id="returnDate"
                className="input-field"
                placeholder="dd-mm-yyyy"
                value={returnDateValue}
                onChange={(event) => handleInputChange(event, setReturnDateValue)}
              />
            </div>
          </div>

          <div className="col-lg-4 popover-box">
            <div className={`input-wrapper passenger-input ${passengerValue.adults > 0 || passengerValue.children > 0 || passengerValue.infants > 0 ? 'active' : ''}`}>
              <label htmlFor="passenger" className="input-label">
                <PersonOutlineOutlinedIcon className='user-icon' /> Passenger
              </label>
              <input
                type="text"
                id="passenger"
                className="input-field"
                value={
                  `${passengerValue.adults > 0 ? passengerValue.adults + ' Adult(s), ' : ''}`
                  + `${passengerValue.children > 0 ? passengerValue.children + ' Child(ren), ' : ''}`
                  + `${passengerValue.infants > 0 ? passengerValue.infants + ' Infant(s)' : ''}`
                }
                readOnly
                onClick={handleClick}
              />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <Box p={2} className="passenger-popover">
                  <div className="passenger-item">
                    <div>Adults:</div>
                    <Button onClick={() => handlePassengerChange('adults', false)} variant="outlined" size="small" className="ms-3">
                      <RemoveIcon />
                    </Button>
                    <span className="passenger-count">{passengerValue.adults}</span>
                    <Button onClick={() => handlePassengerChange('adults', true)} variant="outlined" size="small">
                      <AddIcon />
                    </Button>
                  </div>
                  <div className="passenger-item">
                    <div>Children:</div>
                    <Button onClick={() => handlePassengerChange('children', false)} variant="outlined" size="small" className="ms-1">
                      <RemoveIcon />
                    </Button>
                    <span className="passenger-count">{passengerValue.children}</span>
                    <Button onClick={() => handlePassengerChange('children', true)} variant="outlined" size="small">
                      <AddIcon />
                    </Button>
                  </div>
                  <div className="passenger-item">
                    <div>Infants:</div>
                    <Button onClick={() => handlePassengerChange('infants', false)} variant="outlined" size="small" className="ms-3">
                      <RemoveIcon />
                    </Button>
                    <span className="passenger-count">{passengerValue.infants}</span>
                    <Button onClick={() => handlePassengerChange('infants', true)} variant="outlined" size="small">
                      <AddIcon />
                    </Button>
                  </div>
                </Box>
              </Popover>
            </div>
          </div>
        </div>
        <div className="search-button">
          <button>
            Search Hotels <span className="icon-wrapper"><HotelOutlinedIcon /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotelsearch;
