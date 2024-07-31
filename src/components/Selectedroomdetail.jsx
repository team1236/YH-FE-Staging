import React from "react";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import NoCrashOutlinedIcon from "@mui/icons-material/NoCrashOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";

const Selectedroomdetail = ({ paramsData }) => {
  return (
    <>
      <div className="row selected-room pt-5">
        <h4>{paramsData.hotelName}</h4>
        <div className="col-lg-3 pt-4">
          <div className="selected-room-img">
            <img src="detail3.webp" alt="" />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="amenities">
            <div className="facility-box">
              <div className="facility-list">
                <h5>
                  <WifiOutlinedIcon /> Fast wifi – 500 Mbps
                </h5>
              </div>
              <div className="facility-list">
                <h5>
                  <NoCrashOutlinedIcon /> Free Vehicle parking
                </h5>
              </div>
              <div className="facility-list">
                <h5>
                  <TvOutlinedIcon /> HDTV with standard cable
                </h5>
              </div>
              <div className="facility-list">
                <h5>
                  <AcUnitOutlinedIcon /> Air conditioning
                </h5>
              </div>
              <div className="facility-list">
                <h5>
                  <LuggageOutlinedIcon /> Luggage drop-off
                </h5>
              </div>
              <div className="facility-list">
                <h5>
                  <SecurityOutlinedIcon /> Security cameras on property
                </h5>
              </div>
              <div className="facility-list">
                <h5>
                  <PoolOutlinedIcon /> Swimming Pool
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selectedroomdetail;
