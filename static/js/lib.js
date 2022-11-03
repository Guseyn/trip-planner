window.saveStationsInMemory = (setOfStations) => {
	const processedStations = []
	for (const [ stationKey, stationValue ] of Object.entries(setOfStations)) {
		if (stationValue.location) {
			processedStations.push({
				id: stationKey,
				city: stationValue.address.city,
				street: stationValue.address.street,
				federalState: stationValue.federalState,
				latitude: stationValue.location.latitude,
				longitude: stationValue.location.longitude,
				name: stationValue.name
			})
		}
	}
	window.stations = processedStations
}
