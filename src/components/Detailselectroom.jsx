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
import { format, parse } from "date-fns";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Detailselectroom = ({ getData, payload }) => {
  const [passengerValue, setPassengerValue] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    rooms: 0,
  });
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
  const id = open ? "passenger-popover" : undefined;

  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date ? format(date, "dd-MM-yyyy") : null);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date ? format(date, "dd-MM-yyyy") : null);
  };

  const parseDate = (dateString) => {
    return parse(dateString, "dd-MM-yyyy", new Date());
  };

  const handleRoomSelect = (roomType) => {
    setSelectedRoom(roomType);
  };

  const handleOpen = () => {
    if (!Cookies.get("yh_auth_token")) {
      toast.error("Please login to continue");
      return;
    } else {
      toast.error("Please fill the details to continue");
      return;
    }
  };

  return (
    <>
      <div className="detail-pay-column">
        <h4>₹{payload && payload?.price} night</h4>
        <div className="date-guest-box pt-4">
          <div className="date-detail-box">
            <div className="input-wrapper from-input">
              <DatePicker
                selected={checkInDate ? parseDate(checkInDate) : null}
                onChange={handleCheckInDateChange}
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-in"
              />
            </div>
            <div className="input-wrapper to-input">
              <DatePicker
                selected={checkOutDate ? parseDate(checkOutDate) : null}
                onChange={handleCheckOutDateChange}
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-out"
              />
            </div>
          </div>
          <div
            className={`input-wrapper detail-passenger passenger-input ${
              passengerValue.adults > 0 ||
              passengerValue.children > 0 ||
              passengerValue.infants > 0 ||
              passengerValue.rooms > 0
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
              value={
                `${
                  passengerValue.adults > 0
                    ? passengerValue.adults + " Adult(s), "
                    : ""
                }` +
                `${
                  passengerValue.children > 0
                    ? passengerValue.children + " Child(ren), "
                    : ""
                }` +
                `${
                  passengerValue.infants > 0
                    ? passengerValue.infants + " Infant(s), "
                    : ""
                }` +
                `${
                  passengerValue.rooms > 0
                    ? passengerValue.rooms + " Room(s)"
                    : ""
                }`
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

        <div className="policy-box pt-3">
          <h5>Select Room</h5>
          <div className="cancel-box">
            <div className="deluxe-room">
              <div className="select-room-box">
                <img src="detail3.webp" alt="Deluxe Room" />
              </div>
              <div className="room-type-box">
                <p>Deluxe Room</p>
              </div>
              <div className="policy-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roomType"
                  id="deluxeRoom"
                  value="Deluxe Room"
                  onChange={() => handleRoomSelect("Deluxe Room")}
                  checked={selectedRoom === "Deluxe Room"}
                />
              </div>
            </div>
            <hr />
            <div className="deluxe-room">
              <div className="select-room-box">
                <img src="detail3.webp" alt="Basic Room" />
              </div>
              <div className="room-type-box">
                <p>Basic Room</p>
              </div>
              <div className="policy-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roomType"
                  id="basicRoom"
                  value="Basic Room"
                  onChange={() => handleRoomSelect("Basic Room")}
                  checked={selectedRoom === "Basic Room"}
                />
              </div>
            </div>
          </div>
          <p>Selected Room: {selectedRoom}</p>
        </div>

        <div className="policy-box pt-3">
          <h5>Cancellation Policies</h5>
          <div className="cancel-box">
            <div>
              <div className="policy-radio">
                <label htmlFor="">
                  Non-refundable · ₹
                  {getData.description_nonRefundable
                    ? getData.description_nonRefundable
                    : payload.price - 800}{" "}
                  total{" "}
                </label>
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
                <label htmlFor="">
                  Refundable · ₹
                  {getData.description_Refundable
                    ? getData.description_Refundable
                    : payload.price - 500}{" "}
                  total{" "}
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </div>
              {/* <p>
                Free cancellation before{" "}
                {getData && getData?.description_cancellation_before}. Cancel before{" "}
                {getData && getData?.description_cancellation_before_partial} for a partial
                refund.
              </p> */}
            </div>
          </div>
        </div>

        <div className="reserve-button mt-4">
          {Cookies.get("yh_auth_token") &&
          selectedRoom &&
          checkInDate &&
          checkOutDate &&
          passengerValue.rooms ? (
            <Link
              to={`/checkout?hotelName=${getData?.hotelName}&location=${
                getData?.hotelAddress?.city
              }&room_type=${selectedRoom}&check_in=${checkInDate}&checkout=${checkOutDate}&total_room=${
                passengerValue.rooms
              }&total_passenger=${
                passengerValue.adults +
                passengerValue.children +
                passengerValue.infants
              }&price=${payload.price}&service=${
                getData?.description_price_breakup_serviceFees
                  ? getData?.description_price_breakup_serviceFees
                  : payload.price - 1000
              }&tax=${
                getData?.description_price_breakup_taxFee
                  ? getData?.description_price_breakup_taxFee
                  : payload.price - 1500
              }&type=${payload.type}`}
            >
              <button>Book Room</button>
            </Link>
          ) : (
            <button onClick={handleOpen}>Book Room</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Detailselectroom;
