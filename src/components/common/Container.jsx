import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { CONTAINER_INDENT } from 'helpers/constants'
import { withPX } from 'styles/units'

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.View`
	flex: 1;
	padding: 0 ${withPX(CONTAINER_INDENT)};
`

Container.defaultProps = {
	children: <></>
}
Container.propTypes = {
	children: PropTypes.node
}

export default Container
