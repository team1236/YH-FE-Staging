import React from 'react'
import Hoteldetailimage from '../components/Hoteldetailimage'
import Hotelcontent from '../components/Hotelcontent'
import HotelReview from '../components/Hotelreview'
import Hotelsuggest from '../components/Hotelsuggest'
import Detailselectroom from '../components/Detailselectroom'

const Hoteldetail = () => {
  return (
    <>
    <div className="container pt-4">
        <div className="row justify-content-between">
            <div className="col-lg-12 ">
                <Hoteldetailimage/>
            </div>
            <div className="col-lg-7">
              <Hotelcontent/>
            </div>
            <div className="col-lg-4">
              <Detailselectroom/>
            </div>
            <div className="col-lg-12">
              <HotelReview/>
              <Hotelsuggest/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hoteldetail