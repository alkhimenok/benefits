const geCurrentImageSource = (name) => {
	switch (name) {
		// beauty
		// clothes
		case 'odin':
			return require('assets/images/services/clothes/odin.png')
		// educationAndHobbies
		case 'fasol':
			return require('assets/images/services/educationAndHobbies/fasol.png')
		case 'onlineClass':
			return require('assets/images/services/educationAndHobbies/onlineClass.png')
		case 'robolab':
			return require('assets/images/services/educationAndHobbies/robolab.png')
		case 'skyeng':
			return require('assets/images/services/educationAndHobbies/skyeng.png')
		// foodAndDrink
		case 'dominosPizza':
			return require('assets/images/services/foodAndDrink/dominosPizza.png')
		case 'embargo':
			return require('assets/images/services/foodAndDrink/embargo.png')
		case 'myata':
			return require('assets/images/services/foodAndDrink/myata.png')
		case 'sprintBar':
			return require('assets/images/services/foodAndDrink/sprintBar.png')
		// health
		case 'evo':
			return require('assets/images/services/health/evo.png')
		case 'voka':
			return require('assets/images/services/health/voka.png')
		// service
		default:
			return require('assets/images/undefined/service.png')
		// sport
	}
}

export { geCurrentImageSource }
