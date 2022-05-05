import { makeAutoObservable } from 'mobx'

export default class Auth {
	constructor() {
		makeAutoObservable(this)

		this.signUp = this.signUp.bind(this)
		this.signIn = this.signIn.bind(this)
		this.signOut = this.signOut.bind(this)
	}

	isSignIn = true
	isSignUp = true

	signUp() {
		this.isSignUp = true
	}

	signIn() {
		this.isSignIn = true
	}

	signOut() {
		this.isSignIn = false
	}
}
