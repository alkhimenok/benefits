import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import COLORS from 'globalStyles/colors'

const Screen = ({ children }) => {
	return <ScreenWrapper>{children}</ScreenWrapper>
}

const ScreenWrapper = styled.View`
	flex: 1;
	background-color: ${COLORS.light};
`

Screen.propTypes = {
	children: PropTypes.node.isRequired
}

export default Screen
