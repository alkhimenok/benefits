import React from 'react'
import PropTypes from 'prop-types'
import ElScreen from 'elements/ElScreen'

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
		<ElScreen>
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
		</ElScreen>
	)
}

DeployedCard.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default DeployedCard
