import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EastIcon from "@mui/icons-material/East";
import GradeIcon from "@mui/icons-material/Grade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        {/* <div>
          <button>
            View More <EastIcon />
          </button>
        </div> */}
      </div>
      <div className="hotel-deal-box">
        <Slider ref={sliderRef} {...settings} className="slider">
          {images.map((image, index) => (
            <div key={index} className="hotel-look">
              <div className="deal-img">
                <img src={image.src} alt={image.alt} />
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
  const eventPhotos = [
    {
      src: "https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/63ecdf6e6df724eab1f0e8ca_20230215T0132-25bece5c-5ab8-4c33-98c7-60ad2668054b.webp",
      alt: "Event 1",
      content: null,
    },
    {
      src: "https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/63ecdf6e6df724eab1f0e8ca_20230215T0132-25bece5c-5ab8-4c33-98c7-60ad2668054b.webp",
      alt: "Event 2",
      content: null,
    },
    {
      src: "https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/63ecdf6e6df724eab1f0e8ca_20230215T0132-25bece5c-5ab8-4c33-98c7-60ad2668054b.webp",
      alt: "Event 3",
      content: null,
    },
  ];

  const teamPhotos = [
    {
      src: "https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=",
      alt: "Team 1",
      content: null,
    },
    {
      src: "https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=",
      alt: "Team 2",
      content: null,
    },
    {
      src: "https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=",
      alt: "Team 3",
      content: null,
    },
  ];

  const dealPhotos = [
    {
      src: "deal1.png",
      alt: "Deal 1",
      content: {
        rating: "4.96",
        reviews: "672",
        title: "California Sunset/Twilight Boat Cruise",
        location: "Manchester, England",
        price: "848.25",
      },
    },
    {
      src: "deal2.png",
      alt: "Deal 2",
      content: {
        rating: "4.96",
        reviews: "672",
        title: "NYC: Food Tastings and Culture Tour",
        location: "Manchester, England",
        price: "848.25",
      },
    },
    {
      src: "deal3.png",
      alt: "Deal 3",
      content: {
        rating: "4.96",
        reviews: "672",
        title: "Grand Canyon Horseshoe Bend 2 days",
        location: "Manchester, England",
        price: "848.25",
      },
    },
  ];

  return (
    <div>
      <GalleryCarousel
        title="Event Photos"
        subtitle="Memorable moments from our events."
        images={eventPhotos}
      />
      <GalleryCarousel
        title="Team Photos"
        subtitle="Meet our amazing team."
        images={teamPhotos}
      />
      {/* <GalleryCarousel
        title="Nearby Shooting Ranges"
        subtitle="Quality as judged by customers. Book at the ideal price!"
        images={dealPhotos}
      /> */}
    </div>
  );
};

export default GalleryPage;
