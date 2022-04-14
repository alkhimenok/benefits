import { makeAutoObservable } from 'mobx'
import { optionList } from 'helpers/constants'

export default class Filtration {
	constructor() {
		makeAutoObservable(this)

		this.focused = this.focused.bind(this)
		this.focusedPrev = this.focusedPrev.bind(this)
		this.toggleFavorites = this.toggleFavorites.bind(this)
		this.filterReset = this.filterReset.bind(this)
		this.addToHistory = this.addToHistory.bind(this)
	}

	optionList = optionList
	initTitle = optionList.find(({ isFocused }) => isFocused).title
	history = [this.initTitle]
	initData = null // can be used asyncStorage
	data = null
	hash = {}

	// get favoritesList() { // перенести в экран избранное
	// 	return this.data
	// 		.map(({ data }) => data)
	// 		.flat()
	// 		.filter((item) => item.isFavorites)
	// }

	focused(optionTitle) {
		const focusedData =
			this.hash[optionTitle] ??
			this.initData.filter((list) => list.title === optionTitle)

		this.optionList = this.optionList.map((option) => ({
			...option,
			isFocused: option.title === optionTitle
		}))
		this.data = focusedData.length ? focusedData : this.initData
		this.hash.optionTitle = focusedData

		this.addToHistory(optionTitle)
	}

	focusedPrev() {
		this.history.pop()

		const { length } = this.history

		if (length !== 0) {
			this.focused(this.history[length - 1])
		}

		return length === 0
	}

	addToHistory(optionTitle) {
		const { length } = this.history

		this.history[length - 1] !== optionTitle && this.history.push(optionTitle)

		length >= 5 && this.history.shift()
	}

	toggleFavorites(name) {
		this.data = this.data.map(({ title, data }) => ({
			title,
			data: data.map((item) => ({
				...item,
				isFavorites: name === item.name ? !item.isFavorites : item.isFavorites
			}))
		}))
	}

	filterReset() {
		this.focused(this.initTitle)

		this.history.length = 1
	}
}
