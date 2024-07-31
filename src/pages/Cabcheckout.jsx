import React, { useState } from "react";
import Cabpaybox from "../components/Cabpaybox";
import Cabbookingdetail from "../components/Cabbookingdetail";
import Cabpassengerdetail from "../components/Cabpassengerdetail";
import { useLocation } from "react-router-dom";

const Cabcheckout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let paramsData = {
    type: searchParams.get("type"),
    startTime: searchParams.get("startTime"),
    from: searchParams.get("from"),
    day: searchParams.get("day"),
    month: searchParams.get("month"),
    date: searchParams.get("date"),
    year: searchParams.get("year"),
    duration: searchParams.get("duration"),
    endTime: searchParams.get("endTime"),
    to: searchParams.get("to"),
    price: searchParams.get("price"),
    serviceFee: searchParams.get("serviceFee"),
  };

  const [formData, setFormData] = useState({
    mainPassenger: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
    additionalPassengers: [],
  });

  return (
    <div className="container mt-4 pt-4">
      <div className="row justify-content-between">
        <div className="col-lg-8">
          <Cabbookingdetail paramsData={paramsData} formData={formData} />
          <Cabpassengerdetail setFormData={setFormData} formData={formData} />
        </div>
        <div className="col-lg-4">
          <Cabpaybox paramsData={paramsData} formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Cabcheckout;
