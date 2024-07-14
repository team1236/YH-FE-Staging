import React, { useState, useEffect } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EastIcon from "@mui/icons-material/East";
import GradeIcon from "@mui/icons-material/Grade";
import { hotelDealsAPI } from "../store/api/hotelPage";

const Hoteldeal = () => {
  const [hotels, setHotels] = useState([]);
  const getHotelsData = async () => {
    const getData = await hotelDealsAPI();
    setHotels(getData.data.findData);
  };
  useEffect(() => {
    Promise.allSettled([getHotelsData()]);
  }, []);
  return (
    <>
      <div className="deal-heading pt-5 mb-3">
        <div>
          <h4>Top Rated Hotels</h4>
          <p>Quality as judged by customers. Book at the ideal price!</p>
        </div>
        <div>
          <button>
            {" "}
            View More {""} <EastIcon />
          </button>
        </div>
      </div>
      <div className="hotel-deal-box">
        {hotels.map((ele) => {
          return (
            <div className="hotel-look">
              <div className="deal-img">
                <img src={ele.img} alt="" />
              </div>
              <div className="deal-content">
                <div className="review-box">
                  <h6>
                    <GradeIcon /> {""} {ele.stars}{" "}
                    <span>({ele.reviews_count} reviews)</span>{" "}
                  </h6>
                </div>
                <h4 className="pt-3">{ele.title}</h4>
                <small>
                  {" "}
                  <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
                </small>

                <div className="price-book-btn pt-2">
                  <h6>
                    ₹{ele.price} <span>/ person</span>{" "}
                  </h6>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hoteldeal;
