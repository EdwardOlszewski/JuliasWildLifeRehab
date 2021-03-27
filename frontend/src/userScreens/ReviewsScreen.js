import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'
import Reviews from '../components/Reviews'
import ReviewModal from '../components/ReviewModal'
import { listReviews, listReviewStars } from '../actions/reviewActions'
import Paginate from '../components/Paginate'
import Loader from '../components/Loader'
import StarsBar from '../components/StarBars'

const ReviewsScreen = ({ match }) => {
  // Assign useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  // Get page number from the URL
  const pageNumber = match.params.pageNumber || 1

  // Go to the state and pull out information from reviewList
  const reviewList = useSelector((state) => state.reviewList)
  const { success, items, pages, page } = reviewList

  // Go to the state and pull out information from reviewList
  const reviewStars = useSelector((state) => state.reviewStars)
  const { success: numStarsSuccess, items: numStarsList } = reviewStars

  // Go to the state and pull out information from reviewCreate
  const reviewCreate = useSelector((state) => state.reviewCreate)
  const { success: createSuccess } = reviewCreate

  useEffect(() => {
    dispatch(listReviews(pageNumber))
    dispatch(listReviewStars())
    if (createSuccess) {
      dispatch(listReviews())
    }
  }, [dispatch, createSuccess, pageNumber])

  return (
    <div className='review-div '>
      {!success || !numStarsSuccess ? (
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
                <StarsBar reviews={numStarsList.reviews} />
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

              <Paginate pages={pages} page={page} keyword={'reviews'} />
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default ReviewsScreen
