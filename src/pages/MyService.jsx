import React from "react";
import Sidenav from "../components/Sidenav";
import MyServiceCard from "../components/MyServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "../components/Ourpartners";

const Hotel = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            <MyServiceCard />
            <WhyChooseUs />
            <OurPartners/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
