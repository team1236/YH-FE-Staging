import React, { useState, useEffect } from "react";
import { offerAPI } from "../store/api/offerPage";
import { Hotel_Coupon } from "./Shimmer";

const Offercard = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [offerData, setOfferData] = useState([]);
  useEffect(() => {
    const handleTabClick = async () => {
      const getData = await offerAPI(activeTab.toLowerCase());
      setOfferData(getData.data.findData);
    };

    handleTabClick();
  }, [activeTab]);

  const handleCopyCode = (cpnCode, btn) => {
    navigator.clipboard.writeText(cpnCode);
    btn.innerHTML = "COPIED";
    setTimeout(() => {
      btn.innerHTML = "COPY CODE";
    }, 3000);
  };

  const renderOfferCards = () => {
    switch (activeTab) {
      case "Flights":
        return (
          <>
            {offerData.length > 0
              ? offerData.map((ele) => {
                  return (
                    <div className="coupon-card flight-card">
                      <h3>{ele.description}</h3>
                      <div className="coupon-row">
                        <span className="cpnCode">{ele.coupen_code}</span>
                        <span
                          className="cpnBtn"
                          onClick={(e) =>
                            handleCopyCode(ele.coupen_code, e.target)
                          }
                        >
                          Copy Code
                        </span>
                      </div>
                      <p>Valid Till: {ele.validity}</p>
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                    </div>
                  );
                })
              : Array.from({ length: 9 }).map((_, index) => (
                  <div
                    className="coupon-card hotel-card"
                    style={{ width: "100%", background: "transparent" }}
                  >
                    <Hotel_Coupon key={index} />
                  </div>
                ))}
          </>
        );
      case "Hotels":
        return (
          <>
            {offerData.length > 0
              ? offerData.map((ele) => {
                  return (
                    <div className="coupon-card hotel-card">
                      <h3>{ele.description}</h3>
                      <div className="coupon-row">
                        <span className="cpnCode">{ele.coupen_code}</span>
                        <span
                          className="cpnBtn"
                          onClick={(e) =>
                            handleCopyCode(ele.coupen_code, e.target)
                          }
                        >
                          Copy Code
                        </span>
                      </div>
                      <p>Valid Till: {ele.validity}</p>
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                    </div>
                  );
                })
              : Array.from({ length: 9 }).map((_, index) => (
                  <div
                    className="coupon-card hotel-card"
                    style={{ width: "100%", background: "transparent" }}
                  >
                    <Hotel_Coupon key={index} />
                  </div>
                ))}
          </>
        );
      case "Transports":
        return (
          <>
            {offerData.length > 0
              ? offerData.map((ele) => {
                  return (
                    <div className="coupon-card transport-card">
                      <h3>{ele.description}</h3>
                      <div className="coupon-row">
                        <span className="cpnCode">{ele.coupen_code}</span>
                        <span
                          className="cpnBtn"
                          onClick={(e) =>
                            handleCopyCode(ele.coupen_code, e.target)
                          }
                        >
                          Copy Code
                        </span>
                      </div>
                      <p>Valid Till: {ele.validity}</p>
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                    </div>
                  );
                })
              : Array.from({ length: 9 }).map((_, index) => (
                  <div
                    className="coupon-card hotel-card"
                    style={{ width: "100%", background: "transparent" }}
                  >
                    <Hotel_Coupon key={index} />
                  </div>
                ))}
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
