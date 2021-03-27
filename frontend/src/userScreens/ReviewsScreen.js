import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'
import Reviews from '../components/Reviews'
import ReviewModal from '../components/ReviewModal'
import { listReviews, listReviewStars } from '../actions/reviewActions'
import {
  REVIEW_DELETE_RESET,
  REVIEW_LIST_RESET,
  REVIEW_STARS_RESET,
} from '../constants/reviewConstants'
import Paginate from '../components/Paginate'
import Loader from '../components/Loader'
import StarsBar from '../components/StarBars'

const ReviewsScreen = ({ match }) => {
  // Assign useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  // Get page number from the URL
  const pageNumber = match.params.pageNumber || 1

  // Get data from the state
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const reviewList = useSelector((state) => state.reviewList)
  const { success, items, pages, page } = reviewList

  const reviewStars = useSelector((state) => state.reviewStars)
  const { success: numStarsSuccess, items: numStarsList } = reviewStars

  const reviewCreate = useSelector((state) => state.reviewCreate)
  const { success: createSuccess } = reviewCreate

  const reviewDelete = useSelector((state) => state.reviewDelete)
  const { success: deleteSuccess } = reviewDelete

  useEffect(() => {
    if (!items || createSuccess) {
      dispatch(listReviews(pageNumber))
      dispatch(listReviewStars())
    }
    if (deleteSuccess) {
      dispatch({ type: REVIEW_DELETE_RESET })
      dispatch({ type: REVIEW_LIST_RESET })
      dispatch({ type: REVIEW_STARS_RESET })
    }
  }, [dispatch, createSuccess, pageNumber, deleteSuccess, items])

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
                <Reviews reviews={items.reviews} user={userInfo} />
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
