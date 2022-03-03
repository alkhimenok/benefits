import AccountIcon from './svg/AccountIcon'
import BackIcon from './svg/BackIcon'
import ConnectionIcon from './svg/ConnectionIcon'
import DangerIcon from './svg/DangerIcon'
import DeniedIcon from './svg/DeniedIcon'
import DiscountIcon from './svg/DiscountIcon'
import FavoritesIcon from './svg/FavoritesIcon'
import FineIcon from './svg/FineIcon'
import FurtherIcon from './svg/FurtherIcon'
import ImportantIcon from './svg/ImportantIcon'
import InstagramIcon from './svg/InstagramIcon'
import LocationIcon from './svg/LocationIcon'
import MoreIcon from './svg/MoreIcon'
import NavigationIcon from './svg/NavigationIcon'
import PhoneIcon from './svg/PhoneIcon'
import SearchIcon from './svg/SearchIcon'

const getCurrentIconSvgComponent = (name, width, height, color, isFill) => {
	switch (name) {
		case 'account':
			return (
				<AccountIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'back':
			return (
				<BackIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'connection':
			return (
				<ConnectionIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'danger':
			return (
				<DangerIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'denied':
			return (
				<DeniedIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'discount':
			return (
				<DiscountIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'favorites':
			return (
				<FavoritesIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'fine':
			return (
				<FineIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'further':
			return (
				<FurtherIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'important':
			return (
				<ImportantIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'instagram':
			return (
				<InstagramIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'location':
			return (
				<LocationIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'more':
			return (
				<MoreIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'navigation':
			return (
				<NavigationIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'phone':
			return (
				<PhoneIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		case 'search':
			return (
				<SearchIcon
					width={width}
					height={height}
					color={color}
					isFill={isFill}
				/>
			)
		default:
	}
}

export { getCurrentIconSvgComponent }
