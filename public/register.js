const axios = require('axios')
const bodyParser = require('body-parser')
// const res = require("express/lib/response")

// Assigning the HTML to corresponding variables
const registerFormDOM = document.getElementById('registration-form')
const userTypesDOM = document.getElementById('userTypes')
const firstNameDOM = document.getElementById('firstName').value
const lastNameDOM = document.getElementById('lastName').value
const emailDOM = document.getElementById('email').value
const phoneNumberDOM = document.getElementById('phoneNumber').value
const passwordDOM = document.getElementById('password').value
const confirmPasswordDOM = document.getElementById('confirmPassword').value
const registerButtonDOM = document.getElementById('registerButton')

registerFormDOM.addEventListener('submit', (e) => {
	// const el = e.target()
	e.preventDefault()
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const email = req.body.email
	const phoneNumber = req.body.phoneNumber
	const password = req.body.password

	try {
		await axios.post('/register', {firstName, lastName, email, phoneNumber, password})
	} catch (error) {
		console.log(error);
	}
})