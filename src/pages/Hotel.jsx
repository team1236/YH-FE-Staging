import React from 'react'
import Sidenav from '../components/Sidenav'
import Hotelsearch from '../components/Hotelsearch'
import Populardestination from "../components/Populardestination";
import Hoteloffer from '../components/Hoteloffer';
import Hotelbanner from '../components/Hotelbanner';
import Trendinggetaway from '../components/Trendinggetaway';
import Hoteldeal from '../components/Hoteldeal';
import WhyChooseUs from "../components/WhyChooseUs";


const Hotel = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            <Hotelsearch />
            <Hotelbanner />
            <Hoteloffer />
            <Populardestination />
            <Hoteldeal />
            <Trendinggetaway />
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel