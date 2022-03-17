const GarageOwnerInformation = require('../../models/garageOwnerModel')
const login = async (req, res) => {
	try {
		const {
			email: userEmail,
			password: userPassword
		} = req.body
		// res.status(200).json(`Done this far successfully. Email: ${userEmail}, Password: ${userPassword}`)
		const user = await GarageOwnerInformation.findOne({
			email: userEmail
		})
		if (!user) {
			return res.status(404).json(`Wrong Email. No user with ${userEmail}.`)
		}
		if (user.password !== userPassword) {
			return res.status(404).json(`Wrong Password.`)
		}
		res.status(200).json({
			user
		})
	} catch (error) {
		res.status(500).json({
			msg: error
		})
	}
}


// Exporting
module.exports = login