import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization
  if (token && token.startsWith('Bearer')) {
    try {
      console.log('Token Found')
      token = token.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')

      console.log(decoded)
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorize, token fail')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token!')
  }
})

export { protect }
