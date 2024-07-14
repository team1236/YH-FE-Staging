import React, { useState, useEffect } from "react";
import EmojiTransportationOutlinedIcon from "@mui/icons-material/EmojiTransportationOutlined";
import { hotelTrendingAPI } from "../store/api/hotelPage";

const Trendinggetaway = () => {
  const [trendingGetaways, setTrendingGetaways] = useState([]);
  const getTrendingGetaways = async () => {
    const getData = await hotelTrendingAPI();
    setTrendingGetaways(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getTrendingGetaways()]);
  }, []);
  return (
    <>
      <div className="row getaway-row pt-5">
        <div className="destination-heading mb-2">
          <h4>Trending getaways!</h4>
        </div>
        {trendingGetaways.map((ele) => {
          return (
            <div className="col-lg-4 getaway-column">
              <div className="image-group">
                <img src={ele.image1} alt="Image 1" className="image" />
                <img src={ele.image2} alt="Image 2" className="image" />
              </div>
              <div className="image-bottom">
                <img src={ele.image3} alt="Image 3" className="image" />
              </div>
              <div className="getaway-content pt-2">
                <h5>{ele.title}</h5>
                <h6>
                  <span className="me-1">
                    {" "}
                    <EmojiTransportationOutlinedIcon />{" "}
                  </span>{" "}
                  {ele.description}{" "}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Trendinggetaway;
