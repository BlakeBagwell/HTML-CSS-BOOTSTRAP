var strJoin = function(arrayOfStrings, sep) {
  return arrayOfStrings.reduce(function(soFar, currentItem) {
    return soFar + currentItem + sep;
  }, '');
};

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

var stringMultiply = function(string, times) {
  var properLengthArray = range(0, times);
  var arrayOfProperStrings = properLengthArray.map(function (n) {
    return string;
  });
  //the map funciton takes in a function as its single parameter. so the chunk from line 17 where it says funciton - to line 19 is the single parameter
  return strJoin(arrayOfProperStrings,"");
  // MAKE SURE TO RETURN ALL VALUES THAT YOU NEED TO USE! ESPECIALLY FROM FUNCTIONS 
};

console.log(stringMultiply('abc', 5));
