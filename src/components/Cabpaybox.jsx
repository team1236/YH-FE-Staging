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

const Cabpaybox = () => {
  const [passengerValue, setPassengerValue] = useState({ adults: 0, children: 0, infants: 0 });
  const [anchorEl, setAnchorEl] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

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

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== '') {
      setCouponApplied(true);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'passenger-popover' : undefined;

  return (
    <>
      <div className="detail-pay-column">
        <h4>₹1500 Trip</h4>
        <div className="date-guest-box pt-4">
          <div className="date-detail-box">
            <div className='input-wrapper from-input'>
              <DatePicker
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Departure Date"
              />
            </div>
            <div className='input-wrapper to-input'>
              <DatePicker
                className="input-field"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                placeholderText="Departure Time"
              />
            </div>
          </div>
          <div className={`input-wrapper detail-passenger passenger-input ${passengerValue.adults > 0 || passengerValue.children > 0 || passengerValue.infants > 0 ? 'active' : ''}`}>
            <label htmlFor="passenger" className="input-label">
              <PersonOutlineOutlinedIcon className='user-icon' /> Passengers
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

        <div className="price-detail-box mt-3">
          <h4>Price Breakup Details</h4>
          <div className='breakdown-box'>
            <h5>Drop Off</h5>
            <h6>₹1500</h6>
          </div>
          <div className='breakdown-box'>
            <h5>Service Fee</h5>
            <h6>₹100</h6>
          </div>
          <div className='breakdown-box'>
            <h5>Coupon Discount</h5>
            <h6>- ₹50</h6>
          </div>
          <hr />
          <div className='total-price breakdown-box'>
            <h5>Total Price</h5>
            <h6>₹1550</h6>
          </div>
        </div>

        <div className="reserve-button mt-4">
          <Link to=""> <button>Book Vehicle</button></Link>
        </div>

      </div>

      <div className="apply-coupon-box mt-4">
        <h4>Apply Your Coupon card</h4>
        <form className="coupon-box mt-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className='form-control'
            value={couponCode}
            onChange={handleCouponChange}
          />
          <button
            onClick={handleApplyCoupon}
            disabled={couponCode.trim() === '' || couponApplied}
          >
            {couponApplied ? 'Applied' : 'Apply'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Cabpaybox;
