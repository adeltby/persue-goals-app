const { urlencoded } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env['PORT']

const app = express()

connectDB()

app.use(express.json())

app.use(urlencoded({extended: false}))

app.use('/api/goals', require('./routes/appRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))