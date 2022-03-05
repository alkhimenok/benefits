import { makeAutoObservable } from 'mobx'
import { requestData } from './helpers/utils'

export default class Data {
	constructor() {
		makeAutoObservable(this)

		this.request = this.request.bind(this)
	}

	data = null

	async request() {
		this.data = await requestData()
	}
}
