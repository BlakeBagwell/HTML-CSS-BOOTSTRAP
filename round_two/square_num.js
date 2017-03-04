var arr = [1, 2, 3, 4, 5, 6];

function squareMe(n) {
  return n * n;
}

var square = arr.map(squareMe);

console.log(square);
