import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Yhhotellist = ({ fromValue, cabinClass }) => {
  const [findData, setFindData] = useState([]);

  const getFindData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/v1/get-yhhotels?location=${fromValue}&type=${cabinClass}`
      );
      setFindData(response.data.data.findData);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getFindData();
  }, [fromValue, cabinClass]);

  const handleClick = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/post-yh-booking`,
        {
          type: data.type,
          hotelName: data.title,
          mobileNumber: localStorage.getItem("yh_user_mobile"),
          name: localStorage.getItem("yh_user_name"),
          price: data.price,
          location: data.city,
        }
      );
      if (response.data.success) {
        toast.success("Thank you for response, will contact you soon");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
      return error;
    }
  };
  return (
    <>
      <div className="deal-heading pt-3 mb-3">
        <div>
          <h4>Showing Results as per your Search</h4>
          <p>Quality as judged by customers. Book at the ideal price!</p>
        </div>
      </div>

      <div className="hotel-deal-box2">
        {findData &&
          findData.map((ele, i) => (
            <div className="hotel-look" key={i}>
              <div className="deal-img">
                <img src={ele.image} alt={ele.title} />
              </div>
              <div className="deal-content">
                <div className="review-box">
                  <h6>
                    <GradeIcon /> {ele.star} <span>(672 {ele.reviews})</span>
                  </h6>
                </div>
                <h4 className="pt-3">{ele.title}</h4>
                <small>
                  <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
                </small>

                <div className="price-book-btn pt-2">
                  <h6>
                    ₹{ele.price} <span>/ person</span>
                  </h6>
                  <button onClick={() => handleClick(ele)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};


export default Yhhotellist;

