const getOrderDataFromApi = async (orderId) => {
	// . . . some API call
	console.log("The actual getOrderData function called!");
}

// Added only to emphasize that the entire module shouldn't be mocked
const getOrderDataFromDatabase = async (orderId) => { }

module.exports = {
	getOrderDataFromApi,
	getOrderDataFromDatabase,
}
