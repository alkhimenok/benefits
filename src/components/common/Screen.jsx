import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Screen = ({ children }) => {
	return <ScreenWrapper>{children}</ScreenWrapper>
}

const ScreenWrapper = styled.View`
	flex: 1;
`

Screen.propTypes = {
	children: PropTypes.node.isRequired
}

export default Screen
