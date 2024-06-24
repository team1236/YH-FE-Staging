import React, { useState, useEffect } from 'react';

const Offercard = () => {
  const [activeTab, setActiveTab] = useState('Flights');

  useEffect(() => {
    const handleCopyCode = (e) => {
      const cpnCode = e.target.previousElementSibling;
      navigator.clipboard.writeText(cpnCode.innerHTML);
      e.target.innerHTML = "COPIED";
      setTimeout(() => {
        e.target.innerHTML = "COPY CODE";
      }, 3000);
    };

    const cpnBtns = document.querySelectorAll('.cpnBtn');
    cpnBtns.forEach(btn => btn.addEventListener('click', handleCopyCode));

    return () => {
      cpnBtns.forEach(btn => btn.removeEventListener('click', handleCopyCode));
    };
  }, []);

  const renderOfferCards = () => {
    switch (activeTab) {
      case 'Flights':
        return (
          <>
            <div className="coupon-card flight-card">
              <h3>10% off on all flights using ABC Credit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">FLIGHT10</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 30Jun, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card flight-card">
              <h3>15% off on international flights using XYZ Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTL15</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Jul, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card flight-card">
              <h3>15% off on international flights using XYZ Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTL15</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Jul, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card flight-card">
              <h3>10% off on all flights using ABC Credit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">FLIGHT10</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 30Jun, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card flight-card">
              <h3>15% off on international flights using XYZ Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTL15</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Jul, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card flight-card">
              <h3>15% off on international flights using XYZ Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTL15</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Jul, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
          </>
        );
      case 'Hotels':
        return (
          <>
            <div className="coupon-card hotel-card">
              <h3>20% off on hotel bookings using DEF Credit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">HOTEL20</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 31Dec, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card hotel-card">
              <h3>25% off on luxury hotels using GHI Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">LUX25</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 01Nov, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card hotel-card">
              <h3>25% off on luxury hotels using GHI Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">LUX25</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 01Nov, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card hotel-card">
              <h3>20% off on hotel bookings using DEF Credit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">HOTEL20</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 31Dec, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card hotel-card">
              <h3>25% off on luxury hotels using GHI Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">LUX25</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 01Nov, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card hotel-card">
              <h3>25% off on luxury hotels using GHI Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">LUX25</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 01Nov, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
          </>
        );
      case 'Transport':
        return (
          <>
            <div className="coupon-card transport-card">
              <h3>20% flat off on all rides within the city using HDFC Credit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">STEALDEAL20</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 20Dec, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card transport-card">
              <h3>30% off on intercity rides using JKL Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTERCITY30</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Aug, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card transport-card">
              <h3>30% off on intercity rides using JKL Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTERCITY30</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Aug, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card transport-card">
              <h3>20% flat off on all rides within the city using HDFC Credit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">STEALDEAL20</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 20Dec, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card transport-card">
              <h3>30% off on intercity rides using JKL Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTERCITY30</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Aug, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="coupon-card transport-card">
              <h3>30% off on intercity rides using JKL Debit Card</h3>
              <div className="coupon-row">
                <span className="cpnCode">INTERCITY30</span>
                <span className="cpnBtn">Copy Code</span>
              </div>
              <p>Valid Till: 15Aug, 2024</p>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="offer-container mt-4">
      <div className="tabs offer-tabs">
        <button
          className={activeTab === 'Flights' ? 'offer-active' : ''}
          onClick={() => setActiveTab('Flights')}
        >
          Flights
        </button>
        <button
          className={activeTab === 'Hotels' ? 'offer-active' : ''}
          onClick={() => setActiveTab('Hotels')}
        >
          Hotels
        </button>
        <button
          className={activeTab === 'Transport' ? 'offer-active' : ''}
          onClick={() => setActiveTab('Transport')}
        >
          Transport
        </button>
      </div>
      <div className="offer-cards-box pt-4">
        {renderOfferCards()}
      </div>
    </div>
  );
}

export default Offercard;
