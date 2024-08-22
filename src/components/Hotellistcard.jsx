import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { Flight_Testimonial } from "./Shimmer";

const Hotellistcard = ({ getData, paramsData, loading }) => {
  return (
    <>
      {getData && getData?.length > 0 && (
        <div className="deal-heading pt-3 mb-3">
          <div>
            <h4>Showing Results as per your Search</h4>
            <p>Quality as judged by customers. Book at the ideal price!</p>
          </div>
        </div>
      )}

      {(() => {
        if (loading) {
          return Array.from({ length: 8 }).map((_, index) => (
            <div className="hotel-look" style={{ width: "100%" }}>
              <Flight_Testimonial key={index} />
            </div>
          ));
        }
        if (getData && getData?.length > 0 && !loading) {
          if (getData && getData?.length === 0) {
            return <ErrorPage />;
          }
          return (
            <div className="row">
              {getData &&
                getData?.map((ele) => (
                  <div key={ele._id} className="col-lg-3">
                    <div className="deal-img">
                      <img src={ele.hotelGallery.url} alt="" height={250} />
                    </div>
                    <div className="deal-content">
                      <div className="review-box">
                        <h6>
                          <GradeIcon /> {ele.starRating || 1}{" "}
                          <span>({ele.hotelPrice.couponDiscount} reviews)</span>{" "}
                        </h6>
                      </div>
                      <h4 className="pt-3">{ele.hotelName}</h4>
                      <small>
                        <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
                      </small>

                      <div className="price-book-btn pt-2">
                        <h6>
                          ₹{ele.hotelPrice.basePrice} <span>/ person</span>{" "}
                        </h6>
                        <Link
                          className="book-link"
                          to={`/hoteldetail?price=${ele.hotelPrice.basePrice}&hotelCode=${ele.hotelCode}&checkInDate=${paramsData.checkin}&checkOutDate=${paramsData.checkout}&noOfRoom=${paramsData.passengerValue.rooms}&noOfAdt=${paramsData.passengerValue.adults}&noOfChd=${paramsData.passengerValue.children}&provider=${ele.provider}&fullName=${paramsData.location}&name=${ele.hotelName}`}
                        >
                          <button>Book Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          );
        }
      })()}
    </>
  );
};

export default Hotellistcard;
