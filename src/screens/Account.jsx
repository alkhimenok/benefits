import React from 'react'
import ElScreen from 'elements/ElScreen'
import PtService from 'patterns/PtService'

const Account = () => {
	return (
		<ElScreen>
			<PtService
				name={'embargo'}
				title={'EMBARGO Coctail Bar'}
				label={'-20%'}
				description={
					'Лаунж-бар в центре города с богатой чайной картой, авторскими коктейлями и кальяном'
				}
				more={
					'Кальянная «Мята Lounge Center» — это необычное заведение, которое понравится людям, настроенным на комфортный отдых в приятной обстановке. Меню, дизайнерское оформление, внимательное обслуживание — все располагает к релаксу и расслаблению. Это хорошее место для проведения веселого пятничного или субботнего вечера в компании друзей.'
				}
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
			/>
		</ElScreen>
	)
}

export default Account
