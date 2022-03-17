const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		required: [true, 'Must Provide First Name'],
		maxlength: [15, 'First Name Can Not be More Than 15 Characters'],
		minlength: [2, 'First Name Can Not be Less Than 2 Characters']
	},
	lastName: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Last Name'],
		maxlength: [15, 'Last Name Can Not be More Than 15 Characters'],
		minlength: [2, 'Last Name Can Not be Less Than 2 Characters']
	},
	email: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Email']
	},
	phoneNumber: {
		type: String,
		required: [true, 'Must Provide Phone Number']
	},
	password: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Password'],
		minlength: [6, 'Password Can not Be Less Than 6 Characters']
	},
})

module.exports = mongoose.model('CustomerInformation', customerSchema)