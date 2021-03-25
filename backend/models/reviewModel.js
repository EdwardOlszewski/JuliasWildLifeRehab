import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    numStars: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)
export default Review
