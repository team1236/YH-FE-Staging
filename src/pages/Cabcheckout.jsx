import React from 'react'
import Cabpaybox from '../components/Cabpaybox';

const Cabcheckout = () => {
  return (
    <div className="container mt-4 pt-4">
    <div className="row justify-content-between">
        <div className="col-lg-8">
        </div>
        <div className="col-lg-4">
            <Cabpaybox/>
        </div>
    </div>
   </div>
  )
}

export default Cabcheckout;