const requestData = async () => {
	// const response = await fetch('database') // for async request from database

	// return await response.json()

	return require('database')
}

export { requestData }
