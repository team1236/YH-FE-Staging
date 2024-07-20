import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const Cabbookingdetail = () => {
  return (
    <>
    <div className="booking-card">
      <div className="card-heading">
        <div className='card-text'>
        <small>Booking Details</small>
        <h3>New Delhi to Lucknow (Bus)</h3>
        <div className='star-icon'>
          <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
          
        </div>
        </div>
        <div className='card-img'>
          <img src="intercity.png" alt="" />
        </div>
      </div>
      <div className='row check-details'>
<div className='check-margin col-4 col-lg-3'>
<h5>Departure Date</h5>
        <h3>24 July</h3>
        <h5>Wed, 11:00pm</h5>
</div>
<div className='check-margin col-4 col-lg-2'>
  <span>7:30 Hours</span>
</div>
<div className='check-margin col-4 col-lg-3'>
<h5>Est Arrival Time</h5>
        <h3>25 July</h3>
        <h5>Thu, 06:30am</h5>
</div>

<div className='check-margin col-12 col-lg-4'>
<h5>Passenger</h5>
        <h3>1 Cab & 4 Passenger</h3>
        <h5>4 Passenegr</h5>
</div>
      </div>
    </div>
    </>
  )
}

export default Cabbookingdetail