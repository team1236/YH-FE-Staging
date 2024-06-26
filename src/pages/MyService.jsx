import React from "react";
import Sidenav from "../components/Sidenav";
import MyServiceCard from "../components/MyServiceCard";


const Hotel = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            {/* <Hotelsearch /> */}
            <MyServiceCard/>
            {/* <Hotelbanner /> */}
            {/* <Hoteloffer /> */}
            {/* <Populardestination /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
