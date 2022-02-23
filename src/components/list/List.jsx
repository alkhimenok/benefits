import React from 'react'

import Container from 'components/common/Container'
import Card from 'components/card/Card'

import data from 'database'

import * as Styled from './styledList'

const List = () => {
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
