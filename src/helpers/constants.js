import { Dimensions } from 'react-native'
import COLORS from 'styles/colors'

const { width: CLIENT_WIDTH, height: CLIENT_HEIGHT } = Dimensions.get('window')
const DESIGN_CLIENT_WIDTH = 375
const DESIGN_CLIENT_HEIGHT = 812
const BASE = 4
const WIDTH_RATIO = CLIENT_WIDTH / DESIGN_CLIENT_WIDTH
const HEIGHT_RATIO = CLIENT_HEIGHT / DESIGN_CLIENT_HEIGHT
const RATIO = Math.min(WIDTH_RATIO, HEIGHT_RATIO)
const CONTAINER_INDENT = (BASE * 4) / RATIO
const SAFE_AREA = CLIENT_WIDTH - CONTAINER_INDENT * 2

const optionList = [
	{
		title: 'Все скидки',
		icon: { name: 'importantFill', position: 'start' },
		isFocused: true
	},
	{
		title: 'Еда и напитки'
	},
	{
		title: 'Здоровье'
	},
	{
		title: 'Обучение и хобби'
	},
	{
		title: 'Одежда'
	}
]

const fontSourceList = {
	primaryRegular: require('assets/fonts/SFUIDisplay-Regular.ttf'),
	primaryMedium: require('assets/fonts/SFUIDisplay-Medium.ttf'),
	primarySemiBold: require('assets/fonts/SFUIDisplay-Semibold.ttf'),
	primaryBold: require('assets/fonts/SFUIDisplay-Bold.ttf'),
	primaryBlack: require('assets/fonts/SFUIDisplay-Black.ttf')
}

const imageSourceList = {
	logo: require('assets/images/logo/logo.png'),
	about: require('assets/images/illustrations/about.png'),
	howItWork: require('assets/images/illustrations/howItWork.png'),
	ready: require('assets/images/illustrations/ready.png'),
	signIn: require('assets/images/illustrations/signIn.png'),
	signUp: require('assets/images/illustrations/signUp.png'),
	odin: require('assets/images/services/clothes/odin.png'),
	fasol: require('assets/images/services/educationAndHobbies/fasol.png'),
	onlineClass: require('assets/images/services/educationAndHobbies/onlineClass.png'),
	robolab: require('assets/images/services/educationAndHobbies/robolab.png'),
	skyeng: require('assets/images/services/educationAndHobbies/skyeng.png'),
	dominosPizza: require('assets/images/services/foodAndDrink/dominosPizza.png'),
	embargo: require('assets/images/services/foodAndDrink/embargo.png'),
	myata: require('assets/images/services/foodAndDrink/myata.png'),
	sprintBar: require('assets/images/services/foodAndDrink/sprintBar.png'),
	evo: require('assets/images/services/health/evo.png'),
	voka: require('assets/images/services/health/voka.png'),
	undefinedCard: require('assets/images/services/undefinedCard.png'),
	emptyFavorites: require('assets/images/services/emptyFavorites.png'),
	emptyAvatar: require('assets/images/profile/emptyAvatar.png')
}

const iconSourceList = {
	account: require('assets/icons/account.png'),
	alert: require('assets/icons/alert.png'),
	back: require('assets/icons/back.png'),
	bottom: require('assets/icons/bottom.png'),
	connection: require('assets/icons/connection.png'),
	continue: require('assets/icons/continue.png'),
	default: require('assets/icons/default.png'),
	denied: require('assets/icons/denied.png'),
	discount: require('assets/icons/discount.png'),
	email: require('assets/icons/email.png'),
	facebook: require('assets/icons/facebook.png'),
	favorites: require('assets/icons/favorites.png'),
	favoritesFill: require('assets/icons/favoritesFill.png'),
	fine: require('assets/icons/fine.png'),
	important: require('assets/icons/important.png'),
	importantFill: require('assets/icons/importantFill.png'),
	instagram: require('assets/icons/instagram.png'),
	left: require('assets/icons/left.png'),
	location: require('assets/icons/location.png'),
	more: require('assets/icons/more.png'),
	navigation: require('assets/icons/navigation.png'),
	options: require('assets/icons/options.png'),
	phone: require('assets/icons/phone.png'),
	reload: require('assets/icons/reload.png'),
	right: require('assets/icons/right.png'),
	search: require('assets/icons/search.png'),
	telegram: require('assets/icons/telegram.png'),
	top: require('assets/icons/top.png'),
	unavailable: require('assets/icons/unavailable.png'),
	vk: require('assets/icons/vk.png'),
	youtube: require('assets/icons/youtube.png'),
	close: require('assets/icons/close.png')
}

const underlayColorList = {
	[COLORS.transparent]: COLORS.transparent,
	[COLORS.light]: COLORS.paragraph,
	[COLORS.lightTransparent]: COLORS.paragraph,
	[COLORS.dark]: COLORS.paragraph,
	[COLORS.darkTransparent]: COLORS.paragraph,
	[COLORS.primary]: COLORS.primaryDark,
	[COLORS.primaryTransparent]: COLORS.primaryDark,
	[COLORS.secondary]: COLORS.secondaryDark,
	[COLORS.secondaryTransparent]: COLORS.secondaryDark,
	[COLORS.success]: COLORS.successDark,
	[COLORS.successTransparent]: COLORS.successDark,
	[COLORS.danger]: COLORS.dangerDark,
	[COLORS.dangerTransparent]: COLORS.dangerDark,
	[COLORS.warning]: COLORS.warningDark,
	[COLORS.warningTransparent]: COLORS.warningDark,
	[COLORS.neutral]: COLORS.neutralDark,
	[COLORS.neutralTransparent]: COLORS.neutralDark
}

export {
	CLIENT_WIDTH,
	CLIENT_HEIGHT,
	DESIGN_CLIENT_WIDTH,
	DESIGN_CLIENT_HEIGHT,
	BASE,
	WIDTH_RATIO,
	HEIGHT_RATIO,
	RATIO,
	CONTAINER_INDENT,
	SAFE_AREA,
	optionList,
	fontSourceList,
	imageSourceList,
	iconSourceList,
	underlayColorList
}
