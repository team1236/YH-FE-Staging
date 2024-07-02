import React from 'react';
import Slider from 'react-slick';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EastIcon from '@mui/icons-material/East';
import GradeIcon from '@mui/icons-material/Grade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hotelcarausel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="deal-heading pt-5 mb-3">
        <div>
          <h4>Nearby Shooting Ranges</h4>
          <p>Quality as judged by customers. Book at the ideal price!</p>
        </div>
        <div>
          <button> View More <EastIcon /></button>
        </div>
      </div>
      <div className="hotel-deal-box">
        <Slider {...settings} className="slider">
          <div className="hotel-look">
            <div className="deal-img">
              <img src="deal1.png" alt="" />
            </div>
            <div className='deal-content'>
              <div className='review-box'>
                <h6><GradeIcon /> 4.96 <span>(672 reviews)</span> </h6>
              </div>
              <h4 className='pt-3'>California Sunset/Twilight Boat Cruise</h4>
              <small><LocationOnOutlinedIcon /> Manchester, England</small>
              <div className='price-book-btn pt-2'>
                <h6>₹848.25 <span>/ person</span> </h6>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="hotel-look">
            <div className="deal-img">
              <img src="deal2.png" alt="" />
            </div>
            <div className='deal-content'>
              <div className='review-box'>
                <h6><GradeIcon /> 4.96 <span>(672 reviews)</span> </h6>
              </div>
              <h4 className='pt-3'>NYC: Food Tastings and Culture Tour</h4>
              <small><LocationOnOutlinedIcon /> Manchester, England</small>
              <div className='price-book-btn pt-2'>
                <h6>₹848.25 <span>/ person</span> </h6>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="hotel-look">
            <div className="deal-img">
              <img src="deal3.png" alt="" />
            </div>
            <div className='deal-content'>
              <div className='review-box'>
                <h6><GradeIcon /> 4.96 <span>(672 reviews)</span> </h6>
              </div>
              <h4 className='pt-3'>Grand Canyon Horseshoe Bend 2 days</h4>
              <small><LocationOnOutlinedIcon /> Manchester, England</small>
              <div className='price-book-btn pt-2'>
                <h6>₹848.25 <span>/ person</span> </h6>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="hotel-look">
            <div className="deal-img">
              <img src="deal1.png" alt="" />
            </div>
            <div className='deal-content'>
              <div className='review-box'>
                <h6><GradeIcon /> 4.96 <span>(672 reviews)</span> </h6>
              </div>
              <h4 className='pt-3'>California Sunset/Twilight Boat Cruise</h4>
              <small><LocationOnOutlinedIcon /> Manchester, England</small>
              <div className='price-book-btn pt-2'>
                <h6>₹848.25 <span>/ person</span> </h6>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hotelcarausel;
