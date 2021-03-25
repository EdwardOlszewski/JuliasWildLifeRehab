import asyncHandler from 'express-async-handler'
import Review from '../models/reviewModel.js'

// @desc    Create a new review
// @route   POST /api/reviews
// @access  Public
const createReview = asyncHandler(async (req, res) => {
  const { author, numStars, review } = req.body

  const newReview = await Review.create({
    author,
    numStars,
    review,
  })

  if (newReview) {
    res.status(201).json({
      _id: newReview._id,
      author: newReview.author,
      numStars: newReview.numStars,
      review: newReview.review,
    })
  } else {
    res.status(400)
    throw new Error('Invalid review data')
  }
})

// @desc    get all reviews
// @route   GET /api/reviews
// @access  Public
const getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find()
  res.json({ reviews })
})

export { createReview, getAllReviews }
