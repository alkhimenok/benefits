import { makeAutoObservable } from 'mobx'

export default class Data {
	constructor() {
		makeAutoObservable(this)

		this.request = this.request.bind(this)
	}

	response = null

	async request() {
		// const response = await fetch('database') // for async request from database

		// this.data = await response.json()

		this.response = require('database')
	}
}
