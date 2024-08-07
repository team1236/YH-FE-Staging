import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EastIcon from "@mui/icons-material/East";
import GradeIcon from "@mui/icons-material/Grade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hotelNeatBYAPI } from "../store/api/hotelPage";
import { Link } from "react-router-dom";

const Hotelcarausel = () => {
  const sliderRef = useRef(null);
  const [nearBy, setNearBy] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getNearBYData = async () => {
    const getData = await hotelNeatBYAPI();
    setNearBy(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getNearBYData()]);
  }, []);

  return (
    <>
      <div className="deal-heading pt-5 mb-3">
        <div>
          <h4>Nearby Shooting Ranges</h4>
          <p>Quality as judged by customers. Book at the ideal price!</p>
        </div>
        {/* <div>
          <Link to="/Hotellisting" style={{ textDecoration: "none" }}>
            <button>
              View More
              <EastIcon />
            </button>
          </Link>
        </div> */}
      </div>
      <div className="hotel-deal-box">
        <Slider ref={sliderRef} {...settings} className="slider">
          {nearBy.map((ele) => {
            return (
              <div className="hotel-look">
                <div className="deal-img">
                  <img src={ele.image} alt="" height={279} />
                </div>
                <div className="deal-content">
                  <div className="review-box">
                    <h6>
                      <GradeIcon /> {ele.star_category}{" "}
                      <span>({ele.reviews} reviews)</span>{" "}
                    </h6>
                  </div>
                  <h4 className="pt-3">{ele.hotelName}</h4>
                  <small>
                    <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
                  </small>
                  <div className="price-book-btn pt-2">
                    <h6>
                      ₹{ele.price} <span>/ person</span>{" "}
                    </h6>
                    <Link to={`/hoteldetail?_id=${ele._id}&from=shootingRange`}>
                      <button>Book Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Hotelcarausel;
