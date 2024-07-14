import React, { useState, useEffect } from "react";
import { hotelBannerAPI } from "../store/api/hotelPage";

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
      {banner.map((ele) => {
        return (
          <div className="hotel-banner-box pt-4" key={ele._id}>
            <img src={ele.url} alt="hotel-banner" />
          </div>
        );
      })}
    </>
  );
};

export default Hotelbanner;
