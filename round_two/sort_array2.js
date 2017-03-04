var arr = ['Blake', 'Julie', 'Keyur', 'Ryan', 'Ian', 'Jam'];
var arr2 = [3,5,8,1,9];

var ans = arr.sort(function(a,b){
  return a.length - b.length;
});

//the power of the sort function with this particular a-b function passed in, is that it is essentially bubble sort, it puts all elements in ascending order.

console.log(ans);
