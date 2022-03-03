import { makeAutoObservable } from 'mobx'
import Filtration from './filtration/Filtration'
import Load from './load/Load'

export default class RootStore {
	constructor() {
		makeAutoObservable(this)

		this.filtration = new Filtration()
		this.load = new Load()
	}
}
