import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Hotelbookingdetail = ({ paramsData }) => {
  function formatDate(dateStr) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Split the date string into components
    const [day, month, year] = dateStr.split("-");

    // Convert month to the month name
    const monthName = months[parseInt(month, 10) - 1];

    // Return the formatted date
    return `${day} ${monthName}`;
  }

  function dateDifference(date1, date2) {
    // Parse the dates with a consistent format
    const [day1, month1, year1] = date1.split("-").map(Number);
    const [day2, month2, year2] = date2.split("-").map(Number);

    // Create Date objects with the correct order: year, month (0-indexed), day
    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);

    // Calculate the difference in time
    const timeDifference = Math.abs(d1 - d2);

    // Convert time difference from milliseconds to days
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return dayDifference;
  }

  function formatDateConevrt(date) {
    const res = `${date.split(" ")[0]} ${date.split(" ")[1]} ${
      date.split(" ")[2]
    } ${date.split(" ")[3]}`;
    return res;
  }

  function calculateNights(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in time (in milliseconds)
    const differenceInTime = end - start;

    // Convert the difference from milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  }

  return (
    <>
      <div className="booking-card">
        <div className="card-heading">
          <div className="card-text">
            <small>Booking Details</small>
            <h3>{paramsData.hotelName}</h3>
            <div className="star-icon">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </div>
          </div>
          <div className="card-img">
            <img src={paramsData.img1} alt="" />
          </div>
        </div>
        <div className="row check-details">
          <div className="check-margin col-4 col-lg-3">
            <h5>Check-in</h5>
            <h3>{formatDateConevrt(paramsData.check_in)}</h3>
            <h5>12:00pm</h5>
          </div>
          <div className="check-margin col-4 col-lg-2">
            <span>
              {calculateNights(
                formatDateConevrt(paramsData.check_in),
                formatDateConevrt(paramsData.checkout)
              )}{" "}
              Night
            </span>
          </div>
          <div className="check-margin col-4 col-lg-3">
            <h5>Check-out</h5>
            <h3>{formatDateConevrt(paramsData.checkout)}</h3>
            <h5>12:00pm</h5>
          </div>

          <div className="check-margin col-12 col-lg-4">
            <h5>Rooms & Guests</h5>
            <h3>
              {paramsData.total_room} Room & {paramsData.total_passenger} Guest
            </h3>
            {/* <h5>2 Adults, 2 Children</h5> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotelbookingdetail;
