import React from 'react'
import Detailpaybox from '../components/Detailpaybox'
import Hotelbookingdetail from '../components/Hotelbookingdetail'
import Selectedroomdetail from '../components/Selectedroomdetail'
import Guestdetail from '../components/Guestdetail'

const Hotelcheckoutpage = () => {
  return (
    <div className="container mt-4 pt-4">
    <div className="row justify-content-between">
        <div className="col-lg-8">
       <Hotelbookingdetail/>
       <Selectedroomdetail/>
       <Guestdetail/>
        </div>
        <div className="col-lg-4">
            <Detailpaybox/>
        </div>
    </div>
   </div>
  )
}

export default Hotelcheckoutpage