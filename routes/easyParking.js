const express = require('express')

const router = express.Router()

// ***-Importing from controllers-***
// Login Register
const { login, register } = require('../controllers/loginRegister/loginRegisterExports')
// Homepage
const homePage = require('../controllers/homePage/homePage')
// Customer Options
const {
	editProfile,
	manageReservation,
	profile,
	reservation,
	reserve
} = require('../controllers/customer/customerExports')

// Login Register
router.route('/').get(login)
router.route('/register').post(register)
// Homepage
router.route('/homePage').get(homePage)
// Customer Options
router.route('/editProfile').patch(editProfile)
router.route('/manageReservation').patch(manageReservation)
router.route('/profile').get(profile)
router.route('/reservation').get(reservation)
router.route('/reserve').post(reserve)

// Exporting
module.exports = router