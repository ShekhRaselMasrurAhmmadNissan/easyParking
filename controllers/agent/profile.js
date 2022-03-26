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

		const {
			id: garageOwnerID
		} = req.params
		const garageOwnerProfile = await GarageOwnerInformation.findOne({
			_id: garageOwnerID
		})
		if (!garageOwnerProfile) {
			return res.status(404).json({
				msg: `No usr with ID : ${garageOwnerID}`
			})
		}

		const {
			firstName,
			lastName,
			email,
			phoneNumber,
			password
		} = garageOwnerProfile

		res.status(200).json({ garageOwnerProfile })
		console.log(garageOwnerProfile);
		req.body.firstName = firstName
		req.body.lastName = lastName
		req.body.email = email
		req.body.phoneNumber = phoneNumber

	} catch (error) {
		res.status(500).json({
			msg: error
		})
	}
}

module.exports = profile