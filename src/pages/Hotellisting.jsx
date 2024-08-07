import React, { useEffect, useState } from "react";
import Listingsearch from "../components/Listingsearch";
import Listingfilter from "../components/Listingfilter";
import Hotellistcard from "../components/Hotellistcard";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Hotellisting = () => {
  const location = useLocation();
  const [getData, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  let paramsData = {
    location: searchParams.get("location"),
    checkin: searchParams.get("checkin"),
    checkout: searchParams.get("checkout"),
    passengerValue: JSON.parse(searchParams.get("passengerValue")),
  };

  const getListData = async () => {
    try {
      const filterParams = selectedFilters
        .map(
          (filter) =>
            `${filter.filterType}=${encodeURIComponent(filter.option)}`
        )
        .join("&");

      if (selectedFilters && selectedFilters[0]?.filterType === "location") {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-hotelListing?${filterParams}`
        );

        setData(response.data.data.findData);
      } else {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/get-hotelListing?location=${
            paramsData.location
          }&${filterParams}`
        );

        setData(response.data.data.findData);
      }
    } catch (error) {
      console.log("Error", error);
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
          <Hotellistcard getData={getData} />
        </div>
      </div>
    </div>
  );
};

export default Hotellisting;
