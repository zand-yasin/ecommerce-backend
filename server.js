import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is working')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const port = process.env.PORT || 3003

app.listen(port, console.log('Server running on port 3003'.yellow.bold))
