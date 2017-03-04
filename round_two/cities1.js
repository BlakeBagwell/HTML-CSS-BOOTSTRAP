var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function coolTemp(city) {
  // in this case CITY is our placeholder for a given item in the array, essentially it is poopable. it could be RED, HOUSE, DOG. The point is that is can be RED.temperature, HOUSE.temperature, etc, bc it essentially will equal the vaules passed in from the array, like cities.temperature, RED, DOG, GREEN, HOUSE, and in this case CITY is a placeholder
  return city.temperature < 70;
}

var findCool = cities.filter(coolTemp);

console.log(findCool);
