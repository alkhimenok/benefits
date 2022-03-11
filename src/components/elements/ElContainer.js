import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import UNITS from 'styles/units'

const ElContainer = ({ children }) => {
	return <Container>{children}</Container>
}

const Container = styled.View`
	padding: 0 ${UNITS.baseX4};
`

ElContainer.propTypes = {
	children: PropTypes.node.isRequired
}

export default ElContainer
