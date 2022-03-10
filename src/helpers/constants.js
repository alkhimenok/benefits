const optionList = [
	{
		title: 'Все скидки',
		icon: { name: 'important', position: 'start' },
		isFocused: true
	},
	{
		title: 'Еда и напитки',
		isFocused: false
	},
	{
		title: 'Здоровье',
		isFocused: false
	},
	{
		title: 'Обучение и хобби',
		isFocused: false
	},
	// {
	// 	title: 'Красота',
	// 	isImportant: false,
	// 	isFocused: false,
	// 	isDisabled: true
	// },
	// {
	// 	title: 'Спорт',
	// 	isImportant: false,
	// 	isFocused: false,
	// 	isDisabled: true
	// },
	{
		title: 'Одежда',
		isImportant: false,
		isFocused: false
	}
	// {
	// 	title: 'Услуги',
	// 	isImportant: false,
	// 	isFocused: false,
	// 	isDisabled: true
	// }
]

const imageSourceList = {
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

const iconsSourceList = {
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

export { optionList, imageSourceList, iconsSourceList }
