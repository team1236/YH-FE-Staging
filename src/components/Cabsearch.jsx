import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from '@mui/icons-material/DateRange';

const Cabsearch = ({ paramsData }) => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [departureDateValue, setDepartureDateValue] = useState(null);
  const [departureTimeValue, setDepartureTimeValue] = useState(null);

  return (
    <div className="search-section mt-3">
      <div className="search-column">
        <div className="row search-input-column mt-3">
          <div className="col-lg-4 place-field">
            <div className={`location-input ${fromValue ? "active" : ""}`}>
              <input
                type="text"
                id="from"
                className="input-field"
                placeholder="Leaving from"
                value={paramsData.from}
              />
              <span className="location-icon">
                <LocationOnOutlinedIcon />
              </span>
            </div>
          </div>
          <div className="col-lg-4 place-field">
            <div className={`location-input ${toValue ? "active" : ""}`}>
              <input
                type="text"
                id="to"
                className="input-field"
                placeholder="Going to"
                value={paramsData.to}
              />
              <span className="location-icon">
                <LocationOnOutlinedIcon />
              </span>
            </div>
          </div>
          <div className="col-lg-4 place-field">
            <div className={`location-input ${toValue ? "active" : ""}`}>
              <input
                type="text"
                id="to"
                className="input-field"
                placeholder="Going to"
                value={`${paramsData.date} ${paramsData.month}`}
              />
              <span className="location-icon">
                <DateRangeIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabsearch;
