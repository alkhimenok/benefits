import { WIDTH_RATIO, BASE } from 'helpers/constants'

class Units {
	constructor() {
		this.getBase = this.getBase.bind(this)
		this.calculateBase = this.calculateBase.bind(this)
	}

	#base = BASE * WIDTH_RATIO

	UNITS = {
		baseX1: this.getBase(1),
		baseX2: this.getBase(2),
		baseX3: this.getBase(3),
		baseX3_5: this.getBase(3.5), // FIXME: not a valid value
		baseX4: this.getBase(4),
		baseX5: this.getBase(5),
		baseX6: this.getBase(6),
		baseX7: this.getBase(7),
		baseX8: this.getBase(8),
		baseX9: this.getBase(9),
		baseX10: this.getBase(10),
		baseX11: this.getBase(11),
		baseX12: this.getBase(12),
		baseX40: this.getBase(40)
	}

	UNITS_PX = {
		baseX1: this.getBase(1, true),
		baseX2: this.getBase(2, true),
		baseX3: this.getBase(3, true),
		baseX3_5: this.getBase(3.5, true), // FIXME: not a valid value
		baseX4: this.getBase(4, true),
		baseX5: this.getBase(5, true),
		baseX6: this.getBase(6, true),
		baseX7: this.getBase(7, true),
		baseX8: this.getBase(8, true),
		baseX9: this.getBase(9, true),
		baseX10: this.getBase(10, true),
		baseX11: this.getBase(11, true),
		baseX12: this.getBase(12, true),
		baseX40: this.getBase(40, true)
	}

	getBase(level, isPX = false) {
		return this.#base * level + (isPX && 'px')
	}

	calculateBase(size, isPX = false) {
		return this.#base * (size / BASE) + (isPX && 'px')
	}
}

const units = new Units()
const { UNITS, UNITS_PX, getBase, calculateBase } = units

export { UNITS, UNITS_PX, getBase, calculateBase }
export default units
