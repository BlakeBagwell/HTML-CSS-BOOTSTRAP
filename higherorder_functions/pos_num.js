var arr = [1, -2, -3, 4, 5, -6];

var positive = arr.filter(function(n) {
  if (n > 0) {
    return n;
  }
});

console.log(positive);
