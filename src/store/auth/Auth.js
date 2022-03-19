import { makeAutoObservable } from 'mobx'

export default class Auth {
	constructor() {
		makeAutoObservable(this)

		this.signIn = this.signIn.bind(this)
		this.logOut = this.logOut.bind(this)
	}

	isSignIn = false
	isSignUp = true

	signIn() {
		this.isSignIn = true
		this.isSignUp = false
	}

	logOut() {
		this.isSignIn = false
		this.isSignUp = true
	}
}
