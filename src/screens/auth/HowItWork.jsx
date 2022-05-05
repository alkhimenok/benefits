import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from './onboarding/Onboarding'

const HowItWork = ({ route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Как это работает?'}
				description={
					'Все просто. Выбираете нужную скидку,\nнажимаете кнопку «Активировать»\nпоказываете приложение перед оплатой счета.\nИли используете промокод.'
				}
				buttonTitle={'Мне нравится'}
				screenName={route.name}
			/>
		</Screen>
	)
}

HowItWork.defaultProps = {
	route: {}
}
HowItWork.propTypes = {
	route: PropTypes.object
}

export default HowItWork
