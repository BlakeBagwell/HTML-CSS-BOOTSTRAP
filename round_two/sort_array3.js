var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

var minToMax = function(itemList) {
  var reordered = itemList.sort(function(a, b) {
    return a.price - b.price;
  });
  console.log(reordered);
  //we named the sorting function so we could pass in its value when we use the log function. 
};

minToMax(products);
