import React, { useEffect, useState } from "react";
import Hoteldetailimage from "../components/Hoteldetailimage";
import Hotelcontent from "../components/Hotelcontent";
import Detailselectroom from "../components/Detailselectroom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { Flight_Testimonial } from "../components/Shimmer";

const getDate = (value) => {
  const date = new Date(value);
  const formattedDate = format(date, "dd-MM-yyyy");
  return formattedDate;
};

const Hoteldetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const payload = {
    hotelCode: searchParams.get("hotelCode"),
    checkInDate: searchParams.get("checkInDate"),
    checkOutDate: searchParams.get("checkOutDate"),
    noOfRoom: searchParams.get("noOfRoom"),
    noOfAdt: searchParams.get("noOfAdt"),
    noOfChd: searchParams.get("noOfChd"),
    provider: searchParams.get("provider"),
    fullName: searchParams.get("fullName"),
    name: searchParams.get("name"),
    price: searchParams.get("price"),
    type: searchParams.get("type"),
  };
  const [getData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDescData = async () => {
    try {
      if (searchParams.get("from") === "shootingRange") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-shootingrangeById?_id=${payload.hotelCode}`
        );
        setData(response.data.data.findData);
        setLoading(false);
      } else if (searchParams.get("from") === "hotelMain") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-hotelswithdealbyid?_id=${payload.hotelCode}`
        );
        setData(response.data.data.findData);
        setLoading(false);
      } 
      else if(searchParams.get("from") === "yhhotels") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-yhhotels-byid?_id=${payload.hotelCode}`
        );
        setData(response.data.data.findData);
        setLoading(false);
      }
      else {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/hotelData-api-cleartrip-id?hotelCode=${
            payload.hotelCode
          }&checkInDate=${getDate(payload.checkInDate)}&checkOutDate=${getDate(
            payload.checkOutDate
          )}&noOfAdt=${payload.noOfAdt}&noOfChd=${payload.noOfChd}&noOfRoom=${
            payload.noOfRoom
          }&provider=${payload.provider}&fullName=${payload.fullName}&name=${
            payload.name
          }`
        );
        setData(response.data.data.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    getDescData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("getData", getData);
  return (
    <>
      <div className="container pt-4">
        {(() => {
          if (loading) {
            return Array.from({ length: 8 }).map((_, index) => (
              <div className="hotel-look" style={{ width: "100%" }}>
                <Flight_Testimonial key={index} />
              </div>
            ));
          } else {
            return (
              <div className="row justify-content-between">
                <div className="col-lg-12 ">
                  <Hoteldetailimage getData={getData} />
                </div>
                <div className="col-lg-7">
                  <Hotelcontent getData={getData} />
                </div>
                <div className="col-lg-4">
                  <Detailselectroom getData={getData} payload={payload} />
                </div>
              </div>
            );
          }
        })()}
      </div>
    </>
  );
};

export default Hoteldetail;
