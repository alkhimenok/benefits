import React from 'react'
import PropTypes from 'prop-types'
import Screen from 'components/common/Screen'
import DeployedCard from 'components/deployedCard/DeployedCard'

const Card = ({ navigation, route }) => {
	const {
		name,
		title,
		label,
		conditionList,
		linkList,
		icon,
		isFavorites
	} = route.params

	return (
		<Screen>
			<DeployedCard
				name={name}
				title={title}
				label={label}
				conditionList={conditionList}
				linkList={linkList}
				icon={icon}
				isFavorites={isFavorites}
				navigation={navigation}
			/>
		</Screen>
	)
}

Card.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default Card
