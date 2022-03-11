import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import ElIcon from 'elements/ElIcon'
import ElImage from 'elements/ElImage'
import ElLabel from 'elements/ElLabel'
import ElText from 'elements/ElText'
import UNITS from 'styles/units'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const PtCard = ({
	variation,
	name,
	title,
	label,
	description,
	more,
	isEmpty,
	isImportant,
	isFavorites,
	isContainsMore
}) => {
	const isFull = variation === 'full'
	const isLarge = variation === 'large'
	const titleVariation = isFull ? 'h3' : 'text2'
	const titleWeight = isFull ? WEIGHT.bold : WEIGHT.semiBold
	const favoritesIconName = isFavorites ? 'favoritesFill' : 'favorites'
	const clientWidth =
		Dimensions.get('window').width - parseInt(UNITS.baseX4) * 2
	const { width, height, top, right, bottom, left, marginTop, color } =
		getCardOptions(variation, clientWidth, isFavorites)

	return (
		<Card cardWidth={width}>
			<ImageWrapper
				imageHeight={height}
				isContour={isEmpty}
				// onPress={handleShowService}
			>
				{isEmpty ? (
					<ElText
						variation={titleVariation}
						fontWeight={titleWeight}
						color={COLORS.paragraph}
					>
						{title}
					</ElText>
				) : (
					<>
						<ElImage name={name} resizeMode={'contain'} isRounded={true} />
						{(isFavorites || isFull) && (
							<IconFavoritesWrapper top={top} right={right}>
								<ElIcon
									variation={'middle'}
									name={favoritesIconName}
									width={'16px'}
									height={'15px'}
									color={color}
									backgroundColor={COLORS.lightTransparent}
									isCircle={true}
									// onPress={handleSwitchFavorites}
								/>
							</IconFavoritesWrapper>
						)}
						<LabelsWrapper bottom={bottom} left={left}>
							<ElLabel
								title={label}
								icon={
									isImportant && { name: 'importantFill', position: 'start' }
								}
							/>
							{isContainsMore && (
								<IconMoreWrapper>
									<ElIcon
										variation={'small'}
										name={'more'}
										width={'6px'}
										height={'13px'}
										color={COLORS.light}
										backgroundColor={COLORS.dark}
										isCircle={true}
										// onPress={handleShowMore}
									/>
								</IconMoreWrapper>
							)}
						</LabelsWrapper>
					</>
				)}
			</ImageWrapper>
			{!isLarge && !isEmpty && (
				<TitleWrapper titleMarginTop={marginTop}>
					<ElText variation={titleVariation} fontWeight={titleWeight}>
						{title}
					</ElText>
				</TitleWrapper>
			)}
			{isFull && (
				<DescriptionWrapper>
					<ElText
						variation={'text2'}
						fontWeight={WEIGHT.regular}
						color={COLORS.paragraph}
						numberOfLines={2}
					>
						{description}
					</ElText>
				</DescriptionWrapper>
			)}
		</Card>
	)
}

const Card = styled.View`
	width: ${({ cardWidth }) => cardWidth};
`
const ImageWrapper = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	height: ${({ imageHeight }) => imageHeight};
	border: ${({ isContour }) =>
		isContour ? `${BORDERS.thin} ${COLORS.neutralDark}` : 'none'};
	border-radius: ${({ isContour }) =>
		isContour ? BORDERS.radiusSuperellipse : 'none'};
`
const TitleWrapper = styled.View`
	margin: ${({ titleMarginTop }) => titleMarginTop} 0 0 0;
`
const DescriptionWrapper = styled.View`
	margin: ${UNITS.baseX1} ${UNITS.baseX10} 0 0;
`
const IconFavoritesWrapper = styled.View`
	position: absolute;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
`
const LabelsWrapper = styled.View`
	position: absolute;
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	align-items: center;
	flex-direction: row;
`
const IconMoreWrapper = styled.View`
	margin: 0 0 0 ${UNITS.baseX2};
`

const getCardOptions = (variation, clientWidth, isFavorites) => {
	const { top, right, bottom, left, currentWidth, marginTop } = {
		large: {
			top: UNITS.baseX3,
			right: UNITS.baseX3,
			bottom: UNITS.baseX3,
			left: UNITS.baseX3,
			currentWidth: (clientWidth / 100) * 80,
			marginTop: '0'
		},
		middle: {
			top: UNITS.baseX1,
			right: UNITS.baseX1,
			bottom: UNITS.baseX2,
			left: UNITS.baseX2,
			currentWidth: (clientWidth / 100) * 60,
			marginTop: UNITS.baseX2
		},
		full: {
			top: UNITS.baseX3,
			right: UNITS.baseX3,
			bottom: UNITS.baseX3,
			left: UNITS.baseX3,
			currentWidth: clientWidth,
			marginTop: UNITS.baseX4
		}
	}[variation]

	const aspectRatio = 304 / 170 // from design

	const { width, height } = {
		width: `${currentWidth}px`,
		height: `${currentWidth / aspectRatio}px`
	}

	const color = isFavorites ? COLORS.primary : COLORS.dark

	return { top, right, bottom, left, width, height, marginTop, color }
}

PtCard.defaultProps = {
	variation: 'middle',
	name: 'undefinedCard',
	title: '',
	label: '',
	descriptions: '',
	more: '',
	isEmpty: false,
	isImportant: false,
	isFavorites: false,
	isContainsMore: false
}
PtCard.prototype = {
	variation: PropTypes.string,
	name: PropTypes.string,
	title: PropTypes.string,
	label: PropTypes.string,
	descriptions: PropTypes.string,
	more: PropTypes.string,
	isEmpty: PropTypes.bool,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	isContainsMore: PropTypes.bool
}

export default PtCard
