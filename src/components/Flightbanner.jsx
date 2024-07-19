import React, { useEffect, useState } from "react";
import { flightBanner } from "../store/api/flightPage";
import { Flight_Banner } from "./Shimmer";

const Flightbanner = () => {
  const [data, setData] = useState([]);
  const flightBannderApi = async () => {
    const getData = await flightBanner();
    setData(getData.data.findData);
  };
  useEffect(() => {
    Promise.allSettled([flightBannderApi()]);
  }, []);
  return (
    <>
      {
      data.length > 0 ?
      data &&
        data.map((ele, index) => {
          return (
            <div className="flight-banner pt-5">
              <img src={ele.url} alt="" />
            </div>
          );
        }) : 
        Array.from({ length: 1 }).map((_, index) => (
          <div className="flight-banner pt-5">
            <Flight_Banner key={index} />
          </div>
        ))
        }
    </>
  );
};

export default Flightbanner;
