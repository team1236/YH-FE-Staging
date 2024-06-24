import React from 'react';
import { Link } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusAlertIcon from '@mui/icons-material/BusAlert';

const Sidenav = () => {
  return (
          <nav className="sidenav flex-column mt-3">
            <Link to="#" className="nav-link active">
              <FlightIcon className="nav-icon" /> Flights
            </Link>
            <Link to="#" className="nav-link">
              <HotelIcon className="nav-icon" /> Hotels
            </Link>
            <div className="nav-link dropdown">
              <Link to="#" className="drop-link">
                <DirectionsBusIcon className="nav-icon" />Transport <span className="badge">NEW</span>
              </Link>
              <div className="dropdown-content">
                <Link to="#" className="dropdown-item">
                  <DirectionsCarIcon className="nav-icon" /> Car
                </Link>
                <Link to="#" className="dropdown-item">
                  <BusAlertIcon className="nav-icon" /> Bus
                </Link>
              </div>
            </div>
            <Link to="/offer" className="nav-link">
              <LocalOfferIcon className="nav-icon" /> Offers
            </Link>
            <Link to="#" className="nav-link">
              <TripOriginIcon className="nav-icon" /> My Trips
            </Link>
            <Link to="#" className="nav-link">
              <ContactSupportIcon className="nav-icon" /> Support
            </Link>
          </nav>
  );
};

export default Sidenav;
