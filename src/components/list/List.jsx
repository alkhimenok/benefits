import React from 'react'
import { observer } from 'mobx-react-lite'

import Container from 'components/common/Container'
import Card from 'components/card/Card'

import data from 'database'

import { useStore } from 'providers/storeProvider'

import * as Styled from './styledList'

const List = observer(({ navigation }) => {
	const { currentOptionTitle } = useStore().filtration
	const isFiltered = currentOptionTitle !== 'Все скидки'

	if (isFiltered) {
		return (
			<Styled.ListWrapper>
				<Container>
					<Styled.ListServiceSections
						sections={data.filter(
							(item) => item.title === currentOptionTitle
						)}
						stickySectionHeadersEnabled={false}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => item + index}
						renderSectionHeader={({ section }) => (
							<Styled.ListServiceTitle isMain={true}>
								{section.title}
							</Styled.ListServiceTitle>
						)}
						renderItem={({ item, index }) => (
							// <Styled.ListCardWrapper index={index}>
							<Card
								name={item.name}
								title={item.title}
								label={item.label}
								isImportant={item.isImportant}
								isFavorites={item.isFavorites}
								isContainsMore={item.isContainsMore}
								isLarge={item.isLarge}
								isFull={true}
								onPress={() => navigation.navigate('deployed', item)}
							/>
							// </Styled.ListCardWrapper>
						)}
					/>
				</Container>
			</Styled.ListWrapper>
		)
	}
	return (
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
											isLarge={item.isLarge}
											onPress={() => navigation.navigate('deployed', item)}
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
})

export default List
