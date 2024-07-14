import React from "react";
import Sidenav from "../components/Sidenav";
import Transportsearch from "../components/Transportsearch";
import Transportoffer from "../components/Transportoffer";
import WhyChooseUs from "../components/WhyChooseUs";
import Transportservice from "../components/Transportservice";
import Transportbanner from "../components/Transportbanner";

const Transport = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            <Transportsearch />
            <Transportbanner />
            <Transportoffer />
            <Transportservice />
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transport;
