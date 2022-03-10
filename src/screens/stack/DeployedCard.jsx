import React from 'react'
import PropTypes from 'prop-types'
import PtScreen from 'patterns/PtScreen'

const DeployedCard = ({ navigation, route }) => {
	// const {
	// 	name,
	// 	title,
	// 	label,
	// 	description,
	// 	more,
	// 	conditionList,
	// 	linkList,
	// 	isImportant,
	// 	isFavorites,
	// 	onToggleToFavorites,
	// 	onShowMore,
	// 	onBack,
	// 	onActiveBenefit
	// } = route.params

	return (
		<PtScreen>
			{/* <Card
				name={name}
				title={title}
				label={label}
				description={description}
				more={more}
				conditionList={conditionList}
				linkList={linkList}
				isImportant={isImportant}
				isFavorites={isFavorites}
				isDeployed={true}
				onToggleToFavorites={onToggleToFavorites}
				onShowMore={onShowMore}
				onBack={onBack}
				onActiveBenefit={onActiveBenefit}
			/> */}
		</PtScreen>
	)
}

DeployedCard.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default DeployedCard
