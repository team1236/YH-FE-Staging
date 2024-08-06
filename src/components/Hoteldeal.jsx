import React, { useState, useEffect } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EastIcon from "@mui/icons-material/East";
import GradeIcon from "@mui/icons-material/Grade";
import { hotelDealsAPI } from "../store/api/hotelPage";
import { Flight_Testimonial } from "./Shimmer";
import { Link } from "react-router-dom";

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
          <Link
            to={`/hotellisting?location=${"india"}&checkin=${
              new Date().toISOString().split("T")[0]
            }&checkout=${
              new Date().toISOString().split("T")[0]
            }&passengerValue=${JSON.stringify([])}`}
            style={{ textDecoration: "none" }}
          >
            <button>
              View More
              <EastIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="hotel-deal-box">
        {hotels.length > 0
          ? hotels.map((ele) => {
              return (
                <div className="hotel-look">
                  <div className="deal-img">
                    <img src={ele.image} alt="" height={210} />
                  </div>
                  <div className="deal-content">
                    <div className="review-box">
                      <h6>
                        <GradeIcon /> {""} {ele.star_category}{" "}
                        <span>({ele.reviews} reviews)</span>{" "}
                      </h6>
                    </div>
                    <h4 className="pt-3">{ele.hotelName}</h4>
                    <small>
                      {" "}
                      <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
                    </small>

                    <div className="price-book-btn pt-2">
                      <h6>
                        ₹{ele.price} <span>/ person</span>{" "}
                      </h6>
                      <Link to={`/hoteldetail?_id=${ele._id}&from=hotelMain`}>
                      <button>Book Now</button>
                    </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : Array.from({ length: 8 }).map((_, index) => (
              <div className="hotel-look" style={{ width: "100%" }}>
                <Flight_Testimonial key={index} />
              </div>
            ))}
      </div>
    </>
  );
};

export default Hoteldeal;
