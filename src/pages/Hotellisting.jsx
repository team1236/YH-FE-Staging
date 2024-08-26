import React, { useEffect, useState } from "react";
import Listingsearch from "../components/Listingsearch";
import Listingfilter from "../components/Listingfilter";
import Hotellistcard from "../components/Hotellistcard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const getDate = (value) => {
  const date = new Date(value);
  const formattedDate = format(date, "yyyy-MM-dd");
  return formattedDate;
};

const Hotellisting = () => {
  const location = useLocation();
  const [getData, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(location.search);
  let paramsData = {
    location: searchParams.get("location"),
    checkin: searchParams.get("checkin"),
    checkout: searchParams.get("checkout"),
    passengerValue: JSON.parse(searchParams.get("passengerValue")),
  };

  const getListData = async () => {
    try {
      if (selectedFilters && selectedFilters[0]?.filterType === "location") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/hotelData-api-cleartrip?checkInDate=${getDate(
            paramsData.checkin
          )}&checkOutDate=${getDate(paramsData.checkout)}&noOfRoom=${
            paramsData.passengerValue.rooms
          }&noOfAdt=${paramsData.passengerValue.adults}&noOfChd=${
            paramsData.passengerValue.children
          }&name=${paramsData.location}`
        );
        setData(response.data.findData);
        setLoading(false);
      } else {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/hotelData-api-cleartrip?checkInDate=${getDate(
            paramsData.checkin
          )}&checkOutDate=${getDate(paramsData.checkout)}&noOfRoom=${
            paramsData.passengerValue.rooms
          }&noOfAdt=${paramsData.passengerValue.adults}&noOfChd=${
            paramsData.passengerValue.children
          }&name=${paramsData.location}`
        );
        setData(response.data.data.filterData);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    getListData();
  }, [paramsData.location, selectedFilters]);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <Listingsearch paramsData={paramsData} />
        </div>
        <div className="col-lg-12">
          <Listingfilter
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <Hotellistcard getData={getData} paramsData={paramsData} loading={loading} selectedFilters={selectedFilters}/>
        </div>
      </div>
    </div>
  );
};

export default Hotellisting;
