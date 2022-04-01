import PropTypes from 'prop-types'
import * as S from './styledCard'
import Icon from 'components/UI/icon/Icon'
import Image from 'components/UI/image/Image'
import Label from 'components/UI/label/Label'
import Text from 'components/UI/text/Text'
import COLORS from 'styles/colors'
import { getCardOptions } from './cardOptions'

const Card = ({
	variation,
	name,
	title,
	label,
	descriptions,
	more,
	isEmpty,
	isImportant,
	isFavorites,
	isContainsMore,
	onImagePres
}) => {
	const favoritesIconName = isFavorites ? 'favoritesFill' : 'favorites'
	const labelIcon = isImportant
		? { name: 'importantFill', position: 'start' }
		: {}
	const { top, right, bottom, left, width, height, marginTop, color } =
		getCardOptions(variation, isFavorites)

	return (
		<S.CardWrapper>
			<S.CardImageWrapper
				activeOpacity={1}
				//
				imageHeight={height}
				isContour={isEmpty}
				onPress={onImagePres}
			>
				<Image name={name} resizeMode={'contain'} isRounded={true} />
				<S.CardFavoritesIconWrapper>
					<Icon
						variation={'middle'}
						name={favoritesIconName}
						width={'16px'}
						height={'15px'}
						// color={color}
						backgroundColor={COLORS.lightTransparent}
						isCircle={true}
					/>
				</S.CardFavoritesIconWrapper>
				<S.CardLabels>
					<Label title={label} icon={labelIcon} />
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
				</S.CardLabels>
			</S.CardImageWrapper>
			<S.CardTitleWrapper></S.CardTitleWrapper>
			<S.CardDescriptionWrapper></S.CardDescriptionWrapper>
		</S.CardWrapper>
	)
}

Card.defaultProps = {
	variation: 'middle',
	name: 'undefinedCard',
	title: '',
	label: '',
	descriptions: '',
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
	descriptions: PropTypes.string,
	more: PropTypes.string,
	isEmpty: PropTypes.bool,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	isContainsMore: PropTypes.bool,
	onImagePres: PropTypes.func
}

export default Card
