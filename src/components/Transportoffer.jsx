import React, { useEffect, useState } from "react";
import { transportOffersAPI } from "../store/api/transportPage";

const Transportoffer = () => {
  const [transportOffer, setTransportOffer] = useState([]);
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
  }, []);

  const getTransportOffer = async () => {
    const getData = await transportOffersAPI();
    setTransportOffer(getData.data.findData);
  };
  useEffect(() => {
    Promise.allSettled([getTransportOffer()]);
  }, []);

  return (
    <>
      <div className="offer-heading pt-5">
        <h4>Transport Coupon</h4>
      </div>
      <div className="offer-cards-box">
        {transportOffer.slice(0, 3).map((ele) => {
          return (
            <div className="coupon-card transport-card">
              <h3>{ele.description}</h3>
              <div className="coupon-row">
                <span className="cpnCode">{ele.coupen_code}</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: {ele.validity}</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Transportoffer;
