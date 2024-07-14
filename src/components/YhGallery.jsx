import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryAPI } from "../store/api/gallery";

const GalleryCarousel = ({ title, subtitle, images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="deal-heading pt-5 mb-3">
        <div>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="hotel-deal-box">
        <Slider ref={sliderRef} {...settings} className="slider">
          {images.map((image, index) => (
            <div key={index} className="hotel-look">
              <div className="deal-img">
                <img src={image.src} alt={image.title} />
              </div>
              {image.content && (
                <div className="deal-content">
                  <div className="review-box">
                    <h6>
                      <GradeIcon /> {image.content.rating}{" "}
                      <span>({image.content.reviews} reviews)</span>{" "}
                    </h6>
                  </div>
                  <h4 className="pt-3">{image.content.title}</h4>
                  <small>
                    <LocationOnOutlinedIcon /> {image.content.location}
                  </small>
                  <div className="price-book-btn pt-2">
                    <h6>
                      ₹{image.content.price} <span>/ person</span>{" "}
                    </h6>
                    <button>Book Now</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const GalleryPage = () => {
  const [data, setData] = useState([]);
  const getGalleryData = async () => {
    const getData = await galleryAPI();
    setData(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([getGalleryData()]);
  }, []);

  return (
    <div>
      {data.map((ele) => {
        return (
          <GalleryCarousel
            title={ele.title}
            subtitle={ele.description}
            images={ele.img}
          />
        );
      })}
    </div>
  );
};

export default GalleryPage;
