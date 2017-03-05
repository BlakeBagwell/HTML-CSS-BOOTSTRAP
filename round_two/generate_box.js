function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}


//gameplan: 1. create an array that represents a single line of the width, 2. then create an array that represents the height. then take the result of step one and concatenate it, and save it in a variable, THEN map step two and pass in this new variable we have created.



var box = function(width, height) {
  var boxHeight = range(0, height);
  var boxWidth = range(0, width);
//below makes an array of the width in stars, but we need to comcatenate them togther to make a single string. We can do that by concatenating them with a line break.
  var widthStarArray = boxWidth.map(function(item) {
    return '*';
  });

  var makeSingleStarString = widthStarArray.reduce(function(total, current) {
    return total + current;
  }, '');

  var fillHeightWithSingleProperLengthStrings = boxHeight.map(function(item) {
    return makeSingleStarString;
  });

  //console.log(fillHeightWithSingleProperLengthStrings);
  // var addLineBreakToMakeBox = fillHeightWithSingleProperLengthStrings.reduce(function(total, current) {
  //   return total + current + '\n';
  // }, '');

  // console.log(addLineBreakToMakeBox);

  var addLineBreakToMakeBox = fillHeightWithSingleProperLengthStrings.forEach(function (a) {
    console.log(a);
  });

  // console.log(addLineBreakToMakeBox);
};


box(10,10);

box(1,1);
