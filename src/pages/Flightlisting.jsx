import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { Link } from 'react-router-dom';

const Flightlisting = () => {
    const [priceRange, setPriceRange] = useState([500, 10000]);

    const handlePriceChange = (values) => setPriceRange(values);

    const renderCheckboxes = (labels) =>
        labels.map((label, index) => (
            <div className="check-filter" key={index}>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id={`flexCheck${label}`} />
                    <label className="form-check-label" htmlFor={`flexCheck${label}`}>{label}</label>
                </div>
                <span>(123)</span>
            </div>
        ));

    const renderFlights = () =>
        Array(4).fill().map((_, index) => (
            <div className="flight-column" key={index}>
                <div className="flight-heading">
                    <div className='flight-place'>
                        <h6><span>Australia</span> <i className="bi bi-arrow-right-short"></i> <span>Indonesia</span></h6>
                        <h4>$ 800</h4>
                    </div>
                    <div className="flight-btn">
                        <Link to="/flightcheckout"><button>Book Now</button></Link>
                    </div>
                </div>
                <div className="row flight-inner-row">
                    <div className="col-lg-1">
                        <div className="flight-name-box">
                            <img src="indigo.png" width={32} height={32} alt="IndiGo" />
                            <h6>IndiGo</h6>
                            <p>6E-6168<br /><span>Economy</span></p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="flight-info">
                            <h6>17:55</h6>
                            <p>Thu, 8 Aug 2024</p>
                            <h5>Sydney International Airport, Terminal 1, Australia</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="flight-time-took">
                            <i className="bi bi-clock"></i>
                            <p>1h 10min</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="flight-info">
                            <h6>17:55</h6>
                            <p>Thu, 8 Aug 2024</p>
                            <h5>Sydney International Airport, Terminal 1, Australia</h5>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="container pt-4 mt-2">
            <div className="list-heading">
                <div className="sort-content">
                    <h3>Best Flexible flight booking in Destinique Australia</h3>
                    <h6>20+ Flights Found in Sydney, Australia</h6>
                </div>
                <div className="sort-select">
                    <h6>Sort by:</h6>
                    <select className="form-select">
                        <option defaultValue="Popularity">Popularity</option>
                        <option value="1">Rating</option>
                        <option value="2">Star</option>
                        <option value="3">View</option>
                    </select>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-lg-3">
                    <div className="filter-column">
                        <div className="availability-filter">
                            <h5>Availability</h5>
                            <hr />
                            <form className="filter-form">
                                {['Leaving From', 'Going To', 'Date', 'Departure Time'].map((label, index) => (
                                    <div className="mb-3" key={index}>
                                        <label>{label}</label>
                                        <input type={label === 'Date' ? 'date' : label === 'Departure Time' ? 'time' : 'text'} className="form-control" placeholder={label === 'Leaving From' ? 'Sydney, Australia' : label === 'Going To' ? 'Goa, India' : ''} />
                                    </div>
                                ))}
                                <div className="avail-btn">
                                    <button>Check Availability</button>
                                </div>
                            </form>
                        </div>
                        <div className="availability-filter">
                            <h5>Price</h5>
                            <hr />
                            <form className="filter-form">
                                <label>AUD {priceRange[0]} - AUD {priceRange[1]}</label>
                                <div className="range-input">
                                    <ReactSlider
                                        className="horizontal-slider"
                                        thumbClassName="thumb"
                                        trackClassName="track"
                                        min={500}
                                        max={10000}
                                        value={priceRange}
                                        onChange={handlePriceChange}
                                        minDistance={100}
                                    />
                                </div>
                            </form>
                        </div>
                        {['Day', 'Airline', 'Cabin'].map((title, index) => (
                            <div className="availability-filter" key={index}>
                                <h5>{title}</h5>
                                <hr />
                                <form className="filter-form">
                                    {renderCheckboxes(title === 'Day' ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] : title === 'Airline' ? ['Air Asia', 'Emirates', 'Indigo', 'Air Asia X'] : ['Economy', 'Basic Economy', 'Business', 'Mixed'])}
                                </form>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-9 pt-2">{renderFlights()}</div>
            </div>
        </div>
    );
};

export default Flightlisting;
