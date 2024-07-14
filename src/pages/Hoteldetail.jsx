import React from 'react'
import Hoteldetailimage from '../components/Hoteldetailimage'
import Hotelcontent from '../components/Hotelcontent'
import Detailpaybox from '../components/Detailpaybox'

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
              <Detailpaybox/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hoteldetail