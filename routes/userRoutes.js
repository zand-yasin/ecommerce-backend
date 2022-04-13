import express from 'express'
const router = express.Router()

import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'
// same thing
// router.route('/login').post(authUser)
router.post('/login', authUser)
router.post('/create', registerUser)
router.route('/profile').get(protect, getUserProfile)

export default router
