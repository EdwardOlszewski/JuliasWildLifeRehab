import express from 'express'
const router = express.Router()
import {
  createReview,
  getReviews,
  getReviewStars,
  deleteReview,
} from '../controllers/reviewController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(createReview).get(getReviews)
router.route('/pages').get(getReviews)
router.route('/stars').get(getReviewStars)
router.route('/:id').delete(protect, admin, deleteReview)

export default router
