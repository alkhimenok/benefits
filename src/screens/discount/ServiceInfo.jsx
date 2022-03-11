import React from 'react'
import PropTypes from 'prop-types'
import ElScreen from 'elements/ElScreen'
import PtService from 'patterns/PtService'

const ServiceInfo = ({ navigation, route }) => {
	const {
		name,
		title,
		label,
		more,
		conditionList,
		linkList,
		isImportant,
		isFavorites
	} = route.params
	const handleGoBack = () => {
		navigation.goBack()
	}

	return (
		<ElScreen>
			<PtService
				name={name}
				title={title}
				label={label}
				more={more}
				conditionList={conditionList}
				linkList={linkList}
				isImportant={isImportant}
				isFavorites={isFavorites}
				onGoBack={handleGoBack}
			/>
		</ElScreen>
	)
}

ServiceInfo.defaultProps = {
	navigation: {},
	route: {}
}
ServiceInfo.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default ServiceInfo
