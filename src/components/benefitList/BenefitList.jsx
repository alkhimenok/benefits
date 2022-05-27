import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStore } from 'providers/storeProvider'

const BenefitList = observer(() => {
	const { data, focused } = useStore().filtration
	const navigation = useNavigation()

	return <></>
})

export default BenefitList
