import React from 'react'
import Cabpaybox from '../components/Cabpaybox';
import Cabbookingdetail from '../components/Cabbookingdetail';
import Cabpassengerdetail from '../components/Cabpassengerdetail';

const Cabcheckout = () => {
  return (
    <div className="container mt-4 pt-4">
    <div className="row justify-content-between">
        <div className="col-lg-8">
          <Cabbookingdetail/>
          <Cabpassengerdetail/>
        </div>
        <div className="col-lg-4">
            <Cabpaybox/>
        </div>
    </div>
   </div>
  )
}

export default Cabcheckout;