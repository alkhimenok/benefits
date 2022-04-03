import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.View`
	padding: 0 ${UNITS_PX.baseX4};
`

Container.defaultProps = {
	children: <></>
}
Container.propTypes = {
	children: PropTypes.node
}

export default Container
