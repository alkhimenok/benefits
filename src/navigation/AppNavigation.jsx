import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'

const AppNavigation = observer(() => {
	const { isSignIn, isSignUp } = useStore().auth

	return isSignIn && isSignUp ? <SignIn /> : <SignUp />
})

export default AppNavigation
