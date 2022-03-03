import { makeAutoObservable } from 'mobx'

import { optionList } from './helpers/constants'

export default class Filtration {
	constructor() {
		makeAutoObservable(this)
	}

	optionList = optionList
	currentOptionTitle = this.optionList.find((item) => item.isFocused).title

	focused(optionTitle) {
		this.currentOptionTitle = optionTitle

		this.optionList = this.optionList.map((option) => ({
			...option,
			isFocused: option.title === optionTitle
		}))
	}
}
