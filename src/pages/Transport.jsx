import React from 'react'
import Sidenav from '../components/Sidenav'
import Transportsearch from '../components/Transportsearch'
import Transportoffer from '../components/Transportoffer'

const Transport = () => {
  return (
    <>
          <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2">
            <Sidenav />
          </div>
          <div className="col-lg-10">
            <Transportsearch/>
            <Transportoffer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transport