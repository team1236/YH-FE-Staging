import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusAlertIcon from '@mui/icons-material/BusAlert';

const Sidenav = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveTab('flights');
    } else if (path.includes('offer')) {
      setActiveTab('offers');
    } else if (path.includes('hotels')) {
      setActiveTab('hotels');
    } else if (path.includes('car')) {
      setActiveTab('car');
    } else if (path.includes('bus')) {
      setActiveTab('bus');
    } else if (path.includes('trips')) {
      setActiveTab('trips');
    } else if (path.includes('support')) {
      setActiveTab('support');
    }
  }, [location]);

  return (
    <nav className="sidenav flex-column mt-3">
      <Link
        to="/"
        className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
        onClick={() => setActiveTab('flights')}
      >
        <FlightIcon className="nav-icon" /> Flights
      </Link>
      <Link
        to="/hotels"
        className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`}
        onClick={() => setActiveTab('hotels')}
      >
        <HotelIcon className="nav-icon" /> Hotels
      </Link>
      <div className="nav-link dropdown">
        <Link to="#" className="drop-link">
          <DirectionsBusIcon className="nav-icon" /> Transport{' '}
          <span className="badge">NEW</span>
        </Link>
        <div className="dropdown-content">
          <Link
            to="/car"
            className={`dropdown-item ${activeTab === 'car' ? 'active' : ''}`}
            onClick={() => setActiveTab('car')}
          >
            <DirectionsCarIcon className="nav-icon" /> Car
          </Link>
          <Link
            to="/bus"
            className={`dropdown-item ${activeTab === 'bus' ? 'active' : ''}`}
            onClick={() => setActiveTab('bus')}
          >
            <BusAlertIcon className="nav-icon" /> Bus
          </Link>
        </div>
      </div>
      <Link
        to="/offer"
        className={`nav-link ${activeTab === 'offers' ? 'active' : ''}`}
        onClick={() => setActiveTab('offers')}
      >
        <LocalOfferIcon className="nav-icon" /> Offers
      </Link>
      <Link
        to="/trips"
        className={`nav-link ${activeTab === 'trips' ? 'active' : ''}`}
        onClick={() => setActiveTab('trips')}
      >
        <TripOriginIcon className="nav-icon" /> My Trips
      </Link>
      <Link
        to="/support"
        className={`nav-link ${activeTab === 'support' ? 'active' : ''}`}
        onClick={() => setActiveTab('support')}
      >
        <ContactSupportIcon className="nav-icon" /> Support
      </Link>
    </nav>
  );
};

export default Sidenav;
