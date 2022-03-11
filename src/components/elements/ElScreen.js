import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import COLORS from 'styles/colors'

const ElScreen = ({ children }) => {
	return <Screen>{children}</Screen>
}

const Screen = styled.View`
	flex: 1;
	background-color: ${COLORS.light};
`

ElScreen.propTypes = {
	children: PropTypes.node.isRequired
}

export default ElScreen