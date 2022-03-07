import React from 'react'
import PropTypes from 'prop-types'
import { getTabOptions } from './tabOptions'
import * as Styled from './styledCustomTab'

const CustomTab = ({ name, isFocused }) => {
	const { color, icon } = getTabOptions(name, isFocused)

	return (
		<Styled.TabWrapper>
			<Styled.TabIconWrapper pointerEvents={'none'}>
				{icon}
			</Styled.TabIconWrapper>
			<Styled.TabName color={color}>{name}</Styled.TabName>
		</Styled.TabWrapper>
	)
}

CustomTab.propTypes = {
	name: PropTypes.string.isRequired,
	isFocused: PropTypes.bool.isRequired
}

export default CustomTab
