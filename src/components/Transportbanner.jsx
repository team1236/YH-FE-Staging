import React, { useEffect, useState } from "react";
import { transportBannerAPI } from "../store/api/transportPage";

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
      {data &&
        data.map((ele, index) => {
          return (
            <div className="flight-banner pt-5">
              <img src={ele.url} alt="" />
            </div>
          );
        })}
    </>
  );
};

export default Transportbanner;
