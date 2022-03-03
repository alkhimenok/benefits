import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Screen from 'components/common/Screen'
import Container from 'components/common/Container'
import Image from 'components/UI/image/Image'
import Icon from 'components/UI/icon/Icon'
import Label from 'components/UI/label/Label'
import Button from 'components/UI/button/Button'

import COLORS from 'globalStyles/colors'

import * as Styled from './styledDeployedCard'

const DeployedCard = ({ navigation, route }) => {
	const {
		name,
		title,
		label,
		conditionList,
		linkList,
		isImportant,
		isFavorites
	} = route.params

	const [favorites, setFavorites] = useState(isFavorites)

	return (
		<Screen>
			<Styled.DeployedCardWrapper>
				<Styled.DeployedCardImageWrapper>
					<Image name={name} isContain={false} />
					<Styled.DeployedCardIconBackWrapper>
						<Icon
							name={'back'}
							width={15}
							height={15}
							color={COLORS.dark}
							backgroundColor={COLORS.light}
							isCircle={true}
							isLarge={true}
							onPress={() => navigation.goBack()}
						/>
					</Styled.DeployedCardIconBackWrapper>
					<Styled.DeployedCardIconFavoritesWrapper>
						<Icon
							name={'favorites'}
							width={15}
							height={15}
							color={favorites ? COLORS.primary : COLORS.dark}
							backgroundColor={COLORS.light}
							isCircle={true}
							isLarge={true}
							isStroke={!favorites}
							onPress={() => setFavorites((prev) => !prev)}
						/>
					</Styled.DeployedCardIconFavoritesWrapper>
				</Styled.DeployedCardImageWrapper>
				<Styled.DeployedCardAbout showsVerticalScrollIndicator={false}>
					<Container>
						<Styled.DeployedCardTitle>{title}</Styled.DeployedCardTitle>
						<Styled.DeployedCardLabels>
							<Styled.DeployedCardLabelWrapper>
								<Label title={label} isImportant={isImportant} isFixed={true} />
							</Styled.DeployedCardLabelWrapper>
							<Styled.DeployedCardIconMoreWrapper>
								<Icon
									name={'more'}
									width={11}
									height={11}
									color={COLORS.dark}
									backgroundColor={COLORS.neutral}
									isCircle={true}
									isLarge={true}
								/>
							</Styled.DeployedCardIconMoreWrapper>
						</Styled.DeployedCardLabels>
						<Styled.DeployedCardSubtitle>
							Условия скидки
						</Styled.DeployedCardSubtitle>
						{conditionList.map((text, i) => (
							<Styled.DeployedCardText index={i} key={i}>
								{text}
							</Styled.DeployedCardText>
						))}
						<Styled.DeployedCardLinkList>
							{linkList.map((link, i) => (
								<Styled.DeployedCardLink>
									<Styled.DeployedCardLinkIconWrapper>
										<Icon
											name={Object.keys(link)[0]}
											width={16}
											height={16}
											color={COLORS.primary}
											isOnlyIcon={true}
										/>
									</Styled.DeployedCardLinkIconWrapper>
									<Styled.DeployedCardLinkText>
										{Object.values(link)[0]}
									</Styled.DeployedCardLinkText>
									<Styled.DeployedCardLinkIconWrapper>
										<Icon
											name={'further'}
											width={5}
											height={8}
											color={COLORS.dark}
											isOnlyIcon={true}
										/>
									</Styled.DeployedCardLinkIconWrapper>
								</Styled.DeployedCardLink>
							))}
						</Styled.DeployedCardLinkList>
					</Container>
				</Styled.DeployedCardAbout>
				<Styled.DeployedCardButtonWrapper>
					<Container>
						<Button title={'Активировать'} isFocused={true} isLarge={true} />
					</Container>
				</Styled.DeployedCardButtonWrapper>
			</Styled.DeployedCardWrapper>
		</Screen>
	)
}

DeployedCard.propTypes = {
	route: PropTypes.object
}

export default DeployedCard
