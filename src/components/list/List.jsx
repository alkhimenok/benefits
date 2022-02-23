import React from 'react'

import Container from 'components/common/Container'
import Card from 'components/card/Card'

import * as Styled from './styledList'

const data = [
	{
		'title': 'Еда и напитки',
		'data': [
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			}
		]
	},
	{
		'title': 'Еда и напитки',
		'data': [
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			}
		]
	},
	{
		'title': 'Еда и напитки',
		'data': [
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			}
		]
	},
	{
		'title': 'Еда и напитки',
		'data': [
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			}
		]
	},
	{
		'title': 'Еда и напитки',
		'data': [
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			}
		]
	},
	{
		'title': 'Еда и напитки',
		'data': [
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			},
			{
				'name': 'odin',
				'title': 'EMBARGO Coctail Bar',
				'label': '-25%',
				'isImportant': false,
				'isFavorites': false,
				'isContainsMore': false
			}
		]
	}
]

const List = () => {
	return (
		<Container>
			<Styled.ListWrapper>
				<Styled.ListSections
					stickySectionHeadersEnabled={false}
					sections={data}
					keyExtractor={(item, index) => item + index}
					showsVerticalScrollIndicator={false}
					renderSectionHeader={({ section }) => (
						<Styled.ListSection>
							<Styled.ListSectionTitle>{section.title}</Styled.ListSectionTitle>
							<Styled.ListSectionList
								data={section.data}
								horizontal
								keyExtractor={(item, index) => item + index}
								showsHorizontalScrollIndicator={false}
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
						</Styled.ListSection>
					)}
					renderItem={({ item }) => null}
				/>
			</Styled.ListWrapper>
		</Container>
	)
}

export default List
