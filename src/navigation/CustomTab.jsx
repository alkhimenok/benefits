import React from 'react'
import PropTypes from 'prop-types'

import { getTabOptions } from './tabOptions'
import * as Styled from './styledCustomTab'

const CustomTab = ({ name, focused }) => {
	const { currentColor, currentIcon } = getTabOptions(name, focused)

	return (
		<Styled.TabWrapper>
			<Styled.TabIconWrapper>{currentIcon}</Styled.TabIconWrapper>
			<Styled.TabName color={currentColor}>{name}</Styled.TabName>
		</Styled.TabWrapper>
	)
}

CustomTab.propTypes = {
	name: PropTypes.string.isRequired,
	focused: PropTypes.bool.isRequired
}

export default CustomTab
