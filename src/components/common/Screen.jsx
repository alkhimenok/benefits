import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import COLORS from 'styles/colors'

const Screen = ({ children }) => {
	return <ScreenWrapper>{children}</ScreenWrapper>
}

const ScreenWrapper = styled.View`
	flex: 1;
	background-color: ${COLORS.light};
`

Screen.defaultProps = {
	children: <></>
}
Screen.propTypes = {
	children: PropTypes.node
}

export default Screen
