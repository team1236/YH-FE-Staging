import React from 'react'
import SupportCard from '../components/SupportCard';
import Sidenav from '../components/Sidenav';
import WhyChooseUs from '../components/WhyChooseUs';
import OurPartners from '../components/Ourpartners';
function SupportPage() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            {/* <Hotelsearch /> */}
            <SupportCard />
            <WhyChooseUs />
            <OurPartners/>
            {/* <Hotelbanner /> */}
            {/* <Hoteloffer /> */}
            {/* <Populardestination /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
