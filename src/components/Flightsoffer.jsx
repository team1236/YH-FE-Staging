import React, { useEffect, useState } from "react";
import { flightOffer } from "../store/api/flightPage";
import { Flight_Offers } from "./Shimmer";

const Flightsoffer = () => {
  const [flightOfferData, setFlightOfferData] = useState([]);

  const flightOfferApi = async () => {
    const getData = await flightOffer();
    setFlightOfferData(getData.data.flightOffer);
    return getData.data;
  };

  useEffect(() => {
    Promise.allSettled([flightOfferApi()]);
  }, []);

  return (
    <div className="flight-offer pt-5">
      <div className="recent-search-heading">
        <h4>Flights Offer</h4>
      </div>
      <div className="flight-box-container">
        {flightOfferData.length > 0
          ? flightOfferData &&
            flightOfferData.slice(0, 3).map((ele) => (
              <div className="flight-box" key={ele._id}>
                <div className="plane-box">
                  <img src="plane.png" alt="plane" />
                </div>
                <div className="plane-content-box">
                  <p>{ele.type}</p>
                  <h5>{ele.title}</h5>
                  <h6>
                    {ele.details} ₹<b>{ele.price}</b>
                  </h6>
                  <button>Book Now</button>
                </div>
              </div>
            ))
          : Array.from({ length: 2 }).map((_, index) => (
              <div className="flight-box" key={index}>
                <Flight_Offers key={index} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Flightsoffer;
