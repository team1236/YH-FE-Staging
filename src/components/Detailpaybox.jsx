import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import handleRazorPay from "../utils/paymentMethod";

const Detailpaybox = ({ formData, paramsData, addOns }) => {
  const [passengerValue, setPassengerValue] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    rooms: 0,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [couponCode, setCouponCode] = useState("");
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

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponApplied(true);
    getCoupenData();
  };

  const open = Boolean(anchorEl);
  const id = open ? "passenger-popover" : undefined;

  function dateDifference(date1, date2) {
    // Parse the dates with a consistent format
    const [day1, month1, year1] = date1.split("-").map(Number);
    const [day2, month2, year2] = date2.split("-").map(Number);

    // Create Date objects with the correct order: year, month (0-indexed), day
    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);

    // Calculate the difference in time
    const timeDifference = Math.abs(d1 - d2);

    // Convert time difference from milliseconds to days
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return dayDifference;
  }

  const [coupenData, setCoupenData] = useState(null);
  const getCoupenData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/verify-offers`,
        { coupen_code: couponCode, type: "hotels" }
      );
      if (response.data.success) {
        toast.success("Coupen Applied Successfully");
        setCoupenData(response.data.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("error", error);
      return error;
    }
  };

  const handlePayment = () => {
    let final_Amount =
      Number(paramsData.price) +
      Number(paramsData.service) +
      Number(paramsData.tax) -
      (coupenData ? Number(coupenData) : 0);

    let data = {
      hotelName: paramsData.hotelName,
      location: paramsData.location,
      check_in: paramsData.check_in,
      checkout: paramsData.checkout,
      room_type: paramsData.room_type,
      total_room: paramsData.total_room,
      serviceType: "hotel",
      total_passenger: formData.additionalPassengers.length + 1,
      guest_details: JSON.stringify(formData.additionalPassengers),
      add_ons: JSON.stringify(addOns),
      total_amount: final_Amount,
      mobileNumber: formData.mainPassenger.mobileNumber,
      passengerName:
        formData.mainPassenger.firstName +
        " " +
        formData.mainPassenger.lastName,
      dateOfBooking: new Date().toISOString().split("T")[0],
      email: formData.mainPassenger.email,
    };
    handleRazorPay(data, final_Amount);
  };

  return (
    <>
      <div className="detail-pay-column">
        <h4>₹{paramsData.price} per night</h4>
        <div className="date-guest-box pt-4">
          <div className="date-detail-box">
            <div className="input-wrapper from-input">
              <DatePicker
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-in"
                value={paramsData.check_in}
              />
            </div>
            <div className="input-wrapper to-input">
              <DatePicker
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-out"
                value={paramsData.checkout}
              />
            </div>
          </div>
          <div
            className={`input-wrapper detail-passenger passenger-input ${
              paramsData.total_passenger > 0 ||
              paramsData.total_passenger > 0 ||
              paramsData.total_passenger > 0 ||
              paramsData.total_passenger > 0
                ? "active"
                : ""
            }`}
          >
            <label htmlFor="passenger" className="input-label">
              <PersonOutlineOutlinedIcon className="user-icon" /> Guest room
            </label>
            <input
              type="text"
              id="passenger"
              className="input-field"
              value={paramsData.total_passenger}
              readOnly
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Box p={2} className="passenger-popover">
                <div className="passenger-item">
                  <div>Adults:</div>
                  <Button
                    onClick={() => handlePassengerChange("adults", false)}
                    variant="outlined"
                    size="small"
                    className="ms-3"
                  >
                    <RemoveIcon />
                  </Button>
                  <span className="passenger-count">
                    {passengerValue.adults}
                  </span>
                  <Button
                    onClick={() => handlePassengerChange("adults", true)}
                    variant="outlined"
                    size="small"
                  >
                    <AddIcon />
                  </Button>
                </div>
                <div className="passenger-item">
                  <div>Children:</div>
                  <Button
                    onClick={() => handlePassengerChange("children", false)}
                    variant="outlined"
                    size="small"
                    className="ms-1"
                  >
                    <RemoveIcon />
                  </Button>
                  <span className="passenger-count">
                    {passengerValue.children}
                  </span>
                  <Button
                    onClick={() => handlePassengerChange("children", true)}
                    variant="outlined"
                    size="small"
                  >
                    <AddIcon />
                  </Button>
                </div>
                <div className="passenger-item">
                  <div>Infants:</div>
                  <Button
                    onClick={() => handlePassengerChange("infants", false)}
                    variant="outlined"
                    size="small"
                    className="ms-3"
                  >
                    <RemoveIcon />
                  </Button>
                  <span className="passenger-count">
                    {passengerValue.infants}
                  </span>
                  <Button
                    onClick={() => handlePassengerChange("infants", true)}
                    variant="outlined"
                    size="small"
                  >
                    <AddIcon />
                  </Button>
                </div>
                <div className="passenger-item">
                  <div>Rooms:</div>
                  <Button
                    onClick={() => handlePassengerChange("rooms", false)}
                    variant="outlined"
                    size="small"
                    className="ms-3"
                  >
                    <RemoveIcon />
                  </Button>
                  <span className="passenger-count">
                    {passengerValue.rooms}
                  </span>
                  <Button
                    onClick={() => handlePassengerChange("rooms", true)}
                    variant="outlined"
                    size="small"
                  >
                    <AddIcon />
                  </Button>
                </div>
              </Box>
            </Popover>
          </div>
        </div>

        {/* <div className="policy-box pt-3">
          <h5>Cancellation Policies</h5>
          <div className="cancel-box">
            <div>
              <div className="policy-radio">
                <label htmlFor="">Non-refundable · ₹44,500 total </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
              </div>
            </div>
            <hr />
            <div>
              <div className="policy-radio">
                <label htmlFor="">Refundable · ₹49,963 total </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </div>
              <p>
                Free cancellation before 5 Aug. Cancel before 28 Aug for a
                partial refund.
              </p>
            </div>
          </div>
        </div> */}

        <div className="price-detail-box mt-3">
          <h4>Price Breakup Details</h4>
          <div className="breakdown-box">
            <h5>
              ₹{paramsData.price} x{" "}
              {dateDifference(paramsData.checkout, paramsData.check_in)} nights
            </h5>
            <h6>
              ₹
              {Number(paramsData.price) *
                Number(
                  dateDifference(paramsData.checkout, paramsData.check_in)
                )}
            </h6>
          </div>
          <div className="breakdown-box">
            <h5>Service Fee</h5>
            <h6>₹{paramsData.service}</h6>
          </div>
          <div className="breakdown-box">
            <h5>Tax Fee</h5>
            <h6>₹{paramsData.tax}</h6>
          </div>
          {coupenData && (
            <div className="breakdown-box">
              <h5>Coupon Discount</h5>
              <h6>- ₹{coupenData}</h6>
            </div>
          )}
          <hr />
          <div className="total-price breakdown-box">
            <h5>Total Price</h5>
            <h6>
              ₹
              {Number(paramsData.price) *
                Number(
                  dateDifference(paramsData.checkout, paramsData.check_in)
                ) +
                Number(paramsData.service) +
                Number(paramsData.tax) -
                (coupenData ? Number(coupenData) : 0)}
            </h6>
          </div>
        </div>

        <div className="reserve-button mt-4">
          <button onClick={handlePayment}>Book Room</button>
        </div>
      </div>

      <div className="apply-coupon-box mt-4">
        <h4>Apply Your Coupon card</h4>
        <form className="coupon-box mt-4" onSubmit={handleApplyCoupon}>
          <input
            type="text"
            className="form-control"
            value={couponCode}
            onChange={handleCouponChange}
          />
          <button style={{ cursor: "pointer" }}>
            {couponApplied ? "Applied" : "Apply"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Detailpaybox;
