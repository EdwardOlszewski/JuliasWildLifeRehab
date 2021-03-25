import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col, Image, ListGroup } from 'react-bootstrap'
import Reviews from '../components/Reviews'
import ReviewModal from '../components/ReviewModal'
import { listReviews } from '../actions/reviewActions'
import cookies from 'js-cookies'
import Loader from '../components/Loader'
import StarsBar from '../components/StarBars'

const ReviewsScreen = () => {
  // Assign useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  // Go to the state and pull out information from reviewList
  const reviewList = useSelector((state) => state.reviewList)
  const { loading, success, items } = reviewList

  // Go to the state and pull out information from reviewCreate
  const reviewCreate = useSelector((state) => state.reviewCreate)
  const { success: createSuccess } = reviewCreate

  useEffect(() => {
    dispatch(listReviews())
    if (createSuccess) {
      dispatch(listReviews())
    }
  }, [dispatch, createSuccess])

  return (
    <div className='review-div '>
      {!success ? (
        <Loader />
      ) : (
        <>
          <Row className='content-reviews'>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ paddingBottom: '2rem' }}
            >
              <h3>Ratings and Reviews</h3>
            </Col>
            <Col sm={12} md={12} lg={12} xl={4}>
              <Card style={{ border: 'none' }}>
                <StarsBar reviews={items.reviews} />
                <ReviewModal />
              </Card>
            </Col>

            <Col
              sm={12}
              md={12}
              lg={12}
              xl={7}
              style={{ margin: 'auto', textAlign: 'center' }}
            >
              <Card style={{ border: 'none' }}>
                <Reviews reviews={items.reviews} />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default ReviewsScreen
