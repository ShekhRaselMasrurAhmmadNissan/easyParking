const GarageOwnerInformation = require('../../models/garageOwnerModel')
// const profile = async (req, res) => {
// 	try {
// 		const viewProfile = await GarageOwnerInformation.find({})
// 		res.status(200).json({viewProfile})
// 	} catch (error) {
// 		res.status(500).json({msg: error})
// 	}
// }

const profile = async (req, res) => {
	try {
		const { id: garageOwnerID } = req.params
		const garageOwnerProfile = await GarageOwnerInformation.findOne({ _id: garageOwnerID })
		if (!garageOwnerProfile) {
			return res.status(404).json({msg: `No usr with ID : ${garageOwnerID}`})
		}

		res.status(200).json({garageOwnerProfile})

	} catch (error) {
		res.status(500).json({msg: error})
	}
}

module.exports = profile