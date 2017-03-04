var arr = [1, 2, -3, 4, -5, 5, 6, -7];

// var posNum = arr.filter(function(n) {
//   //normally i would think to use an IF statement, however it isnt needed as the nature of FILTER returns a boolean
//   return n > 0;
// });
//
// console.log(posNum);


function findPos(n) {
  return n > 0;
}

var posNum = arr.filter(findPos);

console.log(posNum);
