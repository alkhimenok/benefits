import React from 'react'
import PropTypes from 'prop-types'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import Container from 'components/common/Container'
import Button from 'components/UI/button/Button'
import Text from 'components/UI/text/Text'
import Card from 'components/card/Card'
import * as Styled from './styledList'

const List = observer(({ navigation }) => {
	const { data, focused } = useStore().filtration
	const { length } = data
	const isVertical = length === 1
	const renderData = toJS(data).map((section) => {
		section.data.map((card) => {
			card.onImagePres = () => navigation.navigate('deployed', card)
			card.onToggleToFavorites = () => console.log('toggle to favorites')
			card.onShowMore = () => console.log('show more')
			card.onBack = () => navigation.goBack()
			card.onActiveBenefit = () => console.log('active benefit')

			return card
		})

		return section
	})
	const lastAddedList = renderData
		.map((item) => item.data)
		.flat()
		.sort((a, b) => a.dateAdded - b.dateAdded)
		.slice(0, 5) // last five added cards
		.map((item) => ({ ...item, isLarge: true }))
	const correctData = [
		{
			title: 'Новинки',
			data: lastAddedList
		},
		...renderData.map((section) => {
			const displayCard = 3
			const cardsLeft = section.data.length - displayCard
			const newData = [
				...section.data.slice(0, displayCard),
				{
					title: `Показать ${cardsLeft <= 0 ? 'все' : `еще ${cardsLeft}`}`,
					isEmpty: true,
					onImagePres: () => focused(section.title)
				}
			]

			return { title: section.title, data: newData }
		})
	]

	return (
		<Styled.ListWrapper>
			<Styled.ListServiceSections
				isVertical={isVertical}
				sections={isVertical ? renderData : correctData}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={isVertical ? { paddingVertical: 24 } : { paddingVertical: 8 }}
				keyExtractor={(item, index) => item + index}
				renderSectionHeader={({ section }) => (
					<Styled.ListService isVertical={isVertical}>
						<Container>
							<Styled.ListTitleWrapper isVertical={isVertical}>
								<Text type={isVertical ? 'h1' : 'h2'}>{section.title}</Text>
								{isVertical || section.title === 'Новинки' || (
									<Button
										title={'Все'}
										isEmpty={true}
										onPress={() => focused(section.title)}
									/>
								)}
							</Styled.ListTitleWrapper>
						</Container>
						{isVertical || (
							<Styled.ListServiceItems
								data={section.data}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={{ paddingHorizontal: 16 }}
								keyExtractor={(item, index) => item + index}
								renderItem={({ item, index }) => (
									<Styled.ListCardWrapper index={index} isVertical={isVertical}>
										<Card
											name={item.name}
											title={item.title}
											label={item.label}
											isImportant={item.isImportant}
											isFavorites={item.isFavorites}
											isContainsMore={item.isContainsMore}
											isLarge={item.isLarge}
											isEmpty={item.isEmpty}
											onImagePress={item.onImagePres}
										/>
									</Styled.ListCardWrapper>
								)}
							/>
						)}
					</Styled.ListService>
				)}
				renderItem={({ item, index }) =>
					isVertical && (
						<Container>
							<Styled.ListCardWrapper index={index} isVertical={isVertical}>
								<Card
									name={item.name}
									title={item.title}
									label={item.label}
									description={item.description}
									isImportant={item.isImportant}
									isFavorites={item.isFavorites}
									isContainsMore={item.isContainsMore}
									isFull={true}
									onImagePress={item.onImagePres}
								/>
							</Styled.ListCardWrapper>
						</Container>
					)
				}
			/>
		</Styled.ListWrapper>
	)
})

List.propTypes = {
	navigation: PropTypes.object.isRequired
}

export default List
