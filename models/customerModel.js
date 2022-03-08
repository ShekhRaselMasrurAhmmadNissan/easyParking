const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
	// ***Profile Information***
	email: String,
	password: String,
	name: String,
	phoneNumber: String,
	carRegistrationNumber: String,
	garageName: String,
	location: String,
})