import React, { useEffect, useState } from "react";
import Hoteldetailimage from "../components/Hoteldetailimage";
import Hotelcontent from "../components/Hotelcontent";
import HotelReview from "../components/Hotelreview";
import Hotelsuggest from "../components/Hotelsuggest";
import Detailselectroom from "../components/Detailselectroom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Hoteldetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [getData, setData] = useState([]);
  const getDescData = async () => {
    try {
      if (searchParams.get("from") === "shootingRange") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-shootingrangeById?_id=${searchParams.get("_id")}`
        );
        setData(response.data.data.findData);
      } else if (searchParams.get("from") === "hotelMain") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-hotelswithdealbyid?_id=${searchParams.get("_id")}`
        );
        setData(response.data.data.findData);
      } else {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-description-hotelListing?_id=${searchParams.get("_id")}`
        );
        setData(response.data.data.findData);
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getDescData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container pt-4">
        <div className="row justify-content-between">
          <div className="col-lg-12 ">
            <Hoteldetailimage getData={getData} />
          </div>
          <div className="col-lg-7">
            <Hotelcontent getData={getData} />
          </div>
          <div className="col-lg-4">
            <Detailselectroom getData={getData} />
          </div>
          <div className="col-lg-12">
            <HotelReview getData={getData} />
            <Hotelsuggest getData={getData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoteldetail;
