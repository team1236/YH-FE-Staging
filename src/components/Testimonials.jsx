import React, { useState, useEffect } from "react";
import { flightTestimonial } from "../store/api/flightPage";
import { Flight_Testimonial } from "./Shimmer";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const testimonialsApi = async () => {
    const getData = await flightTestimonial();
    setTestimonials(getData.data.findData);
  };

  useEffect(() => {
    Promise.allSettled([testimonialsApi()]);
  }, []);

  return (
    <section className="testimonials pt-5">
      <h2 className="section-title">Testimonials</h2>
      <div className="row">
        {testimonials.length > 0
          ? testimonials.map((testimonial) => (
              <div key={testimonial._id} className="col-lg-4 col-md-6">
                <div className="testimonial-box">
                  <div className="testimonial-content">
                    <p className="quote">{testimonial.description}</p>
                    <p className="name">{testimonial.title}</p>
                  </div>
                  <div className="testimonial-image">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </div>
              </div>
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="testimonial-box">
                  <Flight_Testimonial key={index} />
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Testimonials;
