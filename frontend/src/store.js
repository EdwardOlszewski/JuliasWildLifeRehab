import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  createReviewReducer,
  listReviewReducer,
  listReviewStarsReducer,
  deleteReviewReducer,
} from './reducers/reviewReducers'

import { userLoginReducer } from './reducers/userReducers.js'

const reducer = combineReducers({
  reviewCreate: createReviewReducer,
  reviewList: listReviewReducer,
  reviewStars: listReviewStarsReducer,
  reviewDelete: deleteReviewReducer,
  userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

//const devTools = applyMiddleware(...middleware)
const devTools = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducer, initialState, devTools)

export default store
