var acroOne = ['national', 'aeronautics', 'space', 'administration'];
var acroTwo = ['very', 'important', 'person'];

// var strJoin = function(arrayOfStrings) {
//   return arrayOfStrings.reduce(function(soFar, currentItem) {
//     return soFar + currentItem[0];
//   }, '');
// };

// this works just like the strJoin function from before, however we index the current string and on concatenate its first index with the other first indices, creating an acronym

// console.log(strJoin(acroOne));
// console.log(strJoin(acroTwo));

var strJoin = acroOne.map(function(a){
  return a[0];
}).reduce(function(a,b){
  return a+b;
});

console.log(strJoin);
