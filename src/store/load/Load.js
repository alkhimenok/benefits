import { makeAutoObservable } from 'mobx'
import { loadFonts } from './helpers/utils'

export default class Filtration {
	constructor() {
		makeAutoObservable(this)

		this.waitLoading = this.waitLoading.bind(this)
		this.completeDownload = this.completeDownload.bind(this)
	}

	loaded = false

	waitLoading = async () => {
		return await Promise.all([loadFonts()]) // for asynchronous data loading
	}

	completeDownload() {
		this.loaded = true
	}
}
