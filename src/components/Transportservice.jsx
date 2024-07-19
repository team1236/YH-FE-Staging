import React, { useEffect, useState } from "react";
import { transportServiceAPI } from "../store/api/transportPage";
import { Flight_Testimonial } from "./Shimmer";

const Transportservice = () => {
  const [serviceData, setServiceData] = useState([]);
  const transportServiceApi = async () => {
    const getData = await transportServiceAPI();
    setServiceData(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([transportServiceApi()]);
  }, []);
  return (
    <>
      <div className="flight-offer pt-5">
        <div className="recent-search-heading">
          <h4>Our Transport Service</h4>
        </div>
        <div className="flight-box-container">
          {serviceData.length > 0
            ? serviceData.map((ele) => {
                return (
                  <div className="flight-box">
                    <div className="plane-box">
                      <img src={ele.image} alt="plane" />
                    </div>
                    <div className="plane-content-box">
                      <h5>{ele.title}</h5>
                      <h6>{ele.description}</h6>
                      <div className="know-btn">
                        <button>Know More</button>
                      </div>
                    </div>
                  </div>
                );
              })
            : Array.from({ length: 4 }).map((_, index) => (
                <div className="flight-box">
                  <Flight_Testimonial key={index} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Transportservice;
