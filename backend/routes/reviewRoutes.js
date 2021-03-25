import express from 'express'
const router = express.Router()

import { createReview, getAllReviews } from '../controllers/reviewController.js'

router.route('/').post(createReview).get(getAllReviews)

export default router
