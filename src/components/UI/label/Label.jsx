import PropTypes from 'prop-types'
import Icon from 'components/UI/icon/Icon'
import Text from 'components/UI/text/Text'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import { getLabelOptions } from './labelOptions'
import * as S from './styledLabel'

const Label = ({ title, icon, isLarge }) => {
	const isContainsIcon = !!icon.name
	const iconBeginning = icon.position !== 'end'
	const textVariation = isLarge ? 'text2' : 'text3'
	const { wrapperHeight, wrapperPaddingHorizontal } = getLabelOptions(isLarge, isContainsIcon)

	return (
		<S.LabelWrapper
			iconBeginning={iconBeginning}
			wrapperHeight={wrapperHeight}
			wrapperPaddingHorizontal={wrapperPaddingHorizontal}
		>
			{isContainsIcon && (
				<S.IconWrapper
					pointerEvents={'none'}
					//
					iconBeginning={iconBeginning}
				>
					<Icon
						variation={'empty'}
						name={icon.name}
						designWidth={13}
						designHeight={16}
						color={COLORS.light}
					/>
				</S.IconWrapper>
			)}
			<Text variation={textVariation} fontWeight={WEIGHT.semiBold} color={COLORS.light}>
				{title}
			</Text>
		</S.LabelWrapper>
	)
}

Label.defaultProps = {
	title: '',
	icon: { name: '', position: 'start' },
	isLarge: false
}
Label.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object,
	isLarge: PropTypes.bool
}

export default Label
