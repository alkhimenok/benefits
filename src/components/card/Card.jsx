import PropTypes from 'prop-types'
import * as S from './styledCard'
import Icon from 'components/UI/icon/Icon'
import Image from 'components/UI/image/Image'
import Label from 'components/UI/label/Label'
import Text from 'components/UI/text/Text'
import COLORS from 'styles/colors'
import WEIGHT from 'styles/weight'
import { getCardOptions } from './cardOptions'

const Card = ({
	variation,
	name,
	title,
	label,
	description,
	more,
	isEmpty,
	isImportant,
	isFavorites,
	isContainsMore,
	onImagePres
}) => {
	const isFull = variation === 'full'
	const isLarge = variation === 'large'
	const titleVariation = isFull ? 'h3' : 'text2'
	const titleWeight = isFull ? WEIGHT.bold : WEIGHT.semiBold
	const favoritesIconName = isFavorites ? 'favoritesFill' : 'favorites'
	const labelIcon = isImportant
		? { name: 'importantFill', position: 'start' }
		: {}
	const { top, right, bottom, left, width, height, marginTop, color } =
		getCardOptions(variation, isFavorites)

	return (
		<S.CardWrapper cardWidth={width}>
			<S.CardImageWrapper
				activeOpacity={1}
				//
				imageHeight={height}
				isContour={isEmpty}
				onPress={onImagePres}
			>
				{isEmpty ? (
					<Text
						variation={titleVariation}
						fontWeight={titleWeight}
						color={COLORS.paragraph}
					>
						{title}
					</Text>
				) : (
					<>
						<Image name={name} resizeMode={'contain'} isRounded={true} />
						{(isFavorites || isFull) && (
							<S.CardFavoritesIconWrapper top={top} right={right}>
								<Icon
									variation={'middle'}
									name={favoritesIconName}
									width={'16px'}
									height={'15px'}
									color={color}
									backgroundColor={COLORS.lightTransparent}
									isCircle={true}
								/>
							</S.CardFavoritesIconWrapper>
						)}
						<S.CardLabels bottom={bottom} left={left}>
							<Label title={label} icon={labelIcon} />
							{isContainsMore && (
								<S.CardMoreIconWrapper>
									<Icon
										variation={'small'}
										name={'more'}
										width={'6px'}
										height={'13px'}
										color={COLORS.light}
										backgroundColor={COLORS.dark}
										isCircle={true}
									/>
								</S.CardMoreIconWrapper>
							)}
						</S.CardLabels>
					</>
				)}
			</S.CardImageWrapper>
			{!isLarge && !isEmpty && (
				<S.CardTitleWrapper titleMarginTop={marginTop}>
					<Text variation={titleVariation} fontWeight={titleWeight}>
						{title}
					</Text>
				</S.CardTitleWrapper>
			)}
			{isFull && (
				<S.CardDescriptionWrapper>
					<Text
						variation={'text2'}
						fontWeight={WEIGHT.regular}
						color={COLORS.paragraph}
						numberOfLines={2}
					>
						{description}
					</Text>
				</S.CardDescriptionWrapper>
			)}
		</S.CardWrapper>
	)
}

Card.defaultProps = {
	variation: 'middle',
	name: 'undefinedCard',
	title: '',
	label: '',
	description: '',
	more: '',
	isEmpty: false,
	isImportant: false,
	isFavorites: false,
	isContainsMore: false,
	onImagePres: () => console.log('card press')
}
Card.propTypes = {
	variation: PropTypes.string,
	name: PropTypes.string,
	title: PropTypes.string,
	label: PropTypes.string,
	description: PropTypes.string,
	more: PropTypes.string,
	isEmpty: PropTypes.bool,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	isContainsMore: PropTypes.bool,
	onImagePres: PropTypes.func
}

export default Card
