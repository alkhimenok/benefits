import { makeAutoObservable } from 'mobx'

export default class Auth {
	constructor() {
		makeAutoObservable(this)

		this.logOut = this.logOut.bind(this)
	}

	isSignIn = false
	isSignUp = true

	logOut() {
		this.isSignIn = false
		this.isSignUp = true
	}

	signIn() {
		this.isSignIn = true
		this.isSignUp = false
	}
}
