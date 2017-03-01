var matrixOne = [[1, 3], [2, 4]];
var matrixTwo = [[5, 2], [1, 0]];
var matrixSum = [[0, 0], [0, 0]];

function matrixAdd(first, second) {
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < first[0].length; j++) {
      matrixSum[i][j] = first[i][j] + second[i][j];
    }
  }
  console.log(matrixSum);
}

matrixAdd(matrixOne, matrixTwo);
