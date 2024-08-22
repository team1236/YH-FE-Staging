import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Hotelcontent = ({ getData }) => {
  return (
    <>
      <div className="hotel-content">
        <div className="detail-name">
          <h4>
            Room in {getData && getData?.hotelAddress?.city},{" "}
            {getData && getData?.hotelAddress?.country}
          </h4>
          <p>
            {getData && getData?.descriptionbed} queen bed - Dedicated bathroom
          </p>
          <p>
            CheckIn - {getData && getData?.chkInTime}, Checkout -{" "}
            {getData && getData?.chkOutTime}
          </p>
        </div>
        <div className="short-review-box mt-5">
          <div>
            <h5>
              Guest <br /> Favourite
            </h5>
          </div>
          <div>
            <p>
              One of the most loved hotel on <b>Yours Hospitality</b> <br /> in{" "}
              {getData && getData?.hotelAddress?.country} by our Guests
            </p>
          </div>
          <div className="num-box">
            <h6>{getData && getData?.startRating}</h6>
            <span>
              {Array(getData && getData?.startRating)
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
            </span>
          </div>
          <div className="num-box">
            <h6>{getData && getData?.startRating * 50}</h6>
            <span>Reviews</span>
          </div>
        </div>

        <div className="about-hotel pt-5">
          <h5>About this place</h5>
          <p className="mt-3">{`${getData?.hotelName}, where luxury meets comfort in the heart of ${getData?.hotelAddress?.city}. Nestled in a prime location, our hotel offers breathtaking views of ${getData?.hotelAddress?.locality}, making it an ideal retreat for both business and leisure travelers.

Our elegantly designed rooms and suites are equipped with modern amenities, ensuring a relaxing stay. Whether you’re here to unwind by the pool, indulge in gourmet dining at our on-site restaurant, or stay active in our state-of-the-art fitness center, ${getData?.hotelName} provides a tranquil oasis amidst the bustling city.

For those seeking to explore, we are just minutes away from ${getData?.hotelAddress?.city} and ${getData?.hotelAddress?.locality}, offering convenient access to the city’s top attractions. Our dedicated concierge team is always on hand to assist with personalized recommendations and bookings, ensuring your stay is tailored to your preferences.`}</p>
        </div>

        <div className="amenities pt-4">
          <h4>Amenities We offer</h4>
          <div className="facility-box">
            {getData &&
              getData?.hotelAmenities?.map((ele) => {
                return (
                  <div className="facility-list" key="wifi">
                    <h5>{ele}</h5>
                  </div>
                );
              })}
          </div>
        </div>

        <hr />
        <div className="hotel-location">
          <h4>Where You will be</h4>
          <iframe
            title="Hotel Location"
            src={`https://www.google.com/maps?q=${getData?.lati},${getData?.longi}&output=embed`}
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <h4>{"Hotel Policy"}</h4>
          <p>
            {getData?.hotelPolicy?.map((ele, i) => {
              return <li key={i}>{ele.heading}</li>;
            })}
          </p>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Hotelcontent;
