var arr = [1, 2, 3, 4, 5, 6, 7];

var evens = arr.filter(function(n) {
  if (n % 2 === 0) {
    return n;
  }
});

console.log(evens);
