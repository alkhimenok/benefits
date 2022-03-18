import React from 'react'
import PropTypes from 'prop-types'
import { getTabOptions } from './tabOptions'
import * as S from './styledTab'

const Tab = ({ name, isFocused }) => {
	const { title, color, icon } = getTabOptions(name, isFocused)

	return (
		<S.TabWrapper>
			<S.TabIconWrapper pointerEvents={'none'}>{icon}</S.TabIconWrapper>
			<S.TabName color={color}>{title}</S.TabName>
		</S.TabWrapper>
	)
}

Tab.defaultProps = {
	name: '',
	isFocused: false
}
Tab.propTypes = {
	name: PropTypes.string.isRequired,
	isFocused: PropTypes.bool.isRequired
}

export default Tab
