import { makeAutoObservable } from 'mobx'
import { loadFonts } from './helpers/utils'

export default class Load {
	constructor({ data, filtration }) {
		makeAutoObservable(this)

		this.data = data
		this.filtration = filtration

		this.waitLoading = this.waitLoading.bind(this)
		this.completeDownload = this.completeDownload.bind(this)
	}

	loaded = false

	async waitLoading() {
		return await Promise.all([this.data.request(), loadFonts()]) // for asynchronous data loading
	}

	completeDownload() {
		this.filtration.data = this.data.data
		this.loaded = true
	}
}
