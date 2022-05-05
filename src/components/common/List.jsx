import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const List = ({
	data,
	renderItem,
	listHeader,
	listFooter,
	listEmpty,
	contentContainerStyle,
	isReturnScrollToStart,
	isHorizontal,
	onRefresh
}) => {
	const [refresh, setRefresh] = useState(false)
	const scroll = useRef()

	const scrollToItem = (index, viewOffset) => {
		scroll.current.scrollToIndex({ animated: true, index, viewOffset })
	}

	const handleRefresh = () => {
		setRefresh(true)
		onRefresh()
		setRefresh(false)
	}

	useEffect(() => isReturnScrollToStart && scrollToItem(0), [])

	return (
		<ListWrapper
			ref={scroll}
			data={data}
			renderItem={({ item, index }) => renderItem(item, index, scrollToItem)}
			ListHeaderComponent={listHeader}
			ListFooterComponent={listFooter}
			ListEmptyComponent={listEmpty}
			keyExtractor={(item, index) => item + index}
			contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
			horizontal={isHorizontal}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			refreshing={refresh}
			onRefresh={handleRefresh}
		/>
	)
}

const ListWrapper = styled.FlatList``

List.defaultProps = {
	data: [],
	renderItem: () => null,
	listHeader: <></>,
	listFooter: <></>,
	listEmpty: <></>,
	contentContainerStyle: {},
	isReturnScrollToStart: false,
	isHorizontal: false,
	onRefresh: () => null
}
List.propTypes = {
	data: PropTypes.array,
	renderItem: PropTypes.func,
	listHeader: PropTypes.node,
	listFooter: PropTypes.node,
	listEmpty: PropTypes.node,
	contentContainerStyle: PropTypes.object,
	isReturnScrollToStart: PropTypes.bool,
	isHorizontal: PropTypes.bool,
	onRefresh: PropTypes.func
}

export default List
