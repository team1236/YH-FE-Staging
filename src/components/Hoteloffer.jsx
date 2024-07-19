import React, { useEffect, useState } from "react";
import { hotelOffersAPI } from "../store/api/hotelPage";
import { Hotel_Coupon } from "./Shimmer";

const Hoteloffer = () => {
  const [hotelOffer, setHotelOffer] = useState([]);

  const getHotelOffer = async () => {
    const getData = await hotelOffersAPI();
    setHotelOffer(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getHotelOffer()]);
  }, []);
  useEffect(() => {
    const handleCopyCode = (e) => {
      const cpnCode = e.target.previousElementSibling;
      navigator.clipboard.writeText(cpnCode.innerHTML);
      e.target.innerHTML = "COPIED";
      setTimeout(() => {
        e.target.innerHTML = "COPY CODE";
      }, 3000);
    };

    const cpnBtns = document.querySelectorAll(".cpnBtn");
    cpnBtns.forEach((btn) => btn.addEventListener("click", handleCopyCode));

    return () => {
      cpnBtns.forEach((btn) =>
        btn.removeEventListener("click", handleCopyCode)
      );
    };
  }, [hotelOffer]);

  return (
    <>
      <div className="offer-heading pt-5">
        <h4>Hotel Coupon</h4>
      </div>
      <div className="offer-cards-box">
        {hotelOffer.length > 0
          ? hotelOffer.slice(0, 3).map((ele) => {
              return (
                <div className="coupon-card hotel-card">
                  <h3>{ele.description}</h3>
                  <div className="coupon-row">
                    <span className="cpnCode">{ele.coupen_code}</span>
                    <button className="cpnBtn">Copy Code</button>
                  </div>
                  <p>Valid Till: {ele.validity}</p>
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                </div>
              );
            })
          : Array.from({ length: 3 }).map((_, index) => (
              <div
                className="coupon-card hotel-card"
                style={{ width: "100%", background: "transparent" }}
              >
                <Hotel_Coupon key={index} />
              </div>
            ))}
      </div>
    </>
  );
};

export default Hoteloffer;
