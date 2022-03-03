import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/UI/icon/Icon'

import COLORS from 'globalStyles/colors'

import * as Styled from './styledLabel'

const Label = ({ title, isImportant, isFixed }) => {
	return (
		<Styled.LabelWrapper isImportant={isImportant} isFixed={isFixed}>
			{isImportant ? (
				<Styled.LabelIconWrapper>
					<Icon
						name={'important'}
						width={16}
						height={16}
						color={COLORS.light}
						isOnlyIcon={true}
					/>
				</Styled.LabelIconWrapper>
			) : null}
			<Styled.LabelTitle>{title}</Styled.LabelTitle>
		</Styled.LabelWrapper>
	)
}

Label.propTypes = {
	title: PropTypes.string.isRequired,
	isImportant: PropTypes.bool,
	isFixed: PropTypes.bool
}

export default Label
