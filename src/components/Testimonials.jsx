import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et egestas ultrices.',
      imageUrl: 'test.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageUrl: 'test.jpg',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      quote: 'Fusce mollis ultricies lorem, ac varius nunc gravida a. Vivamus nec maximus lectus.',
      imageUrl: 'test.jpg',
    }
  ];

  return (
    <section className="testimonials pt-5">
        <h2 className="section-title">Testimonials</h2>
        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-box">
                <div className="testimonial-content">
                  <p className="quote">{testimonial.quote}</p>
                  <p className="name">{testimonial.name}</p>
                </div>
                <div className="testimonial-image">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="img-fluid rounded-circle" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Testimonials;
