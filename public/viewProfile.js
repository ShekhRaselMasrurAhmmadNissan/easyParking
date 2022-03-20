const axios = require('axios')

// HTML to Button
const firstNameDOM = document.getElementById('firstName')
const lastNameDOM = document.getElementById('lastName')
const emailDOM = document.getElementById('email')
const phoneNumberDOM = document.getElementById('phoneNumber')

// Value From Parameters
const params = window.location.search
const id = new URLSearchParams(params).get('id')

// const showProfile = async () => {
// 	try {
// 		const {
// 			data: {
// 				profile
// 			},
// 		} = await axios.get(`/agentProfile/${id}`)

// 		// const {
// 		// 	_id: profileID,
// 		// 	firstName,
// 		// 	lastName,
// 		// 	email,
// 		// 	phoneNumber,
// 		// 	password
// 		// } = profile
// 		// firstNameDOM.value = firstName
// 		// lastNameDOM.value = lastName
// 		// emailDOM.value = email
// 		// phoneNumberDOM.value = phoneNumber

// 		console.log(id);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// showProfile()

const showTask = async () => {
	try {
		const {
			data: {
				task
			},
		} = await axios.get(`/agentProfile/${id}`)
		const {
			_id: UserID,
			firstName,
			lastName,
			email,
			phoneNumber,
			password
		} = task

		firstNameDOM.value = firstName
		lastNameDOM.value = lastName
		emailDOM.value = email
		phoneNumberDOM.value = phoneNumber
	} catch (error) {
		console.log(error)
	}
}

showTask()