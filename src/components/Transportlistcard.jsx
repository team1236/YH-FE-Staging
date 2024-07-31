import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Transportlistcard = ({ paramsData }) => {
  const [filterData, setFilterData] = useState([]);
  const getFilterData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-transportListing?type=${
          paramsData.type
        }&from=${paramsData.from}&to=${paramsData.to}&date=${
          paramsData.date
        }&month=${paramsData.month}&year=${2024}`
      );
      setFilterData(response.data.data.findData);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getFilterData();
  }, []);

  const handleOpen = () => {
    if (!Cookies.get("yh_auth_token")) {
      toast.error("Please login to continue");
      return;
    }
  };

  return (
    <>
      {filterData.length > 0 ? (
        filterData.map((ele) => {
          return (
            <section className="cab-books">
              <article className="cab-book-card cab-books-list__item">
                <div className="cab-book-card__departure">
                  <time className="cab-book-card__time">{ele.startTime}</time>
                  <h2 className="cab-book-card__city">
                    {ele?.from?.charAt(0)?.toUpperCase() + ele?.from?.slice(1)}
                  </h2>
                  <time className="cab-book-card__day">
                    {ele.day},{" "}
                    {ele?.month?.charAt(0)?.toUpperCase() + ele.month?.slice(1)}{" "}
                    {ele.date}, {ele.year}
                  </time>
                </div>
                <div className="cab-book-card__route">
                  <p className="cab-book-card__duration">{ele.duration}</p>
                  <div
                    className="cab-book-card__route-line route-line"
                    aria-hidden="true"
                  >
                    <div
                      className="route-line__stop route-line__start"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="route-line__stop route-line__end"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <p className="cab-book-card__type">Non-stop</p>
                </div>
                <div className="cab-book-card__arrival">
                  <time className="cab-book-card__time">{ele.endTime}</time>
                  <h2 className="cab-book-card__city">
                    {ele?.to?.charAt(0)?.toUpperCase() + ele?.to?.slice(1)}
                  </h2>
                  <time className="cab-book-card__day">
                    {ele.day},{" "}
                    {ele.month?.charAt(0)?.toUpperCase() + ele.month?.slice(1)}{" "}
                    {ele.date}, {ele.year}
                  </time>
                </div>
                <div className="cab-book-card__action">
                  <p className="cab-book-card__price styled-price">
                    ₹{ele.price}
                  </p>
                  {Cookies.get("yh_auth_token") ? (
                    <Link
                      to={`/cabcheckout?type=${paramsData.type}&startTime=${
                        ele.startTime
                      }&from=${
                        ele?.from?.charAt(0)?.toUpperCase() +
                        ele?.from?.slice(1)
                      }&day=${ele.day}&month=${
                        ele?.month?.charAt(0)?.toUpperCase() +
                        ele.month?.slice(1)
                      }&date=${ele.date}&year=${ele.year}&duration=${
                        ele.duration
                      }&endTime=${ele.endTime}&to=${
                        ele?.to?.charAt(0)?.toUpperCase() + ele?.to?.slice(1)
                      }&price=${ele.price}&serviceFee=${ele.service_fee}`}
                    >
                      <button className="cab-button">Book Now</button>
                    </Link>
                  ) : (
                    <button className="cab-button" onClick={handleOpen}>
                      Book Now
                    </button>
                  )}
                </div>
              </article>
            </section>
          );
        })
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Transportlistcard;
