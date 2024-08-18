import React, { useState } from 'react';

const Flightcheckout = () => {

    const [openPolicies, setOpenPolicies] = useState([false, false]);

    const togglePolicy = (index) => {
        setOpenPolicies(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const [activeTab, setActiveTab] = useState('Mr.');
    const [showDialog, setShowDialog] = useState(false);
    const [guestName, setGuestName] = useState('');
    const [guestGender, setGuestGender] = useState('Mr.');
    const [guests, setGuests] = useState([]);




    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };


    const handleAddGuestClick = () => {
        setShowDialog(true);
    };

    const handleSaveGuest = () => {
        setGuests([...guests, { name: guestName, gender: guestGender }]);
        setGuestName('');
        setGuestGender('Mr.');
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

    const handleCouponChange = (event) => {
        setCouponCode(event.target.value);
      };
    
      const handleApplyCoupon = (e) => {
        e.preventDefault();
        setCouponApplied(true);
      };

  return (
    <>

<div className="container pt-5 pb-5">
    <div className="row">
        <div className="col-lg-8">

<div className="flight-checkout-info">
<div className='flight-place'>
            <h6> <span>Australia</span> <span><i className="bi bi-arrow-right-short"></i></span> <span>Indonesia</span> </h6>
            <p>Thu, 8 Aug</p>
        </div>
        <hr />
<div className="flight-time-info">
<div className="flight-name-box">
                <img src="indigo.png" width={32} height={32} alt="" />
                <h6>IndiGo</h6>
                <p>6E-6168 <br />
                <span>Economy</span></p>
            </div>

            <div className="flight-detail-info">
            <div className="flight-info1">
                    <h6>17:55</h6>
                    <p>Thu, 8 Aug 2024</p>
                    <h5>Sydney International Airport,
                    Terminal 1, Australia</h5>
            </div>
            <div className="flight-info-took">
                <span><i className="bi bi-clock"></i></span>
                <p>1h 10min</p>
            </div>
            <div className="flight-info1">
                    <h6>17:55</h6>
                    <p>Thu, 8 Aug 2024</p>
                    <h5>Sydney International Airport,
                    Terminal 1, Australia</h5>
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
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h6>Cancellation Policy</h6>
                                    <span>
                                        <i className={`fa-solid fa-chevron-down ${openPolicies[0] ? 'rotate' : ''}`}></i>
                                    </span>
                                </div>
                                {openPolicies[0] && (
                                    <div className="policy-answer">
                                        <p><b>Within 24 Hours of Booking:</b> Customers may cancel their flight booking within 24 hours of purchase without incurring any cancellation fees, provided the booking was made at least 7 days before the departure date. A full refund will be issued to the original form of payment.</p>
                                        <p><b>After 24 Hours of Booking:</b> If the cancellation is made after 24 hours of booking, the refund will be subject to the fare rules associated with the ticket. Certain fares, particularly discounted or promotional fares, may be non-refundable.</p>
                                        <p><b>Last-Minute Cancellations:</b> Cancellations made within 24 hours of the scheduled departure time are generally non-refundable.</p>
                                    </div>
                                )}
                            </div>
                            <hr />
                            <div className="policy-content">
                                <div 
                                    className="policy-question d-flex align-items-center" 
                                    onClick={() => togglePolicy(1)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h6>Refund Policy</h6>
                                    <span>
                                        <i className={`fa-solid fa-chevron-down ${openPolicies[1] ? 'rotate' : ''}`}></i>
                                    </span>
                                </div>
                                {openPolicies[1] && (
                                    <div className="policy-answer">
                                        <p><b>Within 24 Hours of Booking:</b> Customers may cancel their flight booking within 24 hours of purchase without incurring any cancellation fees, provided the booking was made at least 7 days before the departure date. A full refund will be issued to the original form of payment.</p>
                                        <p><b>After 24 Hours of Booking:</b> If the cancellation is made after 24 hours of booking, the refund will be subject to the fare rules associated with the ticket. Certain fares, particularly discounted or promotional fares, may be non-refundable.</p>
                                        <p><b>Last-Minute Cancellations:</b> Cancellations made within 24 hours of the scheduled departure time are generally non-refundable.</p>
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
            <h4><i className="bi bi-luggage-fill me-2"></i> Add Extra Luggage</h4>
      <p>
      Baggage is 20% cheaper when pre-booked.
      </p>

      <div className="row btn-group" role="group" aria-label="Basic checkbox toggle button group">
<div className="col-lg-3">
<input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btncheck1"> <p>Additional 3kg <br /> <span>$1,515</span> </p> </label>
</div>
<div className="col-lg-3">
<input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btncheck2"> <p>Additional 5kg <br /> <span>$2,515</span> </p> </label>
</div>
<div className="col-lg-3">
<input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btncheck3"> <p>Additional 10kg <br /> <span>$4,515</span> </p> </label>
</div>
<div className="col-lg-3">
<input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btncheck4"> <p>Additional 15kg <br /> <span>$7,515</span> </p> </label>
</div>
<div className="col-lg-3">
<input type="checkbox" className="btn-check" id="btncheck5" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btncheck5"> <p>Additional 20kg <br /> <span>$14,515</span> </p> </label>
</div>
<div className="col-lg-3">
<input type="checkbox" className="btn-check" id="btncheck6" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btncheck6"> <p>Additional 30kg <br /> <span>$20,515</span> </p> </label>
</div>
</div>

      </div>


      <div className="guest-detail-box pt-5">
            <h4>Traveller Details</h4>
      <p>
        Booking details will be sent to the email address provided by Passenger
      </p>
      <div className="check-tab-box mt-4 mb-4">
      <button
          className={activeTab === 'Mr.' ? 'button-active' : ''}
          onClick={() => handleTabClick('Mr.')}
        >
          Mr.
        </button>
        <button
          className={activeTab === 'Mrs.' ? 'button-active' : ''}
          onClick={() => handleTabClick('Mrs.')}
        >
          Mrs.
        </button>
        <button
          className={activeTab === 'Ms.' ? 'button-active' : ''}
          onClick={() => handleTabClick('Ms.')}
        >
          Ms.
        </button>
      </div>
            </div>
            <form className="row passenger-row">
                            <div className="col-lg-6">
                                <div className="input-container">
                                    <input type="text" className="form-control" placeholder=" " />
                                    <label>First Name</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-container">
                                    <input type="text" className="form-control" placeholder=" " />
                                    <label>Last Name</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-container">
                                    <input type="text" className="form-control" placeholder=" " />
                                    <label>Middle Name</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-container">
                                    <input type="text" className="form-control" placeholder=" " />
                                    <label>Surname</label>
                                </div>
                            </div>
                        </form>

                        <div className="guest-list">
                            {guests.map((guest, index) => (
                                <div key={index} className="guest-item">
                                    <p>{guest.gender} {guest.name}</p>
                                    <button onClick={() => handleEditGuest(index)}><i className="bi bi-pencil-square"></i></button>
                                    <button onClick={() => handleDeleteGuest(index)}><i className="bi bi-trash3-fill"></i></button>
                                </div>
                            ))}
                        </div>



                        <div className="add-guest-detail pt-3">
                            <h4>Other Traveller Details</h4>
                            <p>Booking details will be sent to the email address provided by Passenger</p>
                            <button onClick={handleAddGuestClick}>ADD GUEST DETAIL</button>
                        </div>



                        {showDialog && (

                            <div className="guest-dialog mt-3">

<div className="check-tab-box mt-4 mb-3">
                                    <button
                                        className={guestGender === 'Mr.' ? 'button-active' : ''}
                                        onClick={() => setGuestGender('Mr.')}
                                    >
                                        Mr.
                                    </button>
                                    <button
                                        className={guestGender === 'Mrs.' ? 'button-active' : ''}
                                        onClick={() => setGuestGender('Mrs.')}
                                    >
                                        Mrs.
                                    </button>
                                    <button
                                        className={guestGender === 'Ms.' ? 'button-active' : ''}
                                        onClick={() => setGuestGender('Ms.')}
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
                                /> <br />
                                <div className='save-guest-btn'>
 <button onClick={handleSaveGuest}>Save</button>
                                </div>

                            </div>
                        )}

        </div>
        <div className="col-lg-4">
        <div className="pay-column-card">
            <h6>$575 <span>/Total Price</span></h6>


<div className="amount-info-box mt-3">
    <p>You won’t be charged yet</p>
</div>

              <div className="price-detail-box mt-3">
          <div className="breakdown-box">
            <h5>
            $79 x 7 nights
            </h5>
            <h6>
            $555
            </h6>
          </div>
          <div className="breakdown-box">
            <h5>Cleaning fee</h5>
            <h6>$62</h6>
          </div>
          <div className="breakdown-box">
            <h5>Service Fee</h5>
            <h6>$83</h6>
          </div>
            <div className="breakdown-box">
              <h5>Occupancy taxes and fees</h5>
              <h6>$23 </h6>
            </div>
          <hr />
          <div className="total-price breakdown-box">
            <h5>Total Price</h5>
            <h6>
            $701
            </h6>
          </div>
        </div>
        <div className="amount-info-box mt-3">
    <button>Checkout</button>
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
  )
}

export default Flightcheckout