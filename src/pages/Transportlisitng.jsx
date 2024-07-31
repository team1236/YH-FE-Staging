import React from "react";
import Transportlistcard from "../components/Transportlistcard";
import Cabsearch from "../components/Cabsearch";
import Cabcoupon from "../components/Cabcoupon";
import { useLocation } from "react-router-dom";

const Transportlisitng = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let paramsData = {
    type: searchParams.get("type"),
    from: searchParams.get("from"),
    to: searchParams.get("to"),
    date: searchParams.get("date"),
    month: searchParams.get("month"),
  };

  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-12 pb-5">
            <Cabsearch paramsData={paramsData}/>
          </div>
          <div className="col-lg-3 pt-1">
            <Cabcoupon />
          </div>
          <div className="col-lg-9">
            <Transportlistcard paramsData={paramsData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportlisitng;
