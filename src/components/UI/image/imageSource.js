const geCurrentImageSource = (name) => {
	switch (name) {
		case 'odin':
			return require('assets/images/services/clothes/odin.png')
		default:
			return require('assets/images/undefined/service.png')
	}
}

export { geCurrentImageSource }
