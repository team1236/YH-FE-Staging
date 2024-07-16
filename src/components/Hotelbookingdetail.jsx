import React from 'react'

const Hotelbookingdetail = () => {
  return (
    <>
    <div className="booking-card">
    <article className="card fl-left">
      <section className="date">
        <div>
          <span>23</span><span>feb</span>
        </div>
      </section>
      <section className="card-cont">
        <small>Booking Details</small>
        <h3>California Sunset/Twilight Boat Cruise</h3>
        <div className="even-date">
         <i className="fa fa-calendar"></i>
         <time>
           <span>Check-In 18 July 08:55pm to 12:00 am</span>
           <span>Check-Out 20 July 08:55pm to 12:00 am</span>
         </time>
        </div>
        <div className="even-info">
          <p>
            1 Room, 2 Guests
          </p>
        </div>
        <a href="#">Pending</a>
      </section>
    </article>
    </div>
    </>
  )
}

export default Hotelbookingdetail