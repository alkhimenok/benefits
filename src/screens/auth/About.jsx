import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from './onboarding/Onboarding'

const About = ({ route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Скидки от mediacube для блогеров'}
				description={'Приложение предоставляет уникальные скидки\nи промокоды на товары и услуги.'}
				buttonTitle={'Хорошо'}
				screenName={route.name}
			/>
		</Screen>
	)
}

About.defaultProps = {
	route: {}
}
About.propTypes = {
	route: PropTypes.object
}

export default About
