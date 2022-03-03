import { makeAutoObservable } from 'mobx'

import Filtration from './filtration/Filtration'

export default class RootStore {
	constructor() {
		makeAutoObservable(this)

		this.filtration = new Filtration()
	}
}
