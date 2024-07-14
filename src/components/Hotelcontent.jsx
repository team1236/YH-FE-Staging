import React from 'react';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import StarIcon from '@mui/icons-material/Star';

const Hotelcontent = () => {
  return (
    <>
      <div className="hotel-content">
        <div className="detail-name">
          <h4>Room in California, USA</h4>
          <p>1 queen bed - Dedicated bathroom</p>
        </div>
        <div className="short-review-box mt-5">
          <div>
            <h5>Guest <br /> Favourite</h5>
          </div>
          <div>
            <p>One of the most loved hotel on <b>Yours Hospitality</b> <br /> in USA by our Guests</p>
          </div>
          <div className='num-box'>
            <h6>4.50</h6>
            <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
          </div>
          <div className='num-box'>
            <h6>320</h6>
            <span>Reviews</span>
          </div>
        </div>

        <div className="about-hotel pt-5">
          <h5>About this place</h5>
          <p className='mt-3'>SANTIPHAP ROOM - is a spacious en-suite located on the top floor of the renovated 40-year old shophouse.
            The room is a Thai-contemporary inspired, overlooking one of the most sacred Temple and a balcony with little garden.
          </p>
          <p>SANTIPHAP ROOM - is a spacious en-suite located on the top floor of the renovated 40-year old shophouse.
            The room is a Thai-contemporary inspired, overlooking one of the most sacred Temple and a balcony with little garden.</p>
        </div>


<div className="amenities pt-4">
    <h4>Amenities We offer</h4>
<div className="facility-box">
          <div className='facility-list'>
            <h5><WifiOutlinedIcon /> Fast wifi – 500 Mbps</h5>
          </div>
          <div className='facility-list'>
            <h5><NoCrashOutlinedIcon /> Free Vehicle parking</h5>
          </div>
          <div className='facility-list'>
            <h5><TvOutlinedIcon /> HDTV with standard cable</h5>
          </div>
          <div className='facility-list'>
            <h5><AcUnitOutlinedIcon /> Air conditioning</h5>
          </div>
          <div className='facility-list'>
            <h5><LuggageOutlinedIcon /> Luggage drop-off</h5>
          </div>
          <div className='facility-list'>
            <h5><SecurityOutlinedIcon /> Security cameras on property</h5>
          </div>
          <div className='facility-list'>
            <h5><PoolOutlinedIcon /> Swimming Pool</h5>
          </div>
        </div>
</div>

      </div>
    </>
  );
};

export default Hotelcontent;
