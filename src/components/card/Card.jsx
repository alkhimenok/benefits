import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/UI/image/Image'
import Label from 'components/UI/label/Label'

import { getCurrentCardIcon } from './cardIcon'
import * as Styled from './styledCard'

const Card = ({
	name,
	title,
	label,
	description,
	isFavorites,
	isImportant,
	isContainsMore,
	isLarge,
	isFull,
	onPress
}) => {
	return (
		<Styled.CardWrapper isLarge={isLarge} isFull={isFull} onPress={onPress}>
			<Styled.CardImageWrapper isLarge={isLarge} isFull={isFull}>
				<Image name={name} isContain={false} isRounded={true} />
				{isFavorites || isFull ? (
					<Styled.CardFavoritesIconWrapper isLarge={isLarge} isFull={isFull}>
						{getCurrentCardIcon('favorites', isFavorites)}
					</Styled.CardFavoritesIconWrapper>
				) : null}
				<Styled.CardLabelsWrapper isLarge={isLarge} isFull={isFull}>
					<Label title={label} isImportant={isImportant} />
					{isContainsMore ? (
						<Styled.CardMoreIconWrapper>
							{getCurrentCardIcon('more')}
						</Styled.CardMoreIconWrapper>
					) : null}
				</Styled.CardLabelsWrapper>
			</Styled.CardImageWrapper>
			<Styled.CardTitle>{title}</Styled.CardTitle>
			{isFull ? (
				<Styled.CardDescription>{description}</Styled.CardDescription>
			) : null}
		</Styled.CardWrapper>
	)
}

Card.prototype = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
	isFavorites: PropTypes.bool,
	isImportant: PropTypes.bool,
	isContainsMore: PropTypes.bool,
	isLarge: PropTypes.bool,
	isFull: PropTypes.bool,
	onPress: PropTypes.func
}

export default Card
