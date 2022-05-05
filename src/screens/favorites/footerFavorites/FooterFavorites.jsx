import Button from 'components/UI/button/Button'
import * as S from './styledFooterFavorites'

const FooterFavorites = () => {
	return (
		<S.FooterFavoritesWrapper>
			<S.FooterFavoritesButtonWrapper>
				<Button variation={'large'} type={'primary'} title={'К скидкам'} />
			</S.FooterFavoritesButtonWrapper>
			<S.FooterFavoritesButtonWrapper isLast={true}>
				<Button variation={'large'} type={'contour'} title={'Убрать все из избранного'} />
			</S.FooterFavoritesButtonWrapper>
		</S.FooterFavoritesWrapper>
	)
}

export default FooterFavorites
