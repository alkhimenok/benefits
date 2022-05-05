import PropTypes from 'prop-types'
import Card from 'components/card/Card'
import * as S from './styledRenderItem'

const RenderItem = ({ item }) => {
	return (
		<S.RenderItemWrapper>
			<Card
				variation={'full'}
				name={item.name}
				title={item.title}
				label={item.label}
				description={item.description}
				more={item.more}
				isImportant={item.isImportant}
				isFavorites={item.isFavorites}
				isContainsMore={item.isContainsMore}
			/>
		</S.RenderItemWrapper>
	)
}

RenderItem.defaultProps = {
	item: {}
}
RenderItem.propTypes = {
	item: PropTypes.object
}

export default RenderItem
