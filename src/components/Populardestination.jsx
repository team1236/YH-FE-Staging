import React, { useEffect, useState } from "react";
import { popularDestination } from "../store/api/flightPage";

const Populardestination = () => {
  const [destinations, setDestinations] = useState([]);

  const popularDestinationApi = async () => {
    const getData = await popularDestination();
    setDestinations(getData.data.topDestination);
  };

  useEffect(() => {
    Promise.allSettled([popularDestinationApi()]);
  }, []);

  return (
    <div className="popular-destination pt-5">
      <div className="destination-heading">
        <h4>Top Visited Destinations</h4>
      </div>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <div className="destination-item" key={index}>
            <div className="image-container">
              <img src={destination.image} alt={destination.city} />
              <div className="overlay">
                <h6>{`${destination.city} ${destination.country}`}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populardestination;
