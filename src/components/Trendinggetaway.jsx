import React from 'react';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';

const Trendinggetaway = () => {
  return (
    <>
      <div className="row getaway-row pt-5">
      <div className="destination-heading mb-2">
        <h4>Trending getaways!</h4>
      </div>
        <div className="col-lg-4 getaway-column">
          <div className="image-group">
            <img src="goa1.jpg" alt="Image 1" className="image" />
            <img src="goa2.jpg" alt="Image 2" className="image" />
          </div>
          <div className="image-bottom">
            <img src="goa.png" alt="Image 3" className="image" />
          </div>
          <div className='getaway-content pt-2'>
            <h5>Best Places to Visit In Maldives</h5>
            <h6><span className='me-1'> <EmojiTransportationOutlinedIcon/> </span>  2301 properties available </h6>
          </div>
        </div>
        <div className="col-lg-4 getaway-column">
          <div className="image-group">
            <img src="kasol.png" alt="Image 4" className="image" />
            <img src="kasol2.jpg" alt="Image 5" className="image" />
          </div>
          <div className="image-bottom">
            <img src="kasol1.jpg" alt="Image 6" className="image" />
          </div>
          <div className='getaway-content pt-2'>
            <h5>Get Close to Nature in Kasol</h5>
            <h6><span className='me-1'> <EmojiTransportationOutlinedIcon/> </span>  801 properties available </h6>
          </div>
        </div>
        <div className="col-lg-4 getaway-column">
          <div className="image-group">
            <img src="mussorie.jpg" alt="Image 7" className="image" />
            <img src="mussorie2.jpg" alt="Image 8" className="image" />
          </div>
          <div className="image-bottom">
            <img src="mussorie1.jpg" alt="Image 9" className="image" />
          </div>
          <div className='getaway-content pt-2'>
            <h5>Enjoy Snowfall in  Mussoorie</h5>
            <h6><span className='me-1'> <EmojiTransportationOutlinedIcon/> </span>  1200 properties available </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendinggetaway;
