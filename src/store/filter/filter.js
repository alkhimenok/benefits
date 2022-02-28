import { makeAutoObservable } from 'mobx'

import { buttonList } from './buttonList'

class Filter {
	filterList = buttonList
	currentTitle = this.filterList.find((item) => {
		item.isFocused

		return item
	}).title
	constructor() {
		makeAutoObservable(this)
	}

	focused(id) {
		this.filterList = this.filterList.map((item) => {
			if (item.id === id) {
				this.currentTitle = item.title

				item.isFocused = true
			} else {
				item.isFocused = false
			}

			return item
		})
	}
}

export default new Filter()
