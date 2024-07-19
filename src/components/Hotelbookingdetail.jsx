import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const Hotelbookingdetail = () => {
  return (
    <>
    <div className="booking-card">
      <div className="card-heading">
        <div className='card-text'>
        <small>Booking Details</small>
        <h3>California Sunset/Twilight Boat Cruise</h3>
        <div className='star-icon'>
          <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
          
        </div>
        </div>
        <div className='card-img'>
          <img src="kasol2.jpg" alt="" />
        </div>
      </div>
      <div className='row check-details'>
<div className='check-margin col-4 col-lg-3'>
<h5>Check-in</h5>
        <h3>24 July</h3>
        <h5>Wed, 12:00pm</h5>
</div>
<div className='check-margin col-4 col-lg-2'>
  <span>2 Night</span>
</div>
<div className='check-margin col-4 col-lg-3'>
<h5>Check-out</h5>
        <h3>26 July</h3>
        <h5>Wed, 12:00pm</h5>
</div>

<div className='check-margin col-12 col-lg-4'>
<h5>Rooms & Guests</h5>
        <h3>2 Room & 4 Guest</h3>
        <h5>2 Adults, 2 Children</h5>
</div>
      </div>
    </div>
    </>
  )
}

export default Hotelbookingdetail