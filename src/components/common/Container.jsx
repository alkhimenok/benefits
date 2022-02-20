import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import UNITS from 'constants/units'

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.View`
	padding: 0 ${UNITS.lg};
`

Container.propTypes = {
	children: PropTypes.node.isRequired
}

export default Container
