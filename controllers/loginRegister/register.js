const CustomerInformation = require('../../models/customerModel')
const GarageOwnerInformation = require('../../models/garageOwnerModel')

const register = async (req, res) => {
	try {
		const alert = req.body.alert
		const radioButtonValue = req.body.user
		const firstName = req.body.firstName
		const lastName = req.body.lastName
		const email = req.body.email
		const phoneNumber = req.body.phoneNumber
		const password = req.body.password

		const data = {
			"firstName": firstName,
			"lastName": lastName,
			"email": email,
			"phoneNumber": phoneNumber,
			"password": password
		}
		// const radioButtonValue = document.querySelector('input[type="radio"]:checked')

		if (radioButtonValue === "garageOwner") {
			const garageOwner = await GarageOwnerInformation.create(data)
			res.status(201).redirect('index.html')
			console.log("Data Inserted Successfully... Garage Owner...");
		} else {
			const customer = await CustomerInformation.create(data)
			res.status(201).redirect('index.html')
			console.log("Data Inserted Successfully... Customer...");
		}
	} catch (error) {
		// alert.value = error.message
		res.status(500).json({
			error
		})
	}
}

// Exporting
module.exports = register