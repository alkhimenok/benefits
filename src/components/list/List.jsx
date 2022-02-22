import React from 'react'

import Card from 'components/card/Card'

import * as Styled from './styledList'
import { FlatList, SectionList, Text } from 'react-native'

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
		<SectionList
			stickySectionHeadersEnabled={false}
			sections={data}
			renderSectionHeader={({ section }) => (
				<>
					<Text>{section.title}</Text>
					<FlatList
						data={section.data}
						horizontal
						renderItem={({ item }) => (
							<Card
								name={item.name}
								title={item.title}
								label={item.label}
								isImportant={item.isImportant}
								isFavorites={item.isFavorites}
								isContainsMore={item.isContainsMore}
							/>
						)}
					/>
				</>
			)}
			renderItem={({ item }) => null}
		/>
	)
}

export default List
