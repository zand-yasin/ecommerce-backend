import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc create new order
// @route post /api/orders
// @access Public

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    ItemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      ItemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    res.status(201).json({ createdOrder })
  }
})
export { addOrderItems }

// // @desc Fetch single product
// // @route GET /api/product/:id
// // @access Public

// const getProductById = asyncHandler(async (req, res) => {
//   const product = await Product.findById({ _id: req.params.id })
//   if (product) {
//     res.json(product)
//   } else {
//     res.status(404)
//     throw new Error('Product not found')
//   }
// })

// export { getProducts, getProductById }
