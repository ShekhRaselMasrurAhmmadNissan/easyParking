const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
	garageOwnerID: String,
	garageName: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Garage Name'],
		maxlength: [20, 'Garage Name Can not be More Than 20 Characters'],
		minlength: [4, 'Garage Name Can not be Less Than 4 Characters']
	},
	garageRegion: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Garage Region'],
		minlength: [3, 'Garage Region Can not be Less Than 3 Characters']
	},
	garageAddress: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Garage Address']
	},
	parkingSpace: {
		type: Number,
		trim: true,
		required: [true, 'Must Provide Parking Space Number']
	},
	parkingCostPerDay: {
		type: Number,
		trim: true,
		required: [true,  'Must Provide Parking Cost Per Day']
	},
	phoneNumber: {
		type: String,
		trim: true,
		required: [true, 'Must Provide Phone Number']
	}
})

module.exports = mongoose.model('GarageInformation', garageSchema)