import { makeAutoObservable } from 'mobx'

export default class Auth {
	constructor() {
		makeAutoObservable(this)

		this.signIn = this.signIn.bind(this)
		this.logOut = this.logOut.bind(this)
	}

	isSignIn = true
	isSignUp = false

	signIn() {
		this.isSignIn = true
		this.isSignUp = false
	}

	logOut() {
		this.isSignIn = false
		this.isSignUp = true
	}
}
