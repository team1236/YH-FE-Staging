import React from 'react'
import Listingsearch from '../components/Listingsearch'
import Listingfilter from '../components/Listingfilter'
import Hotellistcard from '../components/Hotellistcard'

const Hotellisting = () => {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9">
                <Listingsearch/>
            </div>
            <div className="col-lg-12">
                <Listingfilter/>
                <Hotellistcard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hotellisting