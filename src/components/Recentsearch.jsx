import React from 'react';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const Recentsearch = () => {
  const searchItems = [
    { from: "Bangalore", to: "Delhi" },
    { from: "Mumbai", to: "Chennai" },
    { from: "Kolkata", to: "Hyderabad" },
    { from: "New Delhi", to: "Pune" }
  ];

  return (
    <section className='pt-5'>
      <div className="recent-search-heading">
        <h4>Recent Searches</h4>
      </div>
      <div className="recent-search-container">
        {searchItems.slice(0, 4).map((item, index) => (
          <div className="date-box" key={index}>
            <div className='checked-date'>
              <h5>21 June, Friday</h5>
            </div>
            <div className="recent-box">
              <h6>{item.from}</h6>
              <ConnectingAirportsIcon className="icon" />
              <h6>{item.to}</h6>
            </div>
          </div>
        ))}
        <div className="placeholder"></div>
      </div>
    </section>
  );
}

export default Recentsearch;
