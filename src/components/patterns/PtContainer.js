import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import UNITS from 'styles/units'

const PtContainer = ({ children }) => {
	return <Container>{children}</Container>
}

const Container = styled.View`
	padding: 0 ${UNITS.baseX4};
`

PtContainer.propTypes = {
	children: PropTypes.node.isRequired
}

export default PtContainer
