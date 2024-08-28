import React, { useEffect, useState } from "react";
import Detailpaybox from "../components/Detailpaybox";
import Hotelbookingdetail from "../components/Hotelbookingdetail";
import Selectedroomdetail from "../components/Selectedroomdetail";
import Guestdetail from "../components/Guestdetail";
import { useLocation } from "react-router-dom";

const Hotelcheckoutpage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [addOns, setAddOns] = useState({
    meal: false,
    breakfast: false,
    extraBed: false,
    wifi: false,
    parking: false,
  });

  const [formData, setFormData] = useState({
    mainPassenger: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
    additionalPassengers: [],
  });

  let paramsData = {
    hotelName: searchParams.get("hotelName"),
    location: searchParams.get("location"),
    room_type: searchParams.get("room_type"),
    check_in: searchParams.get("check_in"),
    checkout: searchParams.get("checkout"),
    total_room: searchParams.get("total_room"),
    total_passenger: searchParams.get("total_passenger"),
    price: searchParams.get("price"),
    service: searchParams.get("service"),
    tax: searchParams.get("tax"),
    type: searchParams.get("type"),
    img1: searchParams.get("img1"),
    img2: searchParams.get("img2"),
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="container mt-4 pt-4">
      <div className="row justify-content-between">
        <div className="col-lg-8">
          <Hotelbookingdetail paramsData={paramsData}/>
          <Selectedroomdetail paramsData={paramsData}/>
          <Guestdetail addOns={addOns} setAddOns={setAddOns} formData={formData} setFormData={setFormData}/>
        </div>
        <div className="col-lg-4">
          <Detailpaybox paramsData={paramsData} formData={formData} addOns={addOns}/>
        </div>
      </div>
    </div>
  );
};

export default Hotelcheckoutpage;
