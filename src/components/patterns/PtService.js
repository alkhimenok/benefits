import React from 'react'
import PropTypes from 'prop-types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import ElButton from 'elements/ElButton'
import ElIcon from 'elements/ElIcon'
import ElImage from 'elements/ElImage'
import ElLabel from 'elements/ElLabel'
import ElText from 'elements/ElText'
import ElContainer from 'elements/ElContainer'
import UNITS from 'styles/units'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const PtService = ({
	name,
	title,
	label,
	more,
	conditionList,
	linkList,
	isImportant,
	isFavorites,
	onGoBack
}) => {
	const { top } = useSafeAreaInsets()
	const favoritesIconName = isFavorites ? 'favoritesFill' : 'favorites'
	const favoritesColor = isFavorites ? COLORS.primary : COLORS.dark

	return (
		<Service>
			<ImageWrapper>
				<ElImage name={name} />
				<IconBackWrapper insetsTop={top}>
					<ElIcon
						variation={'middle'}
						name={favoritesIconName}
						width={'16px'}
						height={'15px'}
						color={favoritesColor}
						backgroundColor={COLORS.light}
						isCircle={true}
						// onPress={handleSwitchFavorites}
					/>
				</IconBackWrapper>
				<IconFavoritesWrapper insetsTop={top}>
					<ElIcon
						variation={'middle'}
						name={'back'}
						width={'14px'}
						height={'11px'}
						color={COLORS.dark}
						backgroundColor={COLORS.light}
						isCircle={true}
						onPress={onGoBack}
					/>
				</IconFavoritesWrapper>
			</ImageWrapper>
			<About
				contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24 }}
				showsVerticalScrollIndicator={false}
			>
				<TitleWrapper>
					<ElText variation={'h1'} fontWeight={WEIGHT.bold}>
						{title}
					</ElText>
				</TitleWrapper>
				<LabelsWrapper>
					<ElLabel
						title={label}
						icon={isImportant && { name: 'importantFill', position: 'start' }}
						isLarge={true}
					/>
					<ElIcon
						variation={'middle'}
						name={'more'}
						width={'5px'}
						height={'11px'}
						color={COLORS.dark}
						backgroundColor={COLORS.neutral}
						isCircle={true}
						// onPress={handleShowMore}
					/>
				</LabelsWrapper>
				{!!conditionList.length && (
					<Group>
						<SubtitleWrapper>
							<ElText variation={'h2'} fontWeight={WEIGHT.bold}>
								Условия скидки
							</ElText>
						</SubtitleWrapper>
						{conditionList.map((condition, i, { length }) => (
							<ConditionWrapper key={i} isLast={i === length - 1}>
								<ElText variation={'text2'}>{condition}</ElText>
							</ConditionWrapper>
						))}
					</Group>
				)}
				{!!linkList.length && (
					<LinkList>
						{linkList.map((link, i) => (
							<Link
								//  onPress={handleToLink}
								key={i}
							>
								<ElIcon
									variation={'empty'}
									name={Object.keys(link)[0]}
									width={'16px'}
									height={'16px'}
									color={COLORS.primary}
								/>
								<LinkTextWrapper>
									<ElText type={'text1'} fontWeight={WEIGHT.semiBold}>
										{Object.values(link)[0]}
									</ElText>
								</LinkTextWrapper>
								<ElIcon
									variation={'empty'}
									name={'right'}
									width={'5px'}
									height={'8px'}
									color={COLORS.dark}
								/>
							</Link>
						))}
					</LinkList>
				)}
			</About>
			<ElContainer>
				<ButtonWrapper>
					<ElButton
						variation={'large'}
						type={'primary'}
						title={'Активировать'}
						// onPress={handleActiveBenefit}
					/>
				</ButtonWrapper>
			</ElContainer>
		</Service>
	)
}

const Service = styled.View`
	flex: 1;
`
const ImageWrapper = styled.View`
	width: 100%;
	height: 35%;
`
const IconBackWrapper = styled.View`
	position: absolute;
	top: ${({ insetsTop }) => `${insetsTop + parseInt(UNITS.baseX4)}px`};
	right: ${UNITS.baseX4};
`
const IconFavoritesWrapper = styled.View`
	position: absolute;
	top: ${({ insetsTop }) => `${insetsTop + parseInt(UNITS.baseX4)}px`};
	left: ${UNITS.baseX4};
`
const About = styled.ScrollView`
	margin: -${UNITS.baseX6} 0 0 0;
	background-color: ${COLORS.light};
	border-top-left-radius: ${UNITS.baseX6};
	border-top-right-radius: ${UNITS.baseX6};
	overflow: hidden;
`
const TitleWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX4} 0;
`
const LabelsWrapper = styled.View`
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin: 0 0 ${UNITS.baseX6} 0;
`
const Group = styled.View`
	margin: 0 0 ${UNITS.baseX6} 0;
`
const SubtitleWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX3} 0;
`
const ConditionWrapper = styled.View`
	margin: 0 0 ${({ isLast }) => (isLast ? 0 : UNITS.baseX2)} 0;
`
const LinkList = styled.View``
const Link = styled.TouchableOpacity`
	border-bottom-color: ${COLORS.neutralTransparent};
	border-bottom-width: ${BORDERS.thin};
	padding: ${UNITS.baseX3_5} 0;
	flex-direction: row;
`
const LinkTextWrapper = styled.View`
	flex: 1;
	margin: 0 ${UNITS.baseX3};
`
const ButtonWrapper = styled.View`
	padding: ${UNITS.baseX4} 0 ${UNITS.baseX2} 0;
	background-color: ${COLORS.lightTransparent};
`

PtService.defaultProps = {
	name: '',
	title: '',
	label: '',
	description: '',
	more: '',
	conditionList: [],
	linkList: [],
	isImportant: false,
	isFavorites: false,
	onGoBack: () => console.log('go back')
}
PtService.prototype = {
	name: PropTypes.string,
	title: PropTypes.string,
	label: PropTypes.string,
	description: PropTypes.string,
	more: PropTypes.string,
	conditionList: PropTypes.array,
	linkList: PropTypes.array,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	onGoBack: PropTypes.func
}

export default PtService
