import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Transportsearch = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [carTripType, setCarTripType] = useState('One Way');
  const [departureDateValue, setDepartureDateValue] = useState(null);
  const [returnDateValue, setReturnDateValue] = useState(null);

  const handleInputChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 0) { // Reset when switching to Bus tab
      setCarTripType('One Way');
      setDepartureDateValue(null);
      setReturnDateValue(null);
    }
  };

  const handleCarTripTypeChange = (event) => {
    setCarTripType(event.target.value);
  };

  return (
    <div className="search-section mt-3">
      <Box>
        <Tabs className='search-tab' value={selectedTab} onChange={handleTabChange}>
          <Tab icon={<DirectionsBusIcon className='me-2' />} label="Bus" />
          <Tab icon={<DirectionsCarIcon className='me-2' />} label="Car" />
        </Tabs>
      </Box>

      <div className="search-column">
        {selectedTab === 1 && (
          <div className="trip-buttons">
            <RadioGroup
              row
              aria-label="carTripType"
              name="carTripType"
              value={carTripType}
              onChange={handleCarTripTypeChange}
            >
              <FormControlLabel
                value="One Way"
                control={
                  <Radio
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    className="small-radio"
                  />
                }
                label="One Way"
                classes={{ label: 'small-label' }}
              />
              <FormControlLabel
                value="Round Trip"
                control={
                  <Radio
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    className="small-radio"
                  />
                }
                label="Round Trip"
                classes={{ label: 'small-label' }}
              />
            </RadioGroup>
          </div>
        )}
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
            {selectedTab === 1 && carTripType === 'Round Trip' ? (
              <div className="place-field">
                <div className={`input-wrapper from-input ${departureDateValue ? 'active' : ''}`}>
                  <DatePicker
                    selected={departureDateValue}
                    onChange={(date) => setDepartureDateValue(date)}
                    className="input-field"
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Check-in"
                  />
                </div>
                <div className={`input-wrapper to-input ${returnDateValue ? 'active' : ''}`}>
                  <DatePicker
                    selected={returnDateValue}
                    onChange={(date) => setReturnDateValue(date)}
                    className="input-field"
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Check-out"
                  />
                </div>
              </div>
            ) : (
              <div className="transport-date">
                <input type="date" className='form-control' />
              </div>
            )}
          </div>
        </div>
        <div className="search-button">
          <button>
            Search Vehicle <span className="icon-wrapper"><DirectionsBusIcon /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transportsearch;
