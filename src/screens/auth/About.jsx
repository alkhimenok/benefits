import React from 'react'
import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from 'components/onboarding/Onboarding'

const About = ({ navigation, route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Скидки от mediacube для блогеров'}
				description={
					'Приложение предоставляет уникальные скидки и промокоды на товары и услуги.'
				}
				buttonTitle={'Хорошо'}
				navigation={navigation}
				route={route}
			/>
		</Screen>
	)
}

About.defaultProps = {
	navigation: {},
	route: {}
}
About.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default About
