import axios from 'axios'
import {
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
  REVIEW_CREATE_FAIL,
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
  REVIEW_LIST_FAIL,
} from '../constants/reviewConstants'
import cookies from 'js-cookies'

export const createReview = (author, numStars, review) => async (dispatch) => {
  try {
    dispatch({
      type: REVIEW_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/reviews',
      { author, numStars, review },
      config
    )

    dispatch({
      type: REVIEW_CREATE_SUCCESS,
      payload: data,
    })
    // create a date then set increase it by 24 hours.
    // create the cookie for review submited and have it expire tomorrow.
    var expire = new Date()
    expire.setHours(expire.getHours() + 24)
    console.log(expire)
    cookies.setItem('reviewSubmit', 'true', { expires: expire })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: REVIEW_CREATE_FAIL,
      payload: message,
    })
  }
}

export const listReviews = () => async (dispatch) => {
  try {
    dispatch({
      type: REVIEW_LIST_REQUEST,
    })

    const { data } = await axios.get('/api/reviews')

    dispatch({
      type: REVIEW_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: REVIEW_LIST_FAIL,
      payload: message,
    })
  }
}
