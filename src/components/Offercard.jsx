import React, { useState, useEffect } from "react";
import { offerAPI } from "../store/api/offerPage";

const Offercard = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [offerData, setOfferData] = useState([]);

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

  const handleTabClick = async () => {
    const getData = await offerAPI(activeTab.toLowerCase());
    setOfferData(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([handleTabClick()]);
  }, [activeTab]);

  const renderOfferCards = () => {
    switch (activeTab) {
      case "Flights":
        return (
          <>
            {offerData.map((ele) => {
              return (
                <div className="coupon-card flight-card">
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
          </>
        );
      case "Hotels":
        return (
          <>
            {offerData.map((ele) => {
              return (
                <div className="coupon-card hotel-card">
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
          </>
        );
      case "Transports":
        return (
          <>
            {offerData.map((ele) => {
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="offer-container mt-4">
      <div className="tabs offer-tabs">
        <button
          className={activeTab === "Flights" ? "offer-active" : ""}
          onClick={() => setActiveTab("Flights")}
        >
          Flights
        </button>
        <button
          className={activeTab === "Hotels" ? "offer-active" : ""}
          onClick={() => setActiveTab("Hotels")}
        >
          Hotels
        </button>
        <button
          className={activeTab === "Transports" ? "offer-active" : ""}
          onClick={() => setActiveTab("Transports")}
        >
          Transports
        </button>
      </div>
      <div className="offer-cards-box pt-4">{renderOfferCards()}</div>
    </div>
  );
};

export default Offercard;
