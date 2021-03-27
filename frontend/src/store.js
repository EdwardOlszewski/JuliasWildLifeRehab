import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  createReviewReducer,
  listReviewReducer,
  listReviewStarsReducer,
} from './reducers/reviewReducers'

const reducer = combineReducers({
  reviewCreate: createReviewReducer,
  reviewList: listReviewReducer,
  reviewStars: listReviewStarsReducer,
})

const middleware = [thunk]

//const devTools = applyMiddleware(...middleware)
const devTools = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducer, devTools)

export default store
