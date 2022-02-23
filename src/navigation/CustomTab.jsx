import React from 'react'
import PropTypes from 'prop-types'

import { getTabOptions } from './tabOptions'
import * as Styled from './styledCustomTab'

const CustomTab = ({ name, isFocused }) => {
	const { currentIcon, currentColor } = getTabOptions(name, isFocused)

	return (
		<Styled.TabWrapper>
			<Styled.TabIconWrapper pointerEvents='none'>
				{currentIcon}
			</Styled.TabIconWrapper>
			<Styled.TabName color={currentColor}>{name}</Styled.TabName>
		</Styled.TabWrapper>
	)
}

CustomTab.propTypes = {
	name: PropTypes.string.isRequired,
	isFocused: PropTypes.bool.isRequired
}

export default CustomTab
