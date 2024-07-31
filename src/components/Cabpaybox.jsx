import React, { useEffect, useState } from "react";
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
import DateRangeIcon from "@mui/icons-material/DateRange";
import handleRazorPay from "../utils/paymentMethod";

const Cabpaybox = ({ paramsData, formData }) => {
  const [passengerValue, setPassengerValue] = useState({
    adults: 0,
    children: 0,
    infants: 0,
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
  const [coupenData, setCoupenData] = useState(null);
  const getCoupenData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/verify-offers`,
        { coupen_code: couponCode, type: "transports" }
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

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponApplied(true);
    getCoupenData();
  };

  const open = Boolean(anchorEl);
  const id = open ? "passenger-popover" : undefined;

  const handleCheckout = () => {
    let final_Amount =
      Number(paramsData.price) +
      Number(paramsData.serviceFee) -
      (coupenData ? Number(coupenData) : 0);

    let data = {
      to: paramsData.to,
      from: paramsData.from,
      serviceType: paramsData.type,
      departure_date: `${paramsData.date} ${paramsData.month} ${paramsData.year}`,
      arrival_date: `${paramsData.date} ${paramsData.month} ${paramsData.year}`,
      departure_date_time: `${paramsData.day} ${paramsData.startTime}`,
      arrival_date_time: `${paramsData.day} ${paramsData.endTime}`,
      total_passenger: formData.additionalPassengers.length + 1,
      guest_details: JSON.stringify(formData.additionalPassengers),
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
        <h4>₹{paramsData.price} Trip</h4>
        <div className="price-detail-box mt-3">
          <h4>Price Breakup Details</h4>
          <div className="breakdown-box">
            <h5>Drop Off</h5>
            <h6>₹{paramsData.price}</h6>
          </div>
          <div className="breakdown-box">
            <h5>Service Fee</h5>
            <h6>₹{paramsData.serviceFee}</h6>
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
              {Number(paramsData.price) +
                Number(paramsData.serviceFee) -
                (coupenData ? Number(coupenData) : 0)}
            </h6>
          </div>
        </div>

        <div className="reserve-button mt-4">
          <button onClick={handleCheckout}>
            Book{" "}
            {paramsData.type.charAt(0)?.toUpperCase() +
              paramsData?.type?.slice(1)}
          </button>
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

export default Cabpaybox;
