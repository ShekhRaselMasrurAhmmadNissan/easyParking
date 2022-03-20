const GarageOwnerInformation = require('../../models/garageOwnerModel')

const editProfile = async (req, res) => {
	try {
		const {
			id: garageOwnerID
		} = req.params
		const profile = await GarageOwnerInformation.findOneAndUpdate({
			_id: garageOwnerID
		}, req.body, {
			new: true,
			runValidators: true
		})
		if (!profile) {
			return res.status(404).json(`No User With ID: ${garageOwnerID}`)
		}
		res.status(200).json({
			id: garageOwnerID,
			data: req.body
		})
	} catch (error) {
		res.status(500).json({
			msg: error
		})
	}
}

module.exports = editProfile