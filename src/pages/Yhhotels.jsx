import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Yhhotellist from "../components/Yhhotellist";
import Yhsearchcard from "../components/Yhsearchcard";
import OurPartners from "../components/Ourpartners";
import WhyChooseUs from "../components/WhyChooseUs";
const Yhhotels = () => {
  const [cabinClass, setCabinClass] = useState("Hotels");
  const [fromValue, setFromValue] = useState("");

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            <Yhsearchcard
              cabinClass={cabinClass}
              setCabinClass={setCabinClass}
              fromValue={fromValue}
              setFromValue={setFromValue}
            />
            <Yhhotellist cabinClass={cabinClass} fromValue={fromValue} />
            <WhyChooseUs/>
            <OurPartners/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yhhotels;
