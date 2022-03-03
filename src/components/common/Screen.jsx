import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import COLORS from 'globalStyles/colors'

const Screen = ({ children }) => {
	const barHeight = useBottomTabBarHeight()

	return <ScreenWrapper barHeight={barHeight}>{children}</ScreenWrapper>
}

const ScreenWrapper = styled.View`
	flex: 1;
	/* padding: 0 0 ${({ barHeight }) => `${barHeight}px`} 0; */
	background-color: ${COLORS.light};
`

Screen.propTypes = {
	children: PropTypes.node.isRequired
}

export default Screen
