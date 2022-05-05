import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const List = ({
	data,
	renderItem,
	listEmptyComponent,
	contentContainerStyle,
	isReturnScrollToStart,
	isHorizontal
}) => {
	const scroll = useRef()

	const scrollToItem = (index, viewOffset) => {
		scroll.current.scrollToIndex({ animated: true, index, viewOffset })
	}

	useEffect(() => isReturnScrollToStart && scrollToItem(0), [])

	return (
		<ListWrapper
			ref={scroll}
			data={data}
			renderItem={({ item, index }) => renderItem(item, index, scrollToItem)}
			ListEmptyComponent={listEmptyComponent}
			keyExtractor={(item, index) => item + index}
			contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
			horizontal={isHorizontal}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
		/>
	)
}

const ListWrapper = styled.FlatList``

List.defaultProps = {
	data: [],
	renderItem: <></>,
	listEmptyComponent: <></>,
	contentContainerStyle: {},
	isReturnScrollToStart: false,
	isHorizontal: false
}
List.propTypes = {
	data: PropTypes.array,
	renderItem: PropTypes.func,
	listEmptyComponent: PropTypes.object,
	contentContainerStyle: PropTypes.object,
	isReturnScrollToStart: PropTypes.bool,
	isHorizontal: PropTypes.bool
}

export default List
