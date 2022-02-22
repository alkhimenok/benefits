import React from 'react'

import Image from 'components/UI/image/Image'
import Icon from 'components/UI/icon/Icon'
import Label from './label/Label'

import COLORS from 'constants/colors'

import * as Styled from './styledCard'

const Card = ({
	name,
	title,
	label,
	width,
	height,
	isImportant,
	isFavorites,
	isContainsMore,
	onPress
}) => {
	return (
		<Styled.CardWrapper width={width} onPress={onPress}>
			<Styled.CardContent>
				<Styled.CardImageWrapper width={width} height={height}>
					<Image name={name} isRounded={true} />
				</Styled.CardImageWrapper>
				<Styled.CardLabelsWrapper>
					<Label title={label} isImportant={isImportant} isFixed={false} />
					{isContainsMore ? (
						<Styled.CardMoreIconWrapper>
							<Icon
								name={'more'}
								width={13}
								height={13}
								color={COLORS.light}
								backgroundColor={COLORS.dark}
							/>
						</Styled.CardMoreIconWrapper>
					) : null}
				</Styled.CardLabelsWrapper>
				{isFavorites ? (
					<Styled.CardFavoritesIconWrapper>
						<Icon
							name={'favorites'}
							width={15}
							height={15}
							color={COLORS.primary}
							backgroundColor={COLORS.lightTransparent}
							isCircle={true}
							isLarge={true}
						/>
					</Styled.CardFavoritesIconWrapper>
				) : null}
			</Styled.CardContent>
			<Styled.CardTitle>{title}</Styled.CardTitle>
		</Styled.CardWrapper>
	)
}

export default Card
