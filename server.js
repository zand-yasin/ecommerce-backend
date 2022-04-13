import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorFounder } from './middleware/errorMiddleware.js'
dotenv.config()

connectDB()
const app = express()

// allow us to accept json data from the body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is working')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorFounder)

const port = process.env.PORT || 3003

app.listen(port, console.log('Server running on port 3003'.yellow.bold))
