import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const Detailselectroom = () => {

    
    const [passengerValue, setPassengerValue] = useState({ adults: 0, children: 0, infants: 0, rooms: 0 });
    const [anchorEl, setAnchorEl] = useState(null);
  

  
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
 <>
 <div className="detail-pay-column">
        <h4>₹8,993 night</h4>
<div className="date-guest-box pt-4">
<div className="date-detail-box">
        <div className='input-wrapper from-input'>
              <DatePicker
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-in"
              />
            </div>
            <div className='input-wrapper to-input'>
              <DatePicker
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-out"
              />
            </div>
        </div>
        <div className={`input-wrapper detail-passenger passenger-input ${passengerValue.adults > 0 || passengerValue.children > 0 || passengerValue.infants > 0 || passengerValue.rooms > 0 ? 'active' : ''}`}>
              <label htmlFor="passenger" className="input-label">
                <PersonOutlineOutlinedIcon className='user-icon' /> Guest room
              </label>
              <input
                type="text"
                id="passenger"
                className="input-field"
                value={
                  `${passengerValue.adults > 0 ? passengerValue.adults + ' Adult(s), ' : ''}`
                  + `${passengerValue.children > 0 ? passengerValue.children + ' Child(ren), ' : ''}`
                  + `${passengerValue.infants > 0 ? passengerValue.infants + ' Infant(s), ' : ''}`
                  + `${passengerValue.rooms > 0 ? passengerValue.rooms + ' Room(s)' : ''}`
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
                  <div className="passenger-item">
                    <div>Rooms:</div>
                    <Button onClick={() => handlePassengerChange('rooms', false)} variant="outlined" size="small" className="ms-3">
                      <RemoveIcon />
                    </Button>
                    <span className="passenger-count">{passengerValue.rooms}</span>
                    <Button onClick={() => handlePassengerChange('rooms', true)} variant="outlined" size="small">
                      <AddIcon />
                    </Button>
                  </div>
                </Box>
              </Popover>
            </div>
</div>

<div className="policy-box pt-3">
        <h5>Select Room</h5>
        <div className="cancel-box">
            <div className="deluxe-room">
            <div className='select-room-box'>
          <img src="detail3.webp" alt="" />
        </div>
        <div className="room-type-box">
        <p>Deluxe Room </p>
        </div>
        <div className="policy-radio">
             <input className="form-check-input" type="radio" name="flexRadioDefault0" id="flexRadioDefault0"/>
             </div>
            </div>
            <hr />
            <div className="deluxe-room">
            <div className='select-room-box'>
          <img src="detail3.webp" alt="" />
        </div>
        <div className="room-type-box">
        <p>Basic Room </p>
        </div>
        <div className="policy-radio">
             <input className="form-check-input" type="radio" name="flexRadioDefault0" id="flexRadioDefault0"/>
             </div>
            </div>
        </div>
    </div>

<div className="policy-box pt-3">
        <h5>Cancellation Policies</h5>
        <div className="cancel-box">
            <div>
             <div className="policy-radio">
             <label htmlFor="">Non-refundable · ₹44,500 total </label>
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
             </div>
            </div>
            <hr />
            <div>
            <div className="policy-radio">
             <label htmlFor="">Refundable · ₹49,963 total </label>
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
             </div>
               <p>Free cancellation before 5 Aug. Cancel before 28 Aug for a partial refund.</p>
            </div>
        </div>
    </div>


    <div className="reserve-button mt-4">
       <Link to="/checkout"> <button>Book Room</button></Link>
    </div>

    </div>
 </>
  )
}

export default Detailselectroom