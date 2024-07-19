import React, { useState, useEffect } from "react";
import { hotelBannerAPI } from "../store/api/hotelPage";
import { Flight_Banner } from "./Shimmer";

const Hotelbanner = () => {
  const [banner, setBanner] = useState([]);
  const getBanner = async () => {
    const getData = await hotelBannerAPI();
    setBanner(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getBanner()]);
  }, []);
  return (
    <>
      {banner.length > 0
        ? banner.map((ele) => {
            return (
              <div className="hotel-banner-box pt-4" key={ele._id}>
                <img src={ele.url} alt="hotel-banner" />
              </div>
            );
          })
        : Array.from({ length: 1 }).map((_, index) => (
            <div className="flight-banner pt-5">
              <Flight_Banner key={index} />
            </div>
          ))}
    </>
  );
};

export default Hotelbanner;
