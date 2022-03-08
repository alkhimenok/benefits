import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/common/Container'
import Button from 'components/UI/button/Button'
import Text from 'components/UI/text/Text'
import Icon from 'components/UI/icon/Icon'
import Image from 'components/UI/image/Image'
import Label from 'components/UI/label/Label'
import COLORS from 'globalStyles/colors'
import * as Styled from './styledCard'

const Card = ({
	name,
	title,
	label,
	description,
	more,
	dateAdded,
	conditionList,
	linkList,
	isImportant,
	isFavorites,
	isContainsMore,
	isLarge,
	isFull,
	isEmpty,
	isDeployed,
	onImagePress,
	onToggleToFavorites,
	onShowMore,
	onBack,
	onActiveBenefit
}) => {
	return (
		<Styled.CardWrapper
			isLarge={isLarge}
			isFull={isFull}
			isEmpty={isEmpty}
			isDeployed={isDeployed}
		>
			{isEmpty ? (
				<Styled.CardImageWrapper isEmpty={isEmpty} onPress={onImagePress}>
					<Text type={'text2'} isTextSemiBold={true} isParagraph={true}>
						{title}
					</Text>
				</Styled.CardImageWrapper>
			) : (
				<>
					<Styled.CardImageWrapper
						activeOpacity={1}
						isLarge={isLarge}
						isFull={isFull}
						isEmpty={isEmpty}
						isDeployed={isDeployed}
						onPress={onImagePress}
					>
						<Image
							name={name}
							isContain={!isFull && !isDeployed}
							isRounded={!isDeployed}
						/>
						{!isDeployed && (
							<Styled.CardLabelsWrapper
								isLarge={isLarge}
								isFull={isFull}
								isDeployed={isDeployed}
							>
								<Label
									title={label}
									icon={isImportant && { name: 'important', position: 'start' }}
									isFixed={isDeployed}
								/>
								{isContainsMore && more && !isDeployed && (
									<Styled.CardMoreIconWrapper>
										<Icon
											name={'more'}
											width={13}
											height={13}
											color={COLORS.light}
											backgroundColor={COLORS.dark}
											isSmall={true}
											isCircle={true}
											onPress={onShowMore}
										/>
									</Styled.CardMoreIconWrapper>
								)}
							</Styled.CardLabelsWrapper>
						)}
						{isDeployed && (
							<Styled.CardBackIconWrapper>
								<Icon
									name={'back'}
									width={16}
									height={12}
									color={COLORS.dark}
									backgroundColor={COLORS.light}
									isCircle={true}
									onPress={onBack}
								/>
							</Styled.CardBackIconWrapper>
						)}
						{(isFavorites || isFull || isDeployed) && (
							<Styled.CardFavoritesIconWrapper
								isLarge={isLarge}
								isFull={isFull}
								isDeployed={isDeployed}
							>
								<Icon
									name={'favorites'}
									width={16}
									height={15}
									color={isFavorites ? COLORS.primary : COLORS.dark}
									backgroundColor={
										isDeployed ? COLORS.light : COLORS.lightTransparent
									}
									isCircle={true}
									isFill={isFavorites}
									isSmall={!isLarge && !isFull && !isDeployed}
									onPress={onToggleToFavorites}
								/>
							</Styled.CardFavoritesIconWrapper>
						)}
					</Styled.CardImageWrapper>
					<Styled.CardAbout
						contentContainerStyle={
							isDeployed && { paddingHorizontal: 16, paddingTop: 24 }
						}
						showsVerticalScrollIndicator={false}
						isDeployed={isDeployed}
					>
						{isLarge || (
							<Styled.CardTitleWrapper isFull={isFull} isDeployed={isDeployed}>
								<Text
									type={(isFull && 'h3') || (isDeployed && 'h1') || 'text2'}
									isTextSemiBold={true}
								>
									{title}
								</Text>
							</Styled.CardTitleWrapper>
						)}
						{isFull && (
							<Styled.CardDescriptionWrapper>
								<Text type={'text2'} numberOfLines={2} isParagraph={true}>
									{description}
								</Text>
							</Styled.CardDescriptionWrapper>
						)}
						{isDeployed && (
							<Styled.CardLabelsWrapper
								isLarge={isLarge}
								isFull={isFull}
								isDeployed={isDeployed}
							>
								<Label
									title={label}
									icon={isImportant && { name: 'important', position: 'start' }}
									isFixed={isDeployed}
								/>
								{more && (
									<Styled.CardMoreIconWrapper>
										<Icon
											name={'more'}
											width={13}
											height={13}
											backgroundColor={COLORS.neutral}
											color={COLORS.dark}
											isCircle={true}
											onPress={onShowMore}
										/>
									</Styled.CardMoreIconWrapper>
								)}
							</Styled.CardLabelsWrapper>
						)}
						{conditionList?.length && isDeployed && (
							<>
								<Styled.CardSubtitleWrapper>
									<Text type={'h2'}>Условия скидки</Text>
								</Styled.CardSubtitleWrapper>
								{conditionList.map((condition, i) => (
									<Styled.CardConditionWrapper key={i}>
										<Text type={'text2'}>{condition}</Text>
									</Styled.CardConditionWrapper>
								))}
							</>
						)}
						{linkList?.length &&
							isDeployed &&
							linkList.map((link, i) => (
								<Styled.CardLinkWrapper
									onPress={() => console.log('to link')} // TODO: go to link
									key={i}
								>
									<Icon
										name={Object.keys(link)[0]}
										width={16}
										height={16}
										color={COLORS.primary}
										isOnlyIcon={true}
									/>
									<Styled.CardLinkTextWrapper>
										<Text type={'text1'} isTextSemiBold={true}>
											{Object.values(link)[0]}
										</Text>
									</Styled.CardLinkTextWrapper>
									<Icon
										name={'further'}
										width={5}
										height={8}
										color={COLORS.dark}
										isOnlyIcon={true}
									/>
								</Styled.CardLinkWrapper>
							))}
					</Styled.CardAbout>
					{isDeployed && (
						<Container>
							<Styled.CardButtonWrapper>
								<Button
									title={'Активировать'}
									isLarge={true}
									isPrimary={true}
									onPress={onActiveBenefit}
								/>
							</Styled.CardButtonWrapper>
						</Container>
					)}
				</>
			)}
		</Styled.CardWrapper>
	)
}

Card.prototype = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
	more: PropTypes.string,
	dateAdded: PropTypes.number,
	conditionList: PropTypes.array,
	linkList: PropTypes.array,
	isImportant: PropTypes.bool,
	isFavorites: PropTypes.bool,
	isContainsMore: PropTypes.bool,
	isLarge: PropTypes.bool,
	isFull: PropTypes.bool,
	isEmpty: PropTypes.bool,
	isDeployed: PropTypes.bool,
	onImagePress: PropTypes.func,
	onToggleToFavorites: PropTypes.func,
	onShowMore: PropTypes.func,
	onBack: PropTypes.func,
	onActiveBenefit: PropTypes.func
}

export default Card
