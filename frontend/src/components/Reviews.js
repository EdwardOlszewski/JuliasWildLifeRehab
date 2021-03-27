import React from 'react'
import { useDispatch } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import Stars from '../components/Stars'
import DateFormat from '../components/DateFormat'
import { Button } from 'react-bootstrap'
import { reviewDelete } from '../actions/reviewActions'

const Reviews = ({ reviews, user }) => {
  // Assign useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(reviewDelete(id))
    }
  }

  return (
    <ListGroup variant='flush' style={{ textAlign: 'left' }}>
      {reviews.map((review) => (
        <ListGroup.Item key={review._id}>
          <Stars value={review.numStars} />
          <p>{review.review}</p>
          <p style={{ opacity: '80%' }}>
            written by {review.author},{' '}
            <DateFormat oldDate={review.createdAt} />
          </p>
          {user && user.isAdmin ? (
            <Button
              className='trash-btn'
              onClick={() => deleteHandler(review._id)}
            >
              <i className='fas fa-trash'></i>
            </Button>
          ) : (
            <></>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Reviews
