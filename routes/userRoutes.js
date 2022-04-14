import express from 'express'
const router = express.Router()

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'
// same thing
// router.route('/login').post(authUser)
router.post('/login', authUser)
router.post('/create', registerUser)
// router.route('/profile').get(protect, getUserProfile)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
