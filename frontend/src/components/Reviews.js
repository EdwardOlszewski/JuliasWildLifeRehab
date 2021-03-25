import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Stars from '../components/Stars'
import DateFormat from '../components/DateFormat'

const Reviews = ({ reviews }) => {
  return (
    <ListGroup variant='flush' style={{ textAlign: 'left' }}>
      {reviews.map((review) => (
        <ListGroup.Item key={review.author}>
          <Stars value={review.numStars} />
          <p>{review.review}</p>

          <p style={{ opacity: '80%' }}>
            written by {review.author},{' '}
            <DateFormat oldDate={review.createdAt} />
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Reviews
