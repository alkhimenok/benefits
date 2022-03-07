import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.View`
	padding: 0 ${UNITS.baseX4};
`

Container.propTypes = {
	children: PropTypes.node.isRequired
}

export default Container
