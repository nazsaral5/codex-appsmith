export default {
	counter (elementList) {
		var uniqueElements = [...new Set(elementList)];
		return uniqueElements.map((item) => {
			return {
				"x": item,
				"y": elementList.filter(x => x === item).length
			};
		})
	},
}