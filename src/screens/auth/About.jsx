import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from './onboarding/Onboarding'

const About = ({ navigation, route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Скидки от mediacube для блогеров'}
				description={
					'Приложение предоставляет уникальные скидки\nи промокоды на товары и услуги.'
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
