import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Listingsearch = ({ paramsData, setLoading }) => {
  const [fromValue, setFromValue] = useState(paramsData.location);
  const [departureDateValue, setDepartureDateValue] = useState(
    paramsData.checkin && paramsData.checkin
  );
  const [returnDateValue, setReturnDateValue] = useState(
    paramsData.checkout && paramsData.checkout
  );
  const [passengerValue, setPassengerValue] = useState({
    adults: paramsData.passengerValue.adults,
    children: paramsData.passengerValue.children,
    infants: 0,
    rooms: paramsData.passengerValue.rooms,
  });
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
  const id = open ? "passenger-popover" : undefined;

  return (
    <>
      <div className="">
        <div className="row search-input-column mt-3">
          <div className="col-lg-4 place-field">
            <div className={`location-input ${fromValue ? "active" : ""}`}>
              <input
                type="text"
                id="from"
                className="input-field"
                placeholder="Hotel Destinations"
                value={fromValue}
                onChange={(event) => handleInputChange(event, setFromValue)}
              />
              <span className="location-icon">
                <LocationOnOutlinedIcon />
              </span>
            </div>
          </div>

          <div className="col-lg-4 place-field">
            <div
              className={`input-wrapper from-input ${
                departureDateValue ? "active" : ""
              }`}
            >
              <DatePicker
                selected={departureDateValue}
                onChange={(date) => setDepartureDateValue(date)}
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-in"
              />
            </div>
            <div
              className={`input-wrapper to-input ${
                returnDateValue ? "active" : ""
              }`}
            >
              <DatePicker
                selected={returnDateValue}
                onChange={(date) => setReturnDateValue(date)}
                className="input-field"
                dateFormat="dd-MM-yyyy"
                placeholderText="Check-out"
              />
            </div>
          </div>

          <div className="col-lg-4 popover-box">
            <div
              className={`input-wrapper passenger-input ${
                (paramsData.passengerValue &&
                  paramsData.passengerValue.adults > 0) ||
                (paramsData.passengerValue &&
                  paramsData.passengerValue.children > 0) ||
                (paramsData.passengerValue &&
                  paramsData.passengerValue.infants > 0) ||
                (paramsData.passengerValue &&
                  paramsData.passengerValue.rooms > 0)
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
                    paramsData.passengerValue &&
                    paramsData.passengerValue.rooms > 0
                      ? paramsData.passengerValue.rooms + " Room(s)"
                      : ""
                  }` +
                  `${
                    paramsData.passengerValue &&
                    paramsData.passengerValue.adults > 0
                      ? paramsData.passengerValue.adults + " Adult(s), "
                      : ""
                  }` +
                  `${
                    paramsData.passengerValue &&
                    paramsData.passengerValue.children > 0
                      ? paramsData.passengerValue.children + " Child(ren), "
                      : ""
                  }` +
                  `${
                    paramsData.passengerValue &&
                    paramsData.passengerValue.infants > 0
                      ? paramsData.passengerValue.infants + " Infant(s), "
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
                </Box>
              </Popover>
            </div>
          </div>
          <div className="col-lg-4" style={{ marginBottom: "15px" }}>
            <Link
              to={`/hotellisting?location=${fromValue}&checkin=${departureDateValue}&checkout=${returnDateValue}&passengerValue=${JSON.stringify(
                passengerValue
              )}`}
            >
              <Button variant="contained" onClick={() => setLoading(true)}>
                Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listingsearch;
