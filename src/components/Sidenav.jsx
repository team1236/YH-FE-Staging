import React from 'react';
import { Link } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const Sidenav = () => {
  return (
    <div className="container pt-4">
  <div className="row">
    <div className="col-lg-2">
    <nav className="sidenav flex-column mt-3">
        <Link to="#" className="nav-link active">
          <FlightIcon className="nav-icon" /> Flights
        </Link>
        <Link to="#" className="nav-link">
          <HotelIcon className="nav-icon" /> Hotels
        </Link>
        <Link to="#" className="nav-link">
          <DirectionsBusIcon className="nav-icon" /> Bus <span className="badge bg-primary">NEW</span>
        </Link>
        <Link to="#" className="nav-link">
          <LocalOfferIcon className="nav-icon" /> Offers
        </Link>
        <Link to="#" className="nav-link">
          <TripOriginIcon className="nav-icon" /> My Trips
        </Link>
        <Link to="#" className="nav-link">
          <ContactSupportIcon className="nav-icon" /> Support
        </Link>
      </nav>
    </div>
  </div>
    </div>
  );
};

export default Sidenav;
