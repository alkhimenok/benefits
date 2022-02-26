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
	description,
	more,
	conditionList,
	linkList,
	photoList,
	isFavorites,
	isImportant,
	isContainsMore,
	isLarge,
	isFull,
	isDeployed,
	onPress
}) => {
	const isRounded = !isDeployed

	return (
		<Styled.CardWrapper
			isLarge={isLarge}
			isFull={isFull}
			isDeployed={isDeployed}
			onPress={onPress}
		>
			<Styled.CardImageWrapper
				isLarge={isLarge}
				isFull={isFull}
				isDeployed={isDeployed}
			>
				<Image name={name} isContain={false} isRounded={isRounded} />
				{isFavorites || isFull ? (
					<Styled.CardFavoritesIconWrapper
						isLarge={isLarge}
						isFull={isFull}
						isDeployed={isDeployed}
					>
						{getCurrentCardIcon('favorites', isFavorites)}
					</Styled.CardFavoritesIconWrapper>
				) : null}
				<Styled.CardLabelsWrapper isLarge={isLarge} isFull={isFull}>
					<Label title={label} isImportant={isImportant} isFixed={isDeployed} />
					{isContainsMore ? (
						<Styled.CardMoreIconWrapper>
							{getCurrentCardIcon('more', isDeployed)}
						</Styled.CardMoreIconWrapper>
					) : null}
				</Styled.CardLabelsWrapper>
			</Styled.CardImageWrapper>
			<Styled.CardAbout isDeployed={isDeployed}>
				{isLarge ? null : (
					<Styled.CardTitle isFull={isFull} isDeployed={isDeployed}>
						{title}
					</Styled.CardTitle>
				)}
				{isFull ? (
					<Styled.CardDescription>{description}</Styled.CardDescription>
				) : null}
			</Styled.CardAbout>

			{/* <Styled.CardImageWrapper>
			<Image name={name} isRounded={true} isLarge={isLarge} isDeployed={isDeployed} />
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
		{isDeployed ? (
			<Styled.CardDescription>{description}</Styled.CardDescription>
		) : null} */}
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
