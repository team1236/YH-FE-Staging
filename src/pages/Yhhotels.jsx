import React from 'react'
import Sidenav from '../components/Sidenav'
import Yhhotellist from '../components/Yhhotellist'
const Yhhotels = () => {
  return (
    <>
    <div className="container mt-4">
  <div className="row">
    <div className="col-lg-2">
      <Sidenav />
    </div>
    <div className="col-lg-10">
        <Yhhotellist/>
    </div>
  </div>
</div>
</>
  )
}

export default Yhhotels