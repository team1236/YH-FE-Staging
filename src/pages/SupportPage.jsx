import React from 'react'
import SupportCard from '../components/SupportCard';
import Sidenav from '../components/Sidenav';
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
