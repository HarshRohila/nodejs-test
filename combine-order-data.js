const { getDeliveryDataFromApi } = require("./get-delivery-data");
const { getOrderDataFromApi } = require("./get-order-data")

const combineOrderData = async (orderId) => {
    const orderData = await getOrderDataFromApi(orderId);
    const deliveryData = await getDeliveryDataFromApi(orderId);

    return {
        orderData,
        deliveryData,
    };
}

module.exports = {
    combineOrderData,
};