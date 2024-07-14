import React, { useState } from 'react';

const Hoteldetailimage = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <div className="hotel-name">
        <h3>California Sunset/Twilight Boat Cruise</h3>
      </div>
      <div className="row image-container">
        <div className="col-lg-6 col-left">
          <div className="detail-img">
            <img src="detail1.webp" alt="Detail 1" onClick={toggleOverlay} />
          </div>
        </div>
        <div className="col-lg-6 col-right">
          <div className="grid-container">
            <div className="grid-item">
              <img src="detail2.webp" alt="Detail 2" onClick={toggleOverlay} />
            </div>
            <div className="grid-item">
              <img src="detail3.webp" alt="Detail 3" onClick={toggleOverlay} />
            </div>
            <div className="grid-item">
              <img src="detail4.webp" alt="Detail 4" onClick={toggleOverlay} />
            </div>
            <div className="grid-item">
              <img src="detail5.webp" alt="Detail 5" onClick={toggleOverlay} />
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
      <div className={`overlay ${showOverlay ? 'show' : ''}`}>
        <div className="overlay-content">
          <button className="close-overlay" onClick={toggleOverlay}>
            <i className="bi bi-arrow-left"></i> Close
          </button>
          <div className="gallery">
            <img src="detail1.webp" alt="Detail 1" />
            <img src="detail2.webp" alt="Detail 2" />
            <img src="detail3.webp" alt="Detail 3" />
            <img src="detail4.webp" alt="Detail 4" />
            <img src="detail5.webp" alt="Detail 5" />
            <img src="detail1.webp" alt="Detail 1" />
            <img src="detail2.webp" alt="Detail 2" />
            <img src="detail3.webp" alt="Detail 3" />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Hoteldetailimage;
