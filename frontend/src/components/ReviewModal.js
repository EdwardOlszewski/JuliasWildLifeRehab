import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, Form, ListGroup } from 'react-bootstrap'
import { createReview } from '../actions/reviewActions'
import { REVIEW_CREATE_RESET } from '../constants/reviewConstants'
import Loader from '../components/Loader'
import cookies from 'js-cookies'

const ReviewModal = ({ history }) => {
  // Assign useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  const reviewSubmit = cookies.getItem('reviewSubmit')

  const [author, setAuthor] = useState('')
  const [numStars, setNumStars] = useState(0)
  const [review, setReview] = useState('')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Pull data from userLogin state
  const reviewCreate = useSelector((state) => state.reviewCreate)
  const { success, loading } = reviewCreate

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createReview(author, numStars, review))
    handleClose()
  }

  useEffect(() => {
    if (success) {
      dispatch({ type: REVIEW_CREATE_RESET })
    }
  }, [dispatch, success, history])

  return (
    <div style={{ marginTop: '1rem' }}>
      {reviewSubmit ? (
        <p className='review-button'>One review per day, thank you!</p>
      ) : (
        <Button className='review-button' onClick={handleShow}>
          Create Review {'>'}
        </Button>
      )}

      <div className='line'></div>

      <Modal
        className='review-modal'
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Create Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='Author'>
                  <Form.Label>
                    <h6>Name</h6>
                  </Form.Label>
                  <Form.Control
                    rows={1}
                    type='string'
                    placeholder='Enter Name'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='stars'>
                  <Form.Label>Select stars</Form.Label>
                  <Form.Control
                    as='select'
                    placeholder='Select stars'
                    value={numStars}
                    onChange={(e) => setNumStars(e.target.value)}
                  >
                    <option value=''>Select...</option>
                    <option value='1'>1 - Poor</option>
                    <option value='2'>2 - Fair</option>
                    <option value='3'>3 - Good</option>
                    <option value='4'>4 - Very Good</option>
                    <option value='5'>5 - Excellent</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='review'>
                  <Form.Label>
                    <h5>Review</h5>
                  </Form.Label>
                  <textarea
                    className='form-control'
                    id='review'
                    rows='5'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type='submit' onClick={submitHandler}>
                Submit Review
              </Button>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  )
}

export default ReviewModal
