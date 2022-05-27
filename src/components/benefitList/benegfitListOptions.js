import { toJS } from 'mobx'

const getBenefitListOptions = (data) => {
	const correctData = toJS(data)

	const lastAddedList = correctData
		.map(({ data }) => data)
		.flat()
		.sort((a, b) => a.dateAdded - b.dateAdded)
		.slice(0, 5)
		.map((card) => ({ ...card, variation: 'large' }))

	const sections = [
		{
			title: 'Новинки',
			data: lastAddedList
		},
		...correctData.map(({ data: initData, title }) => {
			const displayCard = 3
			const cardsLeft = initData.length - displayCard
			const data = [
				...initData.slice(0, displayCard),
				{
					title: `Показать ${cardsLeft <= 0 ? 'все' : `еще ${cardsLeft}`}`,
					isEmpty: true
				}
			]

			return { title, data }
		})
	]

	return { sections, data: correctData }
}

export { getBenefitListOptions }
