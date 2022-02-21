import React, { lazy } from 'react'

import ImportantIcon from 'components/svg/common/ImportantIcon'
import FavoritesIcon from 'components/svg/common/FavoritesIcon'

import COLORS from 'constants/colors'

import * as Styled from './styledCard'

const Card = ({ id, img, label, isImportant, isFavorites }) => {
	const importantIcon = isImportant && <ImportantIcon color={COLORS.light} />
	const favoritesIcon = isFavorites && <FavoritesIcon color={COLORS.primary} />

	return (
		<Styled.CardWrapper id={id}>
			<Styled.CardBackground/>
			<Styled.CardLabel isImportant={isImportant}>
				<Styled.CardLabelIconWrapper>
					{importantIcon}
				</Styled.CardLabelIconWrapper>
				<Styled.CardLabelText isImportant={isImportant}>
					{label}
				</Styled.CardLabelText>
			</Styled.CardLabel>
			<Styled.CardFavoritesIconWrapper>
				{favoritesIcon}
			</Styled.CardFavoritesIconWrapper>
		</Styled.CardWrapper>
	)
}

export default Card
