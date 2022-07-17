const asyncHandler = require ('express-async-handler')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDb = require('./config.db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDb()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals',require('./routes/goalRoutes.js'))
app.use('/api/users',require('./routes/userRoutes.js'))

app.listen(port, () => console.log('Server started on port ${port}'))