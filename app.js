// console.log('Welcome to the project Easy Parking.')

const express = require('express')
const app = express()

// Importing from Login
const easyParking = require('./routes/easyParking');

// Middleware
app.use(express.json())

// Routes
app.get('/welcome', (req, res) => {
	res.send('Welcome to my Easy Parking Application...')
})

app.use('/', easyParking)

const port = 4000
app.listen(port, console.log(`The server is listening to the port: ${port}`))