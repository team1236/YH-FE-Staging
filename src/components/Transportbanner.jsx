import React, { useEffect, useState } from "react";
import { transportBannerAPI } from "../store/api/transportPage";
import { Flight_Banner } from "./Shimmer";

const Transportbanner = () => {
  const [data, setData] = useState([]);
  const transportBannderApi = async () => {
    const getData = await transportBannerAPI();
    setData(getData.data.findData);
  };
  useEffect(() => {
    Promise.allSettled([transportBannderApi()]);
  }, []);
  return (
    <>
      {data.length > 0
        ? data &&
          data.map((ele, index) => {
            return (
              <div className="flight-banner pt-5">
                <img src={ele.url} alt="" />
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

export default Transportbanner;
