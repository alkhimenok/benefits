import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'

const EmptyFavoritesWrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`
const EmptyFavoritesImageWrapper = styled.View`
	margin: 0 0 ${UNITS_PX.baseX6} 0;
`
const EmptyFavoritesTitleWrapper = styled.View`
	margin: 0 0 ${UNITS_PX.baseX3} 0;
`
const EmptyFavoritesSubtitleWrapper = styled.View``

export {
	EmptyFavoritesWrapper,
	EmptyFavoritesImageWrapper,
	EmptyFavoritesTitleWrapper,
	EmptyFavoritesSubtitleWrapper
}
