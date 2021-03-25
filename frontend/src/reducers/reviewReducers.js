import {
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
  REVIEW_CREATE_FAIL,
  REVIEW_CREATE_RESET,
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
  REVIEW_LIST_FAIL,
} from '../constants/reviewConstants'

export const createReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_CREATE_REQUEST:
      return { loading: true, success: false }
    case REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload }
    case REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const listReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_LIST_REQUEST:
      return { loading: true, success: false }
    case REVIEW_LIST_SUCCESS:
      return { success: true, loading: false, items: action.payload }
    case REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
