// import React from "react";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import GradeIcon from "@mui/icons-material/Grade";
// import { Link } from "react-router-dom";
// import ErrorPage from "./ErrorPage";
// const Hotellistcard = ({ getData }) => {
//         console.log("getData", getData);
//   return (
//     <>
//       {getData.length > 0 && (
//         <div className="deal-heading pt-3 mb-3">
//           <div>
//             <h4>Showing Results as per your Search</h4>
//             <p>Quality as judged by customers. Book at the ideal price!</p>
//           </div>
//         </div>
//       )}
//       {getData.length > 0 ? (
//         getData.map((ele) => {
//           return (
//             <div className="hotel-deal-box2">
//               <div className="hotel-look">
//                 <div className="deal-img">
//                   <img src={ele.image} alt="" />
//                 </div>
//                 <div className="deal-content">
//                   <div className="review-box">
//                     <h6>
//                       <GradeIcon /> {""} {ele.star_category}{" "}
//                       <span>({ele.reviews} reviews)</span>{" "}
//                     </h6>
//                   </div>
//                   <h4 className="pt-3">{ele.hotelName}</h4>
//                   <small>
//                     {" "}
//                     <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
//                   </small>

//                   <div className="price-book-btn pt-2">
//                     <h6>
//                       ₹{ele.price} <span>/ person</span>{" "}
//                     </h6>
//                     <Link
//                       className="book-link"
//                       to={`/hoteldetail?_id=${ele._id}`}
//                     >
//                       <button>Book Now</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <ErrorPage />
//       )}

//       {/* <div className="list-banner pt-5 pb-5">
//         <img src="list-banner.png" alt="" />
//       </div> */}
//     </>
//   );
// };

// export default Hotellistcard;

import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Hotellistcard = ({ getData }) => {
  console.log("getData", getData);

  return (
    <>
      {getData.length > 0 && (
        <div className="deal-heading pt-3 mb-3">
          <div>
            <h4>Showing Results as per your Search</h4>
            <p>Quality as judged by customers. Book at the ideal price!</p>
          </div>
        </div>
      )}

      {getData.length > 0 ? (
        <div className="row">
          {getData.map((ele) => (
            <div key={ele._id} className="col-lg-3">
              <div className="deal-img">
                <img src={ele.image} alt="" height={250} />
              </div>
              <div className="deal-content">
                <div className="review-box">
                  <h6>
                    <GradeIcon /> {ele.star_category}{" "}
                    <span>({ele.reviews} reviews)</span>{" "}
                  </h6>
                </div>
                <h4 className="pt-3">{ele.hotelName}</h4>
                <small>
                  <LocationOnOutlinedIcon /> {ele.city}, {ele.country}
                </small>

                <div className="price-book-btn pt-2">
                  <h6>
                    ₹{ele.price} <span>/ person</span>{" "}
                  </h6>
                  <Link className="book-link" to={`/hoteldetail?_id=${ele._id}`}>
                    <button>Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ErrorPage />
      )}

      {/* <div className="list-banner pt-5 pb-5">
        <img src="list-banner.png" alt="" />
      </div> */}
    </>
  );
};

export default Hotellistcard;
