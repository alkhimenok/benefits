import { makeAutoObservable } from 'mobx'

import { buttonList } from './helpers/constants'

class Filtration {
	list = buttonList
	currentTitle = this.list.find((item) => item.isFocused).title

	constructor() {
		makeAutoObservable(this)
	}

	focused(title) {
		this.currentTitle = title

		this.list = this.list.map((item) => ({
			...item,
			isFocused: title === item.title
		}))
	}
}

export default new Filtration()
