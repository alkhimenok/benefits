import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import TRANSPARENCY from 'styles/transparency'

const List = ({
	data,
	renderItem,
	listEmptyComponent,
	isReturnScrollToStart,
	isScrollToSelected,
	isHorizontal
}) => {
	const scroll = useRef()

	useEffect(() => {
		isReturnScrollToStart && scrollToItem(0)
	}, [])

	const handlePress = (index) => {
		isScrollToSelected && scrollToItem(index)
	}

	const scrollToItem = (index) => {
		scroll.current.scrollToIndex({ animated: true, index })
	}

	return (
		<ListWrapper
			ref={scroll}
			data={data}
			renderItem={({ item, index }) => (
				<ListItem
					activeOpacity={TRANSPARENCY.visible}
					underlayColor={TRANSPARENCY.invisible}
					onPress={() => handlePress(index)}
				>
					{renderItem(item)}
				</ListItem>
			)}
			ListEmptyComponent={listEmptyComponent}
			keyExtractor={(item, index) => item + index}
			horizontal={isHorizontal}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1 }}
		/>
	)
}

const ListWrapper = styled.FlatList``
const ListItem = styled.TouchableHighlight``

List.defaultProps = {
	data: [],
	renderItem: <></>,
	listEmptyComponent: <></>,
	isReturnScrollToStart: false,
	isScrollToSelected: false,
	isHorizontal: false
}
List.propTypes = {
	data: PropTypes.array,
	renderItem: PropTypes.func,
	listEmptyComponent: PropTypes.object,
	isReturnScrollToStart: PropTypes.bool,
	isScrollToSelected: PropTypes.bool,
	isHorizontal: PropTypes.bool
}

export default List
