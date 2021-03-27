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
const getReviews = asyncHandler(async (req, res) => {
  const pageSize = 5
  const page = Number(req.query.pageNumber) || 1

  const count = await Review.countDocuments()
  const reviews = await Review.find()
    .sort({ publishedAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ reviews, page, pages: Math.ceil(count / pageSize) })
})

// @desc    get all numStars from reviews
// @route   GET /api/reviews/stars
// @access  Public
const getReviewStars = asyncHandler(async (req, res) => {
  const reviews = await Review.find({}, { numStars: 1, _id: 0 })
  res.json({ reviews })
})

export { createReview, getReviews, getReviewStars }
