const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const connectDB = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		// useFindAndModify: false,
		useUnifiedTopology: true
		// useCreateIndex: true
})
}


module.exports = connectDB