import {
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
  REVIEW_CREATE_FAIL,
  REVIEW_CREATE_RESET,
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
  REVIEW_LIST_FAIL,
  REVIEW_STARS_REQUEST,
  REVIEW_STARS_SUCCESS,
  REVIEW_STARS_FAIL,
  REVIEW_DELETE_RESET,
  REVIEW_DELETE_FAIL,
  REVIEW_DELETE_SUCCESS,
  REVIEW_DELETE_REQUEST,
  REVIEW_LIST_RESET,
  REVIEW_STARS_RESET,
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
      return {
        success: true,
        loading: false,
        items: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const listReviewStarsReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_STARS_REQUEST:
      return { loading: true, success: false }
    case REVIEW_STARS_SUCCESS:
      return {
        success: true,
        loading: false,
        items: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case REVIEW_STARS_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_STARS_RESET:
      return {}
    default:
      return state
  }
}

export const deleteReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_DELETE_REQUEST:
      return { loading: true, success: false }
    case REVIEW_DELETE_SUCCESS:
      return { loading: false, success: true }
    case REVIEW_DELETE_FAIL:
      return { loading: false, state: action.payload }
    case REVIEW_DELETE_RESET:
      return {}
    default:
      return state
  }
}
