// Import everything...
const agentAddGarage = require('./addGarage')
const agentEditProfile = require('./editProfile')
const agentManageGarage = require('./manageGarage')
const agentProfile = require('./profile')
const agentReservations = require('./reservations')

// Exporting everything
module.exports = {
	agentAddGarage,
	agentEditProfile,
	agentManageGarage,
	agentProfile,
	agentReservations
}