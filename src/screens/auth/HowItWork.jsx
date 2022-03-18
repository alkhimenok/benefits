import React from 'react'
import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from 'components/onboarding/Onboarding'

const HowItWork = ({ navigation, route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Как это работает?'}
				description={
					'Все просто. Выбираете нужную скидку, нажимаете кнопку «Активировать» показываете приложение перед оплатой счета. Или используете промокод.'
				}
				buttonTitle={'Мне нравится'}
				navigation={navigation}
				route={route}
			/>
		</Screen>
	)
}

HowItWork.defaultProps = {
	navigation: {},
	route: {}
}
HowItWork.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default HowItWork
