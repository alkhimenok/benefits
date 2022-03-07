import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context'
import Screen from 'components/common/Screen'
import FilterBar from 'components/filterBar/FilterBar'
import Card from 'components/card/Card'

const Discount = ({ navigation }) => {
	return (
		<Screen>
			<SafeAreaView style={{ flex: 1 }}>
			<FilterBar />
			<Card
				name={'myata'}
				title={'Мята-центр кальянная'}
				label={'-20%'}
				description={
					'Лаунж-бар в центре города с богатой чайной картой, авторскими коктейлями и кальяном Лаунж-бар в центре города с богатой чайной картой, авторскими коктейлями и кальяном Лаунж-бар в центре города с богатой чайной картой, авторскими коктейлями и кальяном'
				}
				more={
					'Кальянная «Мята Lounge Center» — это необычное заведение, которое понравится людям, настроенным на комфортный отдых в приятной обстановке. Меню, дизайнерское оформление, внимательное обслуживание — все располагает к релаксу и расслаблению. Это хорошее место для проведения веселого пятничного или субботнего вечера в компании друзей.'
				}
				dateAdded={1646487951328}
				conditionList={[
					'-20% только на кальяны по адресу Минск, ул. Независимости, 19',
					'Для получения скидки нужно показать приложение перед оплатой счета. Далее нажать кнопку активации скидки.',
					'Кнопка должна быть активной'
				]}
				linkList={[
					{ 'connection': 'myata-lounge.by' },
					{ 'location': 'ул. Независимости, 19' },
					{ 'instagram': 'myata.lounge.center' },
					{ 'phone': '+375 29 123-45-67' }
				]}
				isImportant={true}
				isFavorites={true}
				isContainsMore={true}
				isLarge={false}
				isFull={false}
				isEmpty={false}
				isDeployed={false}
				onPress={() => console.log('deployed')}
			/>
			</SafeAreaView>
		</Screen>
	)
}

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
