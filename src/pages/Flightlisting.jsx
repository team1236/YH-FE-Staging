import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FlightshuffleArray from "../utils/FlightFilter";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const getDate = (value) => {
  if (value === "null") return "";
  const date = new Date(value);
  const formattedDate = format(date, "yyyy-MM-dd");
  return formattedDate;
};

const getDateFun = (value) => {
  const date = new Date(value);
  const formattedDate = date.toDateString();
  return formattedDate;
};

const Flightlisting = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  let dep_date = getDate(searchParams.get("departureDate"));
  let ret_date = getDate(searchParams.get("returnDate"));

  const payload = {
    from: searchParams.get("from").toLowerCase(),
    to: searchParams.get("to").toLowerCase(),
    departureDate: dep_date,
    returnDate: ret_date,
    cabinClass: searchParams.get("cabinClass"),
    adult: searchParams.get("adult"),
    child: searchParams.get("child"),
    infant: searchParams.get("infant"),
    tripType: searchParams.get("tripType"),
  };

  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortFilter, setSortFilter] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    leavingFrom: payload.from || "",
    goingTo: payload.to || "",
    date: dep_date || "",
  });

  const getFlightData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/v1/get-flight-cleartrip?departureDate=${dep_date}&returnDate=${ret_date}&noOfAdults=${
          payload.adult
        }&noOfChildren=${payload.child}&noOfInfants=${
          payload.infant
        }&destinationCity=${payload.to}&originCity=${
          payload.from
        }&classOfTravel=${payload.cabinClass}`
      );

      setGetData(response.data.data.filterData);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 504) {
        window.location.reload();
      }
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    getFlightData();
  }, [
    sortFilter,
    searchParams.get("from") ||
      searchParams.get("to") ||
      searchParams.get("departureDate"),
  ]);

  const handleOpen = () => {
    if (!Cookies.get("yh_auth_token")) {
      toast.error("Please login to continue");
      return;
    }
  };

  const renderFlights = () => {
    if (loading) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="60vh"
          textAlign="center"
        >
          <CircularProgress
            size={60}
            thickness={4.5}
            style={{ color: "#624fa8" }}
          />
          <Typography
            variant="h5"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Thanks for searching with Yours Hospitality Travel Company!
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: "10px", color: "#555" }}
          >
            We are finding the best deals for your stay. Please wait a moment
            while we bring you the top options.
          </Typography>
        </Box>
      );
    } else {
      return FlightshuffleArray(getData, sortFilter, isEdit).map(
        (ele, index) => (
          <div className="flight-column" key={index}>
            <div className="flight-heading">
              <div className="flight-place">
                <h6>
                  <span>
                    {ele.originCity} ({ele.departureCityWithCode})
                  </span>{" "}
                  <i className="bi bi-arrow-right-short"></i>{" "}
                  <span>
                    {ele.destinationCity} ({ele.arrivalCityWithCode})
                  </span>
                </h6>
                <h4>₹ {payload.tripType ? ele.price * 2 : ele.price}</h4>
              </div>
              <div className="flight-btn">
                {Cookies.get("yh_auth_token") ? (
                  <Link
                    to={`/flightcheckout?from=${payload.from}&to=${
                      payload.to
                    }&departureDate=${getDateFun(
                      searchParams.get("departureDate")
                    )}
            &cabinClass=${payload.cabinClass}&logo=${
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .airlineCode
                    }&flightName=${
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .airline
                    }&flightNumber=${ele.flightNumber}
            &flight_dep=${
              ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                .departureTime
            }&flight_arr=${
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .arrivalTime
                    }&flightTime=${
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .flightTime
                    }&origin_airport=${`${ele.originAirportName}, ${ele.originCity}, India`}
            &destination_airport=${`${ele.destinationAirportName}, ${ele.destinationCity}, India`}
            &price=${payload.tripType ? ele.price * 2 : ele.price}
            `}
                  >
                    <button>Book Now</button>
                  </Link>
                ) : (
                  <button className="cab-button" onClick={handleOpen}>
                    Book Now
                  </button>
                )}
              </div>
            </div>

            <div className="row flight-inner-row">
              <div className="col-lg-1">
                <div className="flight-name-box">
                  <img
                    src={`https://www.air.irctc.co.in/assets/img/flights-icon/${
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .airlineCode
                    }.png`}
                    width={32}
                    height={32}
                    alt={
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .airline
                    }
                  />
                  <h6>
                    {
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .airline
                    }
                  </h6>
                  <p>
                    {ele.flightNumber}
                    <br />
                    <span>
                      {payload.cabinClass.charAt(0).toUpperCase() +
                        payload.cabinClass.slice(1)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="flight-info">
                  <h6>
                    {
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .departureTime
                    }
                  </h6>
                  <p>{getDateFun(searchParams.get("departureDate"))}</p>
                  <h5>
                    {ele.originAirportName}, {ele.originCity}, India
                  </h5>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="flight-time-took">
                  <i className="bi bi-clock"></i>
                  <p>{ele.duration}</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="flight-info">
                  <h6>
                    {
                      ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                        .arrivalTime
                    }
                  </h6>
                  <p>{getDateFun(searchParams.get("departureDate"))}</p>
                  <h5>
                    {ele.destinationAirportName}, {ele.destinationCity}, India
                  </h5>
                </div>
              </div>
            </div>

            {payload.tripType === "true" && (
              <div className="row flight-inner-row return-flight">
                <h6>Round Trip</h6>
                <div className="col-lg-1">
                  <div className="flight-name-box">
                    <img
                      src={`https://www.air.irctc.co.in/assets/img/flights-icon/${
                        ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                          .airlineCode
                      }.png`}
                      width={32}
                      height={32}
                      alt={
                        ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                          .airline
                      }
                    />
                    <h6>
                      {
                        ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                          .airline
                      }
                    </h6>
                    <p>
                      {ele?.flightNumber.includes("/")
                        ? ele.lstFlightDetails[ele.lstFlightDetails.length - 1]
                            .flightNumber
                        : Number(ele.flightNumber) + 8}
                      <br />
                      <span>
                        {payload.cabinClass.charAt(0).toUpperCase() +
                          payload.cabinClass.slice(1)}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="flight-info">
                    <h6>{ele?.lstFlightDetails[0]?.arrivalTime}</h6>
                    <p>{getDateFun(searchParams.get("returnDate"))}</p>
                    <h5>
                      {ele.destinationAirportName}, {ele.destinationCity}, India
                    </h5>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="flight-time-took">
                    <i className="bi bi-clock"></i>
                    <p>{ele.duration}</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="flight-info">
                    <h6>{ele.departureTime}</h6>
                    <p>{getDateFun(searchParams.get("returnDate"))}</p>
                    <h5>
                      {ele.originAirportName}, {ele.originCity}, India
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit(true);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  console.log("payload", payload)

  return (
    <div className="container pt-4 mt-2">
      <div className="list-heading">
        <div className="sort-content">
          <h3>
            Best Flexible flight booking from{" "}
            {payload.from.charAt(0).toUpperCase() + payload.from.slice(1)} to{" "}
            {payload.to.charAt(0).toUpperCase() + payload.to.slice(1)}
          </h3>
          <h6>
            {getData.length}+ Flights Found in {payload.from}, India
          </h6>
        </div>
        <div className="sort-select">
          <h6>Sort by:</h6>
          <select
            className="form-select"
            onChange={(e) => setSortFilter(e.target.value)}
          >
            <option defaultValue="Popularity">Popularity</option>
            <option value="Rating">Rating</option>
            <option value="Star">Star</option>
            <option value="Price">Price</option>
          </select>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-lg-3">
          <div className="filter-column">
            <div className="availability-filter">
              <h5>Availability</h5>
              <hr />
              <form className="filter-form">
                {["Leaving From", "Going To", "Date"].map((label, index) => (
                  <div className="mb-3" key={index}>
                    <label>{label}</label>
                    <input
                      type={label === "Date" ? "date" : "text"}
                      name={
                        label === "Leaving From"
                          ? "leavingFrom"
                          : label === "Going To"
                          ? "goingTo"
                          : label === "Date"
                          ? "date"
                          : "departureTime"
                      }
                      value={
                        formValues[
                          label === "Leaving From"
                            ? "leavingFrom"
                            : label === "Going To"
                            ? "goingTo"
                            : label === "Date"
                            ? "date"
                            : "departureTime"
                        ]
                      }
                      onChange={handleChange}
                      className="form-control"
                      placeholder={
                        label === "Leaving From"
                          ? "Sydney, Australia"
                          : label === "Going To"
                          ? "Goa, India"
                          : ""
                      }
                    />
                  </div>
                ))}
                <Link
                  to={`/flightlisting?tripType=${payload.tripType}&from=${
                    formValues.leavingFrom
                  }&to=${formValues.goingTo}&departureDate=${searchParams.get(
                    "departureDate"
                  )}&returnDate=${searchParams.get("returnDate")}&cabinClass=${
                    payload.cabinClass
                  }
            &adult=${payload.adult}&child=${payload.child}&infant=${
                    payload.infant
                  }`}
                >
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => setLoading(true)}
                  >
                    Search Flights{" "}
                    <span className="icon-wrapper">
                      <FlightTakeoffIcon sx={{ color: "white" }} />
                    </span>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-9 pt-2">{renderFlights()} </div>
      </div>
    </div>
  );
};

export default Flightlisting;
