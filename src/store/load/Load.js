import { makeAutoObservable } from 'mobx'
import { loadFonts } from 'helpers/utils'

export default class Load {
	constructor({ data, filtration }) {
		makeAutoObservable(this)

		this.data = data
		this.filtration = filtration

		this.waitLoading = this.waitLoading.bind(this)
		this.finishLoading = this.finishLoading.bind(this)
	}

	loaded = false

	async waitLoading() {
		return await Promise.all([this.data.request(), loadFonts()]) // for asynchronous data loading
	}

	finishLoading() {
		this.filtration.initData = this.data.data
		this.filtration.data = this.data.data
		this.loaded = true
	}
}
