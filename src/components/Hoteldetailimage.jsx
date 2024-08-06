import React, { useState } from "react";

const Hoteldetailimage = ({ getData }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  // Check if getData and its properties are defined
  const hotelName = getData?.hotelName || "No hotel name available";
  const descriptionImages = getData?.descriptionImages || [];
  const hasDescriptionImages = descriptionImages.length > 0;

  return (
    <>
      <div className="hotel-name">
        <h3>{hotelName}</h3>
      </div>
      <div className="row image-container">
        <div className="col-lg-6 col-left">
          <div className="detail-img">
            {hasDescriptionImages ? (
              <img
                src={descriptionImages[0]}
                alt="Detail 1"
                onClick={toggleOverlay}
                onError={(e) => {
                  e.target.src = "fallback-image.jpg";
                }} // Fallback image in case of an error
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-right">
          <div className="grid-container">
            {descriptionImages.slice(2, 6).map((ele, i) => (
              <div className="grid-item" key={i}>
                <img
                  src={ele}
                  alt={`Detail ${i + 2}`}
                  onClick={toggleOverlay}
                  onError={(e) => {
                    e.target.src = "detail5.webp";
                  }} // Fallback image in case of an error
                />
              </div>
            ))}
            <div className="grid-item">
              {/* <img src="detail5.webp" alt="Detail 5" onClick={toggleOverlay} /> */}
              <div className="button-over-image">
                <button onClick={toggleOverlay}>
                  <i className="bi bi-camera-fill"></i> See all photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Gallery */}
      <div className={`overlay ${showOverlay ? "show" : ""}`}>
        <div className="overlay-content">
          <button className="close-overlay" onClick={toggleOverlay}>
            <i className="bi bi-arrow-left"></i> Close
          </button>
          <div className="detail-gallery">
            {hasDescriptionImages ? (
              descriptionImages.map((ele, index) => (
                <img
                  src={ele}
                  alt={`Detail ${index + 1}`}
                  key={index}
                  onError={(e) => {
                    e.target.src = "fallback-image.jpg";
                  }} // Fallback image in case of an error
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoteldetailimage;
