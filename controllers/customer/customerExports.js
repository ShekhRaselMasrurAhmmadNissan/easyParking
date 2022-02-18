// Importing from all the modules...
const customerEditProfile = require('./editProfile')
const customerManageReservation = require('./manageReserve')
const customerProfile = require('./profile')
const customerReservation = require('./reservation')
const customerReserve = require('./reserve')

// Exporting Everything
module.exports = {
	customerEditProfile,
	customerManageReservation,
	customerProfile,
	customerReservation,
	customerReserve
}