// sample distribution data. Add more states/coords as needed.
const distributionData = {
  "Maharashtra": {
    coords: [72.8777, 19.07599], // Mumbai approx [lon, lat]
    distributors: ["Alpha Distributors", "Sharma Traders"],
    orders: 120,
    profit: "₹3,20,000",
    sales: "₹12,50,000"
  },
  "Delhi": {
    coords: [77.2090, 28.6139],
    distributors: ["North India Logistics"],
    orders: 95,
    profit: "₹2,40,000",
    sales: "₹9,80,000"
  },
  "Rajasthan": {
    coords: [75.7873, 26.9124], // Jaipur
    distributors: ["Jaipur Trade Hub", "Rajput Logistics"],
    orders: 110,
    profit: "₹2,90,000",
    sales: "₹10,20,000"
  }
};

export default distributionData;
