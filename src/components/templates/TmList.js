import React from 'react'
import PropTypes from 'prop-types'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import styled from 'styled-components/native'
import ElButton from 'elements/ElButton'
import ElText from 'elements/ElText'
import ElContainer from 'elements/ElContainer'
import PtCard from 'patterns/PtCard'
import UNITS from 'styles/units'
import WEIGHT from 'styles/weight'

const TmList = observer(({ navigation }) => {
	const { data, focused } = useStore().filtration
	const isVertical = data.length === 1
	const renderData = getRenderData(data, isVertical, navigation, focused)
	const titleVariation = isVertical ? 'h1' : 'h2'

	return (
		<ListWrapper>
			<Services
				sections={renderData}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingVertical: isVertical ? 24 : 8 }}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item, index }) =>
					isVertical && (
						<ElContainer>
							<CardWrapper isVertical={isVertical} index={index}>
								{getCardComponent('full', item)}
							</CardWrapper>
						</ElContainer>
					)
				}
				renderSectionHeader={({ section }) => (
					<SubListWrapper isVertical={isVertical}>
						<ElContainer>
							<Header
								onPress={() =>
									section.title === 'Новинки' || focused(section.title)
								}
							>
								<ElText variation={titleVariation} fontWeight={WEIGHT.bold}>
									{section.title}
								</ElText>
								{isVertical || section.title === 'Новинки' || (
									<ElButton
										variation={'small'}
										type={'empty'}
										title={'Все'}
										onPress={() => focused(section.title)}
									/>
								)}
							</Header>
						</ElContainer>
						{isVertical || (
							<SubList
								data={section.data}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={{ paddingHorizontal: 16 }}
								keyExtractor={(item, index) => item + index}
								renderItem={({ item, index }) => (
									<CardWrapper isVertical={isVertical} index={index}>
										{getCardComponent(item.variation, item)}
									</CardWrapper>
								)}
							/>
						)}
					</SubListWrapper>
				)}
			/>
		</ListWrapper>
	)
})

const ListWrapper = styled.View`
	flex: 1;
`
const Services = styled.SectionList``
const SubListWrapper = styled.View`
	margin: ${({ isVertical }) => (isVertical ? 0 : UNITS.baseX4)} 0; /* FIXME: last margin */
`
const SubList = styled.FlatList``
const Header = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0 0 ${({ isVertical }) => (isVertical ? UNITS.baseX6 : UNITS.baseX4)}
		0;
`
const CardWrapper = styled.View`
	${({ index, isVertical }) =>
		(!isVertical && `margin: 0 0 0 ${index === 0 ? 0 : UNITS.baseX2};`) ||
		`margin: ${index === 0 ? 0 : UNITS.baseX8} 0 0 0;`}
`

const getCardComponent = (
	variation,
	{
		name,
		title,
		label,
		description,
		more,
		isEmpty,
		isImportant,
		isFavorites,
		isContainsMore,
		onImagePres
	}
) => (
	<PtCard
		variation={variation}
		name={name}
		title={title}
		label={label}
		description={description}
		more={more}
		isEmpty={isEmpty}
		isImportant={isImportant}
		isFavorites={isFavorites}
		isContainsMore={isContainsMore}
		onImagePres={onImagePres}
	/>
)

const getRenderData = (data, isVertical, navigation, focused) => {
	const correctData = toJS(data).map((section) => {
		section.data.map((card) => {
			const startData = { ...card }
			card.onImagePres = () => navigation.navigate('serviceInfo', startData)

			return card
		})

		return section
	})

	if (isVertical) {
		return correctData
	}

	const lastAddedList = correctData
		.map((item) => item.data)
		.flat()
		.sort((a, b) => a.dateAdded - b.dateAdded)
		.slice(0, 5) // last five added cards
		.map((item) => ({ ...item, variation: 'large' }))

	const fullData = [
		{
			title: 'Новинки',
			data: lastAddedList
		},
		...correctData.map((section) => {
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

	return fullData
}

export default TmList
