import React from 'react'
import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from 'components/onboarding/Onboarding'

const SignUp = ({ navigation, route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Регистрация'}
				description={
					'Чтобы просматривать скидки, нужно зарегистрироваться или войти в аккаунт ezzy.co. Так мы сможем подобрать уникальные скидки лично для вас.\nЧтобы активировать скидки и использовать промокоды, нужно привязать Youtobe-канал с более 10К подписчиками.'
				}
				buttonTitle={'Согласен'}
				navigation={navigation}
				route={route}
			/>
		</Screen>
	)
}

SignUp.defaultProps = {
	navigation: {},
	route: {}
}
SignUp.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default SignUp