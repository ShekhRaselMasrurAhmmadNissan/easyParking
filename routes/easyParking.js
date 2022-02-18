const express = require('express')

const router = express.Router()

// ***-Importing from controllers-***
// Login Register
const { login, register } = require('../controllers/loginRegister/loginRegisterExports')
// Homepage
const homePage = require('../controllers/homePage/homePage')
// Customer Options
const {
	customerEditProfile,
	customerManageReservation,
	customerProfile,
	customerReservation,
	customerReserve
} = require('../controllers/customer/customerExports')
// Agent Options
const {
	agentAddGarage,
	agentEditProfile,
	agentManageGarage,
	agentProfile,
	agentReservations
} = require('../controllers/agent/agentExports')
const { route } = require('express/lib/application')


// ***-Routes-***
// Login Register
router.route('/').get(login)
router.route('/register').post(register)
// Homepage
router.route('/homePage').get(homePage)
// Customer Options
router.route('/customerEditProfile').patch(customerEditProfile)
router.route('/customerManageReservation').patch(customerManageReservation)
router.route('/customerProfile').get(customerProfile)
router.route('/customerReservation').get(customerReservation)
router.route('/customerReserve').post(customerReserve)
// Agent Options
router.route('/agentAddGarage').post(agentAddGarage)
router.route('/agentEditProfile').patch(agentEditProfile)
router.route('/agentManageGarage').patch(agentManageGarage)
router.route('/agentProfile').get(agentProfile)
router.route('/agentReservations').get(agentReservations)

// Exporting
module.exports = router