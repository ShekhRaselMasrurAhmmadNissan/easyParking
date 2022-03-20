const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const connectDB = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
})
}


module.exports = connectDB