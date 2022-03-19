import React from 'react'
import Image from 'components/UI/image/Image'
import Text from 'components/UI/text/Text'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import * as S from './styledEmptyFavorites'

const EmptyFavorites = () => {
	return (
		<S.EmptyFavoritesWrapper>
			<S.EmptyFavoritesImageWrapper>
				<Image name={'emptyFavorites'} resizeMode={'contain'} />
			</S.EmptyFavoritesImageWrapper>
			<S.EmptyFavoritesTitleWrapper>
				<Text variation={'h2'} fontWeight={WEIGHT.bold}>
					Нет избранного
				</Text>
			</S.EmptyFavoritesTitleWrapper>
			<S.EmptyFavoritesSubtitleWrapper>
				<Text variation={'text2'} textAlign={'center'} color={COLORS.paragraph}>
					Чтобы добавить любимые скидки, просто{'\n'}нажими на иконку 💙️ в
					карточке
				</Text>
			</S.EmptyFavoritesSubtitleWrapper>
		</S.EmptyFavoritesWrapper>
	)
}

export default EmptyFavorites
