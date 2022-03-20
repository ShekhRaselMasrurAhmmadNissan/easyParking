const CustomerInformation = require('../../models/customerModel')
const GarageOwnerInformation = require('../../models/garageOwnerModel')

const customerRegister = async (req, res) => {
	try {
		const customer = await CustomerInformation.create(req.body)
		res.status(201).json({
			customer
		})
	} catch (error) {
		res.status(500).json({
			msg: error
		})
	}
}

const garageOwnerRegister = async (req, res) => {
	try {
		const garageOwner = await GarageOwnerInformation.create(req.body)
		// console.log(garageOwner)
		res.status(201).json({
			garageOwner
		})
	} catch (error) {
		res.status(500).json({error})
	}
}

// Exporting
module.exports = garageOwnerRegister