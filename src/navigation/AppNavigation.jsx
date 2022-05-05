import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import SignInNavigation from './signInNavigation/SignInNavigation'
import SignUpNavigation from './signUpNavigation/SignUpNavigation'

const AppNavigation = observer(() => {
	const { isSignIn, isSignUp } = useStore().auth

	return isSignIn && isSignUp ? <SignInNavigation /> : <SignUpNavigation />
})

export default AppNavigation
