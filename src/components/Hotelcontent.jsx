import React from "react";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import NoCrashOutlinedIcon from "@mui/icons-material/NoCrashOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import StarIcon from "@mui/icons-material/Star";

const Hotelcontent = ({ getData }) => {
  return (
    <>
      <div className="hotel-content">
        <div className="detail-name">
          <h4>
            Room in{" "}
            {getData?.city?.charAt(0)?.toUpperCase() + getData?.city?.slice(1)},{" "}
            {getData?.country?.charAt(0)?.toUpperCase() +
              getData?.country?.slice(1)}
          </h4>
          <p>{getData.descriptionbed} queen bed - Dedicated bathroom</p>
        </div>
        <div className="short-review-box mt-5">
          <div>
            <h5>
              Guest <br /> Favourite
            </h5>
          </div>
          <div>
            <p>
              One of the most loved hotel on <b>Yours Hospitality</b> <br /> in{" "}
              {getData?.country?.charAt(0)?.toUpperCase() +
                getData?.country?.slice(1)}{" "}
              by our Guests
            </p>
          </div>
          <div className="num-box">
            <h6>{getData.star_category}</h6>
            <span>
              {Array(getData.star_category)
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
            </span>
          </div>
          <div className="num-box">
            <h6>{getData.reviews}</h6>
            <span>Reviews</span>
          </div>
        </div>

        <div className="about-hotel pt-5">
          <h5>About this place</h5>
          <p className="mt-3">{getData.description_about}</p>
          <p>{getData.descriptionDedicated}</p>
        </div>

        <div className="amenities pt-4">
          <h4>Amenities We offer</h4>
          <div className="facility-box">
            {getData && getData?.description_amentities?.map((ele) =>
            {
              return (
                <div className="facility-list" key="wifi">
                  <h5>
                    {ele}
                  </h5>
                </div>
              );
            }
            )}
             
          </div>
        </div>

        <hr />
        <div className="hotel-location">
          <h4>Where You will be</h4>
          <iframe
            title="Hotel Location"
            src={getData.description_google_map}
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <h6>{getData.hotelName}</h6>
          <p>{getData.description_hotel_details}</p>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Hotelcontent;
