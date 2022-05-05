import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from './onboarding/Onboarding'

const SignIn = ({ route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Готово, за скидками!'}
				description={'Используй все возможные скидки, сохраняйте\nлучшие и предлагай новые.'}
				buttonTitle={'К скидкам'}
				screenName={route.name}
			/>
		</Screen>
	)
}

SignIn.defaultProps = {
	route: {}
}
SignIn.propTypes = {
	route: PropTypes.object
}

export default SignIn
