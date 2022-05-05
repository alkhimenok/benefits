import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import Onboarding from './onboarding/Onboarding'

const SignUp = ({ route }) => {
	return (
		<Screen>
			<Onboarding
				title={'Регистрация'}
				description={
					'Чтобы просматривать скидки, нужно зарегистрироваться или войти в аккаунт\nezzy.co. Так мы сможем подобрать уникальные\nскидки лично для вас.\n\nЧтобы активировать скидки и использовать\nпромокоды, нужно привязать Youtobe-канал с\nболее 10К подписчиками.'
				}
				buttonTitle={'Согласен'}
				screenName={route.name}
			/>
		</Screen>
	)
}

SignUp.defaultProps = {
	route: {}
}
SignUp.propTypes = {
	route: PropTypes.object
}

export default SignUp
