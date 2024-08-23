import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TextField,
  Tabs,
  Tab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  IconButton,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import handleRazorPay from "../utils/paymentMethod";

const Flightcheckout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const payload = {
    from: searchParams.get("from"),
    to: searchParams.get("to"),
    departureDate: searchParams.get("departureDate"),
    cabinClass: searchParams.get("cabinClass"),
    logo: searchParams.get("logo"),
    flightName: searchParams.get("flightName"),
    flightNumber: searchParams.get("flightNumber"),
    flight_dep: searchParams.get("flight_dep"),
    flight_arr: searchParams.get("flight_arr"),
    flightTime: searchParams.get("flightTime"),
    origin_airport: searchParams.get("origin_airport"),
    destination_airport: searchParams.get("destination_airport"),
    price: searchParams.get("price"),
  };

  const [openPolicies, setOpenPolicies] = useState([false, false]);

  const togglePolicy = (index) => {
    setOpenPolicies((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [activeTab, setActiveTab] = useState("Mr.");
  const [showDialog, setShowDialog] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestGender, setGuestGender] = useState("Mr.");
  const [guests, setGuests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddGuestClick = () => {
    setShowDialog(true);
  };

  const handleSaveGuest = () => {
    setGuests([...guests, { name: guestName, gender: guestGender }]);
    setGuestName("");
    setGuestGender("Mr.");
    setShowDialog(false);
  };

  const handleEditGuest = (index) => {
    const guest = guests[index];
    setGuestName(guest.name);
    setGuestGender(guest.gender);
    setGuests(guests.filter((_, i) => i !== index));
    setShowDialog(true);
  };

  const handleDeleteGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const [formData, setFormData] = useState({
    mainPassenger: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
    additionalPassengers: [],
  });

  const handleMainPassengerChange = (e) => {
    setFormData({
      ...formData,
      mainPassenger: {
        ...formData.mainPassenger,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSave = () => {
    const nameInput = document.getElementById("guest-name").value;
    if (isEditing && passengerIndex !== null) {
      const updatedPassengers = formData.additionalPassengers.map(
        (passenger, index) => {
          if (index === passengerIndex) {
            return { ...passenger, name: nameInput };
          }
          return passenger;
        }
      );
      setFormData({ ...formData, additionalPassengers: updatedPassengers });
    } else {
      setFormData({
        ...formData,
        additionalPassengers: [
          ...formData.additionalPassengers,
          { name: nameInput },
        ],
      });
    }
    setOpen(false);
    setIsEditing(false);
    setPassengerIndex(null);
  };

  const handleDelete = (index) => {
    const updatedPassengers = formData.additionalPassengers.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, additionalPassengers: updatedPassengers });
  };

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponApplied(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlePayment = () => {
    if (
      !formData.mainPassenger.firstName ||
      !formData.mainPassenger.lastName ||
      !formData.mainPassenger.email ||
      !formData.mainPassenger.mobileNumber
    ) {
      toast.error("Please fill all the required fields");
      return;
    }
    let final_Amount = Number(payload.price) + 450;

    let data = {
      to: payload.to,
      from: payload.from,
      serviceType: "Flight",
      departure_date: payload.departureDate,
      arrival_date: payload.departureDate,
      departure_date_time: payload.flight_dep,
      arrival_date_time: payload.flight_arr,
      total_passenger: formData.additionalPassengers.length + 1,
      total_amount: final_Amount,
      mobileNumber: formData.mainPassenger.mobileNumber,
      passengerName:
        formData.mainPassenger.firstName +
        " " +
        formData.mainPassenger.lastName,
      dateOfBooking: new Date().toISOString().split("T")[0],
      email: formData.mainPassenger.email,
    };
    handleRazorPay(data, final_Amount);
  };

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="flight-checkout-info">
              <div className="flight-place">
                <h6>
                  {" "}
                  <span>
                    {payload.from.charAt(0).toUpperCase() +
                      payload.from.slice(1)}
                  </span>{" "}
                  <span>
                    <i className="bi bi-arrow-right-short"></i>
                  </span>{" "}
                  <span>
                    {payload.to.charAt(0).toUpperCase() + payload.to.slice(1)}
                  </span>{" "}
                </h6>
                <p>{payload.departureDate}</p>
              </div>
              <hr />
              <div className="flight-time-info">
                <div className="flight-name-box">
                  <img
                    src={`https://www.air.irctc.co.in/assets/img/flights-icon/${payload.logo}.png`}
                    width={32}
                    height={32}
                    alt=""
                  />
                  <h6>{payload.flightName}</h6>
                  <p>
                    {payload.flightNumber} <br />
                    <span>
                      {payload.cabinClass.charAt(0).toUpperCase() +
                        payload.cabinClass.slice(1)}
                    </span>
                  </p>
                </div>

                <div className="flight-detail-info">
                  <div className="flight-info1">
                    <h6>{payload.flight_dep}</h6>
                    <p>{payload.departureDate}</p>
                    <h5>{payload.origin_airport}</h5>
                  </div>
                  <div className="flight-info-took">
                    <span>
                      <i className="bi bi-clock"></i>
                    </span>
                    <p>{payload.flightTime}</p>
                  </div>
                  <div className="flight-info1">
                    <h6>{payload.flight_arr}</h6>
                    <p>{payload.departureDate}</p>
                    <h5>{payload.destination_airport}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="flight-policy mt-5">
              <div className="policy-heading">
                <h4>Cancellation refund policy</h4>
              </div>
              <div className="policy-content">
                <div
                  className="policy-question d-flex align-items-center"
                  onClick={() => togglePolicy(0)}
                  style={{ cursor: "pointer" }}
                >
                  <h6>Cancellation Policy</h6>
                  <span>
                    <i
                      className={`fa-solid fa-chevron-down ${
                        openPolicies[0] ? "rotate" : ""
                      }`}
                    ></i>
                  </span>
                </div>
                {openPolicies[0] && (
                  <div className="policy-answer">
                    <p>
                      <b>Within 24 Hours of Booking:</b> Customers may cancel
                      their flight booking within 24 hours of purchase without
                      incurring any cancellation fees, provided the booking was
                      made at least 7 days before the departure date. A full
                      refund will be issued to the original form of payment.
                    </p>
                    <p>
                      <b>After 24 Hours of Booking:</b> If the cancellation is
                      made after 24 hours of booking, the refund will be subject
                      to the fare rules associated with the ticket. Certain
                      fares, particularly discounted or promotional fares, may
                      be non-refundable.
                    </p>
                    <p>
                      <b>Last-Minute Cancellations:</b> Cancellations made
                      within 24 hours of the scheduled departure time are
                      generally non-refundable.
                    </p>
                  </div>
                )}
              </div>
              <hr />
              <div className="policy-content">
                <div
                  className="policy-question d-flex align-items-center"
                  onClick={() => togglePolicy(1)}
                  style={{ cursor: "pointer" }}
                >
                  <h6>Refund Policy</h6>
                  <span>
                    <i
                      className={`fa-solid fa-chevron-down ${
                        openPolicies[1] ? "rotate" : ""
                      }`}
                    ></i>
                  </span>
                </div>
                {openPolicies[1] && (
                  <div className="policy-answer">
                    <p>
                      <b>Within 24 Hours of Booking:</b> Customers may cancel
                      their flight booking within 24 hours of purchase without
                      incurring any cancellation fees, provided the booking was
                      made at least 7 days before the departure date. A full
                      refund will be issued to the original form of payment.
                    </p>
                    <p>
                      <b>After 24 Hours of Booking:</b> If the cancellation is
                      made after 24 hours of booking, the refund will be subject
                      to the fare rules associated with the ticket. Certain
                      fares, particularly discounted or promotional fares, may
                      be non-refundable.
                    </p>
                    <p>
                      <b>Last-Minute Cancellations:</b> Cancellations made
                      within 24 hours of the scheduled departure time are
                      generally non-refundable.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* 
                        <div className="guest-detail-box pt-5">
            <h4>Add-ons</h4>
      <p>
      You can add your <b>Add-ons</b> here if any
      </p>

      <form className="add-on-box">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckMeal" />
                      <label className="form-check-label" htmlFor="flexCheckMeal">
                      <i className="fa-solid fa-utensils"></i> Meal
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckBreakfast" />
                      <label className="form-check-label" htmlFor="flexCheckBreakfast">
                      <i className="fa-solid fa-mug-saucer"></i>  Breakfast
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckWifi" />
                      <label className="form-check-label" htmlFor="flexCheckWifi">
                      <i className="fa-solid fa-wifi"></i>  Wi-Fi
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckParking" />
                      <label className="form-check-label" htmlFor="flexCheckParking">
                      <i className="fa-solid fa-car"></i> Parking
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckLateCheckout" />
                      <label className="form-check-label" htmlFor="flexCheckLateCheckout">
                      <i className="fa-solid fa-bath"></i>  Bathtub
                      </label>
                    </div>
                  </div>
                </div>
              </form>

      </div> */}

            <div className="guest-detail-box pt-5">
              <h4>
                <i className="bi bi-luggage-fill me-2"></i> Add Extra Luggage
              </h4>
              <p>Baggage is 20% cheaper when pre-booked.</p>

              <div
                className="row btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary" for="btncheck1">
                    {" "}
                    <p>
                      Additional 3kg <br /> <span>₹ 350</span>{" "}
                    </p>{" "}
                  </label>
                </div>
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck2"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary" for="btncheck2">
                    {" "}
                    <p>
                      Additional 5kg <br /> <span>₹ 450</span>{" "}
                    </p>{" "}
                  </label>
                </div>
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck3"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary" for="btncheck3">
                    {" "}
                    <p>
                      Additional 10kg <br /> <span>₹ 550</span>{" "}
                    </p>{" "}
                  </label>
                </div>
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck4"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary" for="btncheck4">
                    {" "}
                    <p>
                      Additional 15kg <br /> <span>₹ 650</span>{" "}
                    </p>{" "}
                  </label>
                </div>
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck5"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary" for="btncheck5">
                    {" "}
                    <p>
                      Additional 20kg <br /> <span>₹ 650</span>{" "}
                    </p>{" "}
                  </label>
                </div>
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck6"
                    autocomplete="off"
                  />
                  <label className="btn btn-outline-primary" for="btncheck6">
                    {" "}
                    <p>
                      Additional 30kg <br /> <span>₹ 750</span>{" "}
                    </p>{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="guest-detail-box pt-5">
              <h4>Traveller Details</h4>
              <p>
                Booking details will be sent to the email address provided by
                Passenger
              </p>
              <div className="check-tab-box mt-4 mb-4">
                <button
                  className={activeTab === "Mr." ? "button-active" : ""}
                  onClick={() => handleTabClick("Mr.")}
                >
                  Mr.
                </button>
                <button
                  className={activeTab === "Mrs." ? "button-active" : ""}
                  onClick={() => handleTabClick("Mrs.")}
                >
                  Mrs.
                </button>
                <button
                  className={activeTab === "Ms." ? "button-active" : ""}
                  onClick={() => handleTabClick("Ms.")}
                >
                  Ms.
                </button>
              </div>
            </div>
            <form className="row guest-form pt-4">
              <div className="col-lg-6 mb-4">
                <TextField
                  name="firstName"
                  variant="outlined"
                  label="First Name"
                  fullWidth
                  value={formData.mainPassenger.firstName}
                  onChange={handleMainPassengerChange}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <TextField
                  name="lastName"
                  variant="outlined"
                  label="Last Name"
                  fullWidth
                  value={formData.mainPassenger.lastName}
                  onChange={handleMainPassengerChange}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <TextField
                  name="mobileNumber"
                  variant="outlined"
                  label="Enter Mobile Number"
                  type="number"
                  fullWidth
                  value={formData.mainPassenger.mobileNumber}
                  onChange={handleMainPassengerChange}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <TextField
                  name="email"
                  variant="outlined"
                  label="Enter Email"
                  type="email"
                  fullWidth
                  value={formData.mainPassenger.email}
                  onChange={handleMainPassengerChange}
                />
              </div>
            </form>

            <div className="add-guest-detail pt-3">
              <h4>Other Traveller Details</h4>
              <p>
                Booking details will be sent to the email address provided by
                Passenger
              </p>
              <button onClick={handleAddGuestClick}>ADD GUEST DETAIL</button>
            </div>

            {showDialog && (
              <div className="guest-dialog mt-3">
                <div className="check-tab-box mt-4 mb-3">
                  <button
                    className={guestGender === "Mr." ? "button-active" : ""}
                    onClick={() => setGuestGender("Mr.")}
                  >
                    Mr.
                  </button>
                  <button
                    className={guestGender === "Mrs." ? "button-active" : ""}
                    onClick={() => setGuestGender("Mrs.")}
                  >
                    Mrs.
                  </button>
                  <button
                    className={guestGender === "Ms." ? "button-active" : ""}
                    onClick={() => setGuestGender("Ms.")}
                  >
                    Ms.
                  </button>
                </div>
                <h4>Add Guest Name</h4>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Guest Name"
                />{" "}
                <br />
                <div className="save-guest-btn">
                  <button onClick={handleSaveGuest}>Save</button>
                </div>
              </div>
            )}

            {showDialog && (
              <div className="guest-dialog mt-3">
                <div className="check-tab-box mt-4 mb-3">
                  <button
                    className={guestGender === "Mr." ? "button-active" : ""}
                    onClick={() => setGuestGender("Mr.")}
                  >
                    Mr.
                  </button>
                  <button
                    className={guestGender === "Mrs." ? "button-active" : ""}
                    onClick={() => setGuestGender("Mrs.")}
                  >
                    Mrs.
                  </button>
                  <button
                    className={guestGender === "Ms." ? "button-active" : ""}
                    onClick={() => setGuestGender("Ms.")}
                  >
                    Ms.
                  </button>
                </div>
                <h4>Add Guest Name</h4>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Guest Name"
                />{" "}
                <br />
                <div className="save-guest-btn">
                  <button onClick={handleSaveGuest}>Save</button>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="pay-column-card">
              <h6>
                ₹ {payload.price} <span>/Total Price</span>
              </h6>

              <div className="amount-info-box mt-3">
                <p>You won’t be charged yet</p>
              </div>

              <div className="price-detail-box mt-3">
                <div className="breakdown-box">
                  <h5>Base Fare</h5>
                  <h6>₹ {payload.price}</h6>
                </div>
                <div className="breakdown-box">
                  <h5>Taxes & Fees</h5>
                  <h6>₹ {450}</h6>
                </div>
                <hr />
                <div className="total-price breakdown-box">
                  <h5>Total Price</h5>
                  <h6>₹ {Number(payload.price) + 450}</h6>
                </div>
              </div>
              <div className="amount-info-box mt-3">
                <button onClick={handlePayment}>Checkout</button>
              </div>
            </div>

            <div className="apply-coupon-box mt-4">
              <h4>Apply Your Coupon card</h4>
              <form className="coupon-box mt-4" onSubmit={handleApplyCoupon}>
                <input
                  type="text"
                  className="form-control"
                  value={couponCode}
                  onChange={handleCouponChange}
                />
                <button style={{ cursor: "pointer" }}>
                  {couponApplied ? "Applied" : "Apply"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flightcheckout;
