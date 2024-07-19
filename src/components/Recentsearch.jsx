import React, { useEffect } from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { recentSearchAPI } from "../store/api/flightPage";
import { Flight_Recent_Searches } from "./Shimmer";
import { useMediaQuery } from "@mui/material";

const Recentsearch = () => {
  const [searchItems, setSearchItems] = React.useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");

  const recentSearchapi = async () => {
    const getData = await recentSearchAPI();
    setSearchItems(getData.data.recentSearch);
  };

  useEffect(() => {
    Promise.allSettled([recentSearchapi()]);
  }, []);

  return (
    <section className="pt-5">
      <div className="recent-search-heading">
        <h4>Recent Searches</h4>
      </div>
      <div className="recent-search-container">
        {searchItems.length > 0
          ? searchItems.slice(0, 4).map((item, index) => (
              <div className="date-box" key={index}>
                <div className="checked-date">
                  <h5>{item.date}</h5>
                </div>
                <div className="recent-box">
                  <h6>{item.departure}</h6>
                  <ConnectingAirportsIcon className="icon" />
                  <h6>{item.arrival}</h6>
                </div>
              </div>
            ))
          : Array.from({ length: isMobile ? 2 : 4 }).map((_, index) => (
              <Flight_Recent_Searches key={index} />
            ))}
        <div className="placeholder"></div>
      </div>
    </section>
  );
};

export default Recentsearch;
