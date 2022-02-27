import React from 'react'

import Container from 'components/common/Container'
import Card from 'components/card/Card'

import data from 'database'

import * as Styled from './styledList'

const List = ({navigation}) => {
	return (
				// <Card
				// 	name={'myata'}
				// 	title={'Мята-центр кальянная'}
				// 	label={'−20% на кальяны'}
				// 	description={'Лаунж-бар в центре города с богатой чайной картой, авторскими коктейлями и кальяном'}
				// 	// more={'Кальянная «Мята Lounge Center» — это необычное заведение, которое понравится людям, настроенным на комфортный отдых в приятной обстановке. Меню, дизайнерское оформление, внимательное обслуживание — все располагает к релаксу и расслаблению. Это хорошее место для проведения веселого пятничного или субботнего вечера в компании друзей.'}
				// 	// conditionList={['-20% только на кальяны по адресу Минск, ул. Независимости, 19', 'Для получения скидки нужно показать приложение перед оплатой счета. Далее нажать кнопку активации скидки.', 'Кнопка должна быть активной']}
				// 	// linkList={[]}
				// 	// photoList={[]}
				// 	isFavorites={false}
				// 	isImportant={false}
				// 	isContainsMore={false}
				// 	isLarge={false}
				// 	isFull={false}
				// 	// isDeployed={false}
				// 	onPress={() => console.log('click')}
				// />
		<Styled.ListWrapper>
			<Container>
				<Styled.ListServiceSections
					sections={data}
					stickySectionHeadersEnabled={false}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => item + index}
					renderSectionHeader={({ section }) => (
						<Styled.ListService>
							<Styled.ListServiceTitle>{section.title}</Styled.ListServiceTitle>
							<Styled.ListServiceItems
								data={section.data}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								keyExtractor={(item, index) => item + index}
								renderItem={({ item, index }) => (
									<Styled.ListCardWrapper index={index}>
										<Card
											name={item.name}
											title={item.title}
											label={item.label}
											isImportant={item.isImportant}
											isFavorites={item.isFavorites}
											isContainsMore={item.isContainsMore}
											onPress={() => navigation.navigate('deployed')}
										/>
									</Styled.ListCardWrapper>
								)}
							/>
						</Styled.ListService>
					)}
					renderItem={({ item }) => null}
				/>
			</Container>
		</Styled.ListWrapper>
	)
}

export default List
