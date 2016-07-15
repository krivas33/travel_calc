var cars = [
  {
    model: 'Mazda',
    mpg: 18
  }
];

var trips = [
  {
    cost: null,
    distance: 200,
    map: null,
    time: 295 // Minutes
  }
];

var gasStations = [
  {
    price: 4.00,
    name: 'SHEETZ'
  }
];


var totalCost = calculateCost(gasStations[0].price, cars[0].mpg, trips[0].distance);

document.getElementById("cost").innerHTML = totalCost;

function calculateCost(priceOfGas, mpg, distance) {
  var cost;

  // Calculates the cost here
  cost = distance / mpg * priceOfGas;

  // Saves the cost of the trip in the Trips object
  trips.cost = cost;

  // function returns the cost
  return trips.cost;
}
