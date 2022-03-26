// console.log('Welcome to the project Easy Parking.')
const connectDB = require('./db/connect')
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

// Importing from Login
const easyParking = require('./routes/easyParking');
const path = require('path')

// Middleware
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))

// Routes
app.use('/', easyParking)

const port = 4000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`The server is listening to the port: ${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()