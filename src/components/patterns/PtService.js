import React from 'react'

const PrService = () => {
	return <></>
}

Card.prototype = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
	more: PropTypes.string,
	conditionList: PropTypes.array,
	linkList: PropTypes.array,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	isContainsMore: PropTypes.bool,
	isEmpty: PropTypes.bool,
	isDeployed: PropTypes.bool,
	onImagePress: PropTypes.func,
	onToggleToFavorites: PropTypes.func,
	onShowMore: PropTypes.func,
	onBack: PropTypes.func,
	onActiveBenefit: PropTypes.func
}

export default PrService
