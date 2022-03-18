import React from 'react'
import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from 'components/onboarding/Onboarding'

const SignIn = ({ navigation, route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Готово, за скидками!'}
				description={
					'Используй все возможные скидки, сохраняйте лучшие и предлагай новые.'
				}
				buttonTitle={'К скидкам'}
				navigation={navigation}
				route={route}
			/>
		</Screen>
	)
}

SignIn.defaultProps = {
	navigation: {},
	route: {}
}
SignIn.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default SignIn
