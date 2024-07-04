import React, { useEffect } from 'react';


const Transportoffer = () => {

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
    <div className="offer-cards-box pt-5">
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
    </div>
    </>
  )
}

export default Transportoffer