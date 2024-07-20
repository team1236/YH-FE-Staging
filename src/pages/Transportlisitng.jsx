import React from 'react'
import Transportlistcard from '../components/Transportlistcard'
import Cabsearch from '../components/Cabsearch'
import Cabcoupon from '../components/Cabcoupon'

const Transportlisitng = () => {
  return (
    <>
    <div className="container pt-3">
        <div className="row">
            <div className="col-lg-12 pb-5">
               <Cabsearch/>
            </div>
        <div className="col-lg-3 pt-1">
            <Cabcoupon/>
</div>
            <div className="col-lg-9">
                <Transportlistcard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Transportlisitng