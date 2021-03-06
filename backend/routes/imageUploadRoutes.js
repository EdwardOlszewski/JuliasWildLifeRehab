import express from 'express'
const router = express.Router()

import upload from '../services/file-upload.js'
import { createImage } from '../controllers/imageController.js'

router.post('/', upload.single('image'), (req, res) => {
  res.send(req.file.location)
})

export default router
