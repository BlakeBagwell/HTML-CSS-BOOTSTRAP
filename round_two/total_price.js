var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function total(array) {
  function combine(currentValue, product) {
    return currentValue + product.price;
  }
  var sum = array.reduce(combine, 0);
  return sum;
}

var answer = total(products);

console.log(answer);
