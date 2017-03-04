var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// var evens = arr.filter(function(n) {
//   // same as the pos num file, filter returns a boolean, so we drop't need an if statemnt
//   return n % 2 === 0;
// });
//
// //console.log(evens);


////// Other way that is more flexible below

function findEvens(n) {
  return n % 2 === 0;
}

var evens = arr.filter(findEvens);

console.log(evens);
