import React from 'react'
import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from 'components/onboarding/Onboarding'

const Ready = ({ navigation, route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Готово!'}
				description={
					'Сейчас вы можете просматривайть все возможные скидки и сохранять лучшие.\nЧтобы активировать скидки и использовать промокоды, нужно привязать Youtobe-канал с более 10К подписчиками.'
				}
				buttonTitle={'Смотреть предложения'}
				navigation={navigation}
				route={route}
			/>
		</Screen>
	)
}

Ready.defaultProps = {
	navigation: {},
	route: {}
}
Ready.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default Ready
