import React from 'react';

const Flightsoffer = () => {
  return (
    <div className="flight-offer pt-5">
      <div className="recent-search-heading">
        <h4>Flights Offer</h4>
      </div>
      <div className="flight-box-container">
        <div className="flight-box">
          <div className="plane-box">
            <img src="plane.png" alt="plane" />
          </div>
          <div className="plane-content-box">
            <p>Domestic Flights</p>
            <h5>
              Huge savings on flight with <span>Hospitality</span>.
            </h5>
            <h6>
              Book your domestic flights starting @ just <b>₹999</b>
            </h6>
            <button>Book Now</button>
          </div>
        </div>
        <div className="flight-box">
          <div className="plane-box">
            <img src="plane.png" alt="plane" />
          </div>
          <div className="plane-content-box">
            <p>Domestic Flights</p>
            <h5>
              Huge savings on flight with <span>Hospitality</span>.
            </h5>
            <h6>
              Book your domestic flights starting @ just <b>₹999</b>
            </h6>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flightsoffer;
