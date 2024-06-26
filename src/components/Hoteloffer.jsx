import React from 'react'

const Hoteloffer = () => {
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
      </div>
    </>
  )
}

export default Hoteloffer