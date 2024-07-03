import React from 'react'
import MyTripCard from '../components/MyTripCard'
import Sidenav from '../components/Sidenav';
import WhyChooseUs from '../components/WhyChooseUs';

function MyTripService() {
  return (
    <div className="app-container">
      <main className="app-main">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-2">
              <Sidenav />
            </div>
            <div className="col-lg-10">
              <MyTripCard/>
              <WhyChooseUs />
              {/* <Newsletter/> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyTripService;
