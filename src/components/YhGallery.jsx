import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryAPI } from "../store/api/gallery";

// Component for the top section with image
const GalleryHeader = ({ mainTitle, subtitle, image }) => {
  return (
    <div
      className="gallery-header"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div className="overlay" />
      <h1 className="main-title">{mainTitle}</h1>
      <p className="main-subtitle">{subtitle}</p>
    </div>
  );
};

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
          <h4 className="carousel-title">{title}</h4>
          <p className="carousel-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="hotel-deal-box">
        <Slider ref={sliderRef} {...settings} className="slider">
          {images.map((image, index) => (
            <div key={index} className="hotel-look">
              <div className="deal-img">
                <img src={image.src} alt={image.title} className="deal-image" />
              </div>
              {image.content && (
                <div className="deal-content">
                  <div className="review-box">
                    <h6 className="review-text">
                      <GradeIcon className="grade-icon" />{" "}
                      {image.content.rating}{" "}
                      <span className="review-count">
                        ({image.content.reviews} reviews)
                      </span>{" "}
                    </h6>
                  </div>
                  <h4 className="content-title pt-3">{image.content.title}</h4>
                  <small className="location-text">
                    <LocationOnOutlinedIcon className="location-icon" />{" "}
                    {image.content.location}
                  </small>
                  <div className="price-book-btn pt-2">
                    <h6 className="price-text">
                      ₹{image.content.price} <span>/ person</span>{" "}
                    </h6>
                    <button className="book-now-button">Book Now</button>
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
    try {
      const getData = await galleryAPI();
      setData(getData.data.findData);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <div className="gallery-page">
      {/* {data.map((ele, index) => (
        <GalleryHeader
          key={`header-${index}`}
          image={ele.img.length > 0 ? ele.img[0].src : ""}
          mainTitle="Explore Our Exclusive Gallery"
          subtitle="Discover beautiful destinations and experiences"
        />
      ))} */}
      {data.map((ele, index) => (
        <GalleryCarousel
          key={`carousel-${index}`}
          title={ele.title}
          subtitle={ele.description}
          images={ele.img}
        />
      ))}
    </div>
  );
};

export default GalleryPage;
