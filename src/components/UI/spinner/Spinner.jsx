import PropTypes from 'prop-types'
import { getSpinnerOptions } from './spinnerOptions'
import * as S from './styledSpinner'

const Spinner = ({ variation, type }) => {
	const iconColor = getSpinnerOptions(type)

	return (
		<S.SpinnerWrapper>
			<S.SpinnerIcon size={variation} color={iconColor} />
		</S.SpinnerWrapper>
	)
}

Spinner.defaultProps = {
	variation: 'small',
	type: 'default'
}
Spinner.propTypes = {
	variation: PropTypes.string,
	type: PropTypes.string
}

export default Spinner
