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

const getCurrentIconSvgComponent = (name, color, width, height, isStroke) => {
	switch (name) {
		case 'account':
			return <AccountIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'back':
			return <BackIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'connection':
			return <ConnectionIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'danger':
			return <DangerIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'Denied':
			return <DeniedIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'discount':
			return <DiscountIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'favorites':
			return <FavoritesIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'fine':
			return <FineIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'further':
			return <FurtherIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'important':
			return <ImportantIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'instagram':
			return <InstagramIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'location':
			return <LocationIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'more':
			return <MoreIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'navigation':
			return <NavigationIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'Phone':
			return <PhoneIcon color={color} width={width} height={height} isStroke={isStroke} />
		case 'search':
			return <SearchIcon color={color} width={width} height={height} isStroke={isStroke} />
		default:
	}
}

export { getCurrentIconSvgComponent }
