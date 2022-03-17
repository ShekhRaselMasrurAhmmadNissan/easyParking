const GarageInformation = require('../../models/garageModel')
const addGarage = async (req, res) => {
	try {
		const garage = await GarageInformation.create(req.body)
		res.status(201).json({garage})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}

module.exports = addGarage