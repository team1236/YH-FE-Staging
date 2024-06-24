import React from 'react'
import Sidenav from '../components/Sidenav'
import Offercard from '../components/Offercard'

const Offer = () => {
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-2">
          <Sidenav/>
        </div>
        <div className="col-lg-10">
          <Offercard/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Offer