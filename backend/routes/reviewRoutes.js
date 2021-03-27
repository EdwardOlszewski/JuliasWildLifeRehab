import express from 'express'
const router = express.Router()

import {
  createReview,
  getReviews,
  getReviewStars,
} from '../controllers/reviewController.js'

router.route('/').post(createReview).get(getReviews)
router.route('/pages').get(getReviews)
router.route('/stars').get(getReviewStars)

export default router
