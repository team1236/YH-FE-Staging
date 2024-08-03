import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const OurPartners = () => {
  const [imgData, setImgData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-partners`
      );
      setImgData(response.data.data.findData);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const partnerLogos = [
    { id: 1, src: "partner.png", alt: "Logo 1" },
    { id: 2, src: "partner1.png", alt: "Logo 2" },
    { id: 3, src: "partner2.png", alt: "Logo 3" },
    { id: 4, src: "partner3.png", alt: "Logo 4" },
    { id: 5, src: "partner.png", alt: "Logo 5" },
    { id: 6, src: "partner1.png", alt: "Logo 6" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="our-partners-section">
      <h4>Our Partners</h4>
      <Slider {...sliderSettings}>
        {imgData.map((logo) => (
          <div key={logo._id} className="logo-slide">
            <img src={logo.image} alt={logo.alt} className="partner-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurPartners;
