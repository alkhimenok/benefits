import { makeAutoObservable } from 'mobx'
import Auth from './auth/Auth'
import Data from './data/Data'
import Load from './load/Load'
import Filtration from './filtration/Filtration'

export default class RootStore {
	constructor() {
		makeAutoObservable(this)

		this.auth = new Auth()
		this.data = new Data()
		this.filtration = new Filtration()
		this.load = new Load({ data: this.data, filtration: this.filtration })
	}
}
