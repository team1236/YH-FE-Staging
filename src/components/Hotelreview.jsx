import React from 'react';
import { IconButton } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
  {
    name: 'John Doe',
    date: 'July 15, 2024',
    rating: 4,
    review: 'Great hotel, very clean and friendly staff. Would definitely come back!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Smith',
    date: 'July 14, 2024',
    rating: 5,
    review: 'Amazing experience! The service was top-notch and the amenities were fantastic.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Alice Johnson',
    date: 'July 13, 2024',
    rating: 3,
    review: 'Good location but the room was a bit small. Overall, a decent stay.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Mike Wilson',
    date: 'July 12, 2024',
    rating: 5,
    review: 'Perfect! Everything was just as expected, and the food was too great.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Emily Davis',
    date: 'July 11, 2024',
    rating: 4,
    review: 'Very nice hotel with friendly staff. The private pool was a big plus.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'David Brown',
    date: 'July 10, 2024',
    rating: 2,
    review: 'The location was good, but the service could be much more better.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const HotelReview = () => {
  return (
    <div className="hotel-review-container mt-4">
        <h3>Reviews</h3>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <div className="review-details">
                <h6 className="review-name">{review.name}</h6>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <div className="review-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i}> <StarIcon/> </span>
              ))}
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelReview;
