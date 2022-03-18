jest.mock("./get-order-data", () => ({
  getOrderDataFromApi: jest.fn(() => Promise.resolve(mockedOrderData)),
}));
jest.mock("./get-delivery-data", () => ({
  getDeliveryDataFromApi: jest.fn(() => Promise.resolve(mockedDelieryData)),
}));
const { combineOrderData } = require("./combine-order-data");

const mockedOrderData = {
  id: 1,
  amount: 1000,
};

const mockedDelieryData = {
  orderId: 1,
  status: "DELIVERED",
};

test("combineOrderData correctly combines data", async () => {
  const combinedOrder = await combineOrderData(111);
});
