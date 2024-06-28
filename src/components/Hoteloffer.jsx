import React, { useEffect } from 'react';

const Hoteloffer = () => {
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

  return (
    <>
      <div className="offer-heading pt-5">
        <h4>Hotel Coupon</h4>
      </div>
      <div className="offer-cards-box">
        <div className="coupon-card hotel-card">
          <h3>20% off on hotel bookings using DEF Credit Card</h3>
          <div className="coupon-row">
            <span className="cpnCode">HOTEL20</span>
            <button className="cpnBtn">Copy Code</button>
          </div>
          <p>Valid Till: 31 Dec, 2024</p>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div className="coupon-card hotel-card">
          <h3>25% off on luxury hotels using GHI Debit Card</h3>
          <div className="coupon-row">
            <span className="cpnCode">LUX25</span>
            <button className="cpnBtn">Copy Code</button>
          </div>
          <p>Valid Till: 01 Nov, 2024</p>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div className="coupon-card hotel-card">
          <h3>30% off on resort stays using JKL Credit Card</h3>
          <div className="coupon-row">
            <span className="cpnCode">RESORT30</span>
            <button className="cpnBtn">Copy Code</button>
          </div>
          <p>Valid Till: 15 Dec, 2024</p>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        
      </div>
    </>
  );
};

export default Hoteloffer;
