import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Cabsearch = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [departureDateValue, setDepartureDateValue] = useState(null);
  const [departureTimeValue, setDepartureTimeValue] = useState(null);

  const handleInputChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  return (
    <div className="search-section mt-3">
      <div className="search-column">
        <div className="row search-input-column mt-3">
          <div className="col-lg-4 place-field">
            <div className={`location-input ${fromValue ? 'active' : ''}`}>
              <input
                type="text"
                id="from"
                className="input-field"
                placeholder='Leaving from'
                value={fromValue}
                onChange={(event) => handleInputChange(event, setFromValue)}
              />
              <span className='location-icon'><LocationOnOutlinedIcon /></span>
            </div>
          </div>
          <div className="col-lg-4 place-field">
            <div className={`location-input ${toValue ? 'active' : ''}`}>
              <input
                type="text"
                id="to"
                className="input-field"
                placeholder='Going to'
                value={toValue}
                onChange={(event) => handleInputChange(event, setToValue)}
              />
              <span className='location-icon'><LocationOnOutlinedIcon /></span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="place-field transport-date">
              <div className={`input-wrapper from-input ${departureDateValue ? 'active' : ''}`}>
                <DatePicker
                  selected={departureDateValue}
                  onChange={(date) => setDepartureDateValue(date)}
                  className="input-field"
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Departure Date"
                />
              </div>
              <div className={`input-wrapper to-input ${departureTimeValue ? 'active' : ''}`}>
                <DatePicker
                  selected={departureTimeValue}
                  onChange={(date) => setDepartureTimeValue(date)}
                  className="input-field"
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="Departure Time"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabsearch;
