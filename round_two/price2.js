var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];


var combine = function(a, b) {
  return a + b.price;
};
  //this function needs to be called by the redcue function to work. because reduce has two parameters, a function and an initializing value, this initial value will be assigned to a and it will start the process of (in this case) adding all elemnts together.

  // A will always be the sum or products or whatever, b will always be the current item we are on. 


var total = products.reduce(combine, 0);

console.log(total);
