import { makeAutoObservable } from 'mobx'
import { optionList } from './helpers/constants'

export default class Filtration {
	constructor() {
		makeAutoObservable(this)

		this.focused = this.focused.bind(this)
	}

	optionList = optionList
	data = null // can be used asyncStorage
	hash = {}

	focused(optionTitle) {
		const focusedData =	this.hash.optionTitle ?? this.data.filter((list) => list.title === optionTitle)
		
		this.optionList = this.optionList.map((option) => ({ ...option, isFocused: option.title === optionTitle }))
		this.data = focusedData.length ? focusedData : this.data
		this.hash.optionTitle = focusedData
	}
}
