import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from './onboarding/Onboarding'

const Ready = ({ route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Готово!'}
				description={
					'Сейчас вы можете просматривайть все\nвозможные скидки и сохранять лучшие.\n\nЧтобы активировать скидки и использовать\nпромокоды, нужно привязать Youtobe-канал с\nболее 10К подписчиками.'
				}
				buttonTitle={'Смотреть предложения'}
				screenName={route.name}
			/>
		</Screen>
	)
}

Ready.defaultProps = {
	route: {}
}
Ready.propTypes = {
	route: PropTypes.object
}

export default Ready
