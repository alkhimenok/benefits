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

	useEffect(() => {
		isReturnScrollToStart && scrollToItem(0)
	}, [])

	const scrollToItem = (index, viewOffset) => {
		scroll.current.scrollToIndex({ animated: true, index, viewOffset })
	}

	return (
		<ListWrapper
			ref={scroll}
			data={data}
			renderItem={({ item, index }) => renderItem(item, index, scrollToItem)}
			ListEmptyComponent={listEmptyComponent}
			keyExtractor={(item, index) => item + index}
			horizontal={isHorizontal}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
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
