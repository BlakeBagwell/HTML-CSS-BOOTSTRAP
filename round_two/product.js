var arr = [1, 2, 3, 4, 5];

function product(a, b) {
  return a * b;
}



console.log(arr.reduce(product, 1));
// for reduce we need an initial starting value, in this case 1 because we are dealing with multiplication, if additive, then 0. We start with one because it will multiply a by the given starting number, and then it will multiply that with b, and repeat that loop.
