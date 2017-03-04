var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function cityName(city) {
  return city.name;
}

var printCityName = cities.map(cityName);
// in this case we use MAP because we want it to output an array of the same length. { name: 'Los Angeles', temperature: 60.0} is essentailly one element in the array, despite having multiple keys. So eventhough we are so of removing them, which initially seems like a job for FILTER, we want to represent EACH elent from the original array in a differnt way, not remove any actual elements.


// in the previous cities exercise, we DID want to FILTER out any city that didnt have a temp over 70, in this case we want to see ALL city names, so we map, instead of filter. 
console.log(printCityName);
