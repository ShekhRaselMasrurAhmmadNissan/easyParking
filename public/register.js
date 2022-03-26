const axios = require('axios')
const bodyParser = require('body-parser')
// const res = require("express/lib/response")

// Assigning the HTML to corresponding variables
const registerFormDOM = document.getElementById('registration-form')
const userTypesDOM = document.getElementById('userTypes')
const firstNameDOM = req.body.firstName
const lastNameDOM = req.body.lastName
const emailDOM = req.body.email
const phoneNumberDOM = req.body.phoneNumber
const passwordDOM = req.body.password
const confirmPasswordDOM = document.getElementById('confirmPassword').value
const registerButtonDOM = document.getElementById('registerButton')

registerFormDOM.addEventListener('submit', async (e) => {
	// const el = e.target()
	e.preventDefault()
	const firstName = firstNameDOM
	const lastName = lastNameDOM
	const email = emailDOM
	const phoneNumber = phoneNumberDOM
	const password = passwordDOM
	console.log("Hello everyone");
	console.log(firstName);
	try {
		await axios.post('/register', { "firstName": firstName, "lastName": lastName, "email": email, "phoneNumber": phoneNumber, "password": password })
	} catch (error) {
		console.log(error);
	}
})

