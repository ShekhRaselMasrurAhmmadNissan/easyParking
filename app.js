// console.log('Welcome to the project Easy Parking.')

const express = require('express')
const app = express()

// Routs
app.get('/', (req, res) => {
	res.send('Welcome to my Easy Parking Application...')
})

const port = 4000
app.listen(port, console.log(`The server is listening to the port: ${port}`))