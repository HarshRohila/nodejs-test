const getDeliveryDataFromApi = async (orderId) => {
	// . . . some API call
	console.log("The actual getDeliveryDataFromApi function called!");
}

// Added only to emphasize that the entire module shouldn't be mocked
const getDeliveryDataFromDatabase = async (orderId) => { }

module.exports = {
	getDeliveryDataFromApi,
	getDeliveryDataFromDatabase,
}
