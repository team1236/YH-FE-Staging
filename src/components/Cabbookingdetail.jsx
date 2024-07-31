import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Cabbookingdetail = ({ paramsData, formData }) => {
  return (
    <>
      <div className="booking-card">
        <div className="card-heading">
          <div className="card-text">
            <small>Booking Details</small>
            <h3>
              {paramsData.from} to {paramsData.to}{" "}
              {paramsData?.type?.charAt(0)?.toUpperCase() +
                paramsData?.type?.slice(1)}
            </h3>
            <div className="star-icon">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </div>
          </div>
          <div className="card-img">
            <img src="intercity.png" alt="" />
          </div>
        </div>
        <div className="row check-details">
          <div className="check-margin col-4 col-lg-3">
            <h5>Departure Date</h5>
            <h3>
              {paramsData.date} {paramsData.month}
            </h3>
            <h5>
              {paramsData.day}, {paramsData.startTime}
            </h5>
          </div>
          <div className="check-margin col-4 col-lg-2">
            <span>{paramsData.duration}</span>
          </div>
          <div className="check-margin col-4 col-lg-3">
            <h5>Est Arrival Time</h5>
            <h3>
              {paramsData.date} {paramsData.month}
            </h3>
            <h5>
              {paramsData.day}, {paramsData.endTime}
            </h5>
          </div>

          <div className="check-margin col-12 col-lg-4">
            <h5>Passenger</h5>
            <h3>
              1 Cab & {1 + formData.additionalPassengers.length || 1} Passenger
            </h3>
            <h5>{1 + formData.additionalPassengers.length || 1} Passenger</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cabbookingdetail;
