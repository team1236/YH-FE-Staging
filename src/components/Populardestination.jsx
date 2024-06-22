import React from 'react';

const Populardestination = () => {
  const destinations = [
    { name: 'Bali, Indonesia', image: 'destination.png' },
    { name: 'Tokyo, Japan', image: 'destination4.png' },
    { name: 'Sydney, Australia', image: 'destination2.png' },
    { name: 'Paris, France', image: 'destination3.png' },
  ];

  return (
    <div className="popular-destination pt-5">
      <div className="destination-heading">
        <h4>Top Visited Destinations</h4>
      </div>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <div className="destination-item" key={index}>
            <div className="image-container">
              <img src={destination.image} alt={destination.name} />
              <div className="overlay">
                <h6>{destination.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populardestination;
