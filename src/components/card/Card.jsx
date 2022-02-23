import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/UI/image/Image'
import Label from './label/Label'

import { getCurrentCardIcon } from './cardIcon'
import * as Styled from './styledCard'

const Card = ({
	name,
	title,
	label,
	isImportant,
	isFavorites,
	isLarge,
	isContainsMore,
	onPress
}) => {
	return (
		<Styled.CardWrapper isLarge={isLarge} onPress={onPress}>
			<Styled.CardImageWrapper>
				<Image name={name} isRounded={true} isLarge={isLarge} />
				<Styled.CardLabelsWrapper>
					<Label title={label} isImportant={isImportant} isFixed={false} />
					{isContainsMore ? (
						<Styled.CardMoreIconWrapper>
							{getCurrentCardIcon('more')}
						</Styled.CardMoreIconWrapper>
					) : null}
				</Styled.CardLabelsWrapper>
				{isFavorites ? (
					<Styled.CardFavoritesIconWrapper>
						{getCurrentCardIcon('favorites')}
					</Styled.CardFavoritesIconWrapper>
				) : null}
			</Styled.CardImageWrapper>
			<Styled.CardTitle>{title}</Styled.CardTitle>
		</Styled.CardWrapper>
	)
}

Card.prototype = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	isLarge: PropTypes.bool,
	isContainsMore: PropTypes.bool,
	onPress: PropTypes.func
}

export default Card
