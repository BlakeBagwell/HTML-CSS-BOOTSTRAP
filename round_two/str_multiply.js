var alpha = 'abc';

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}


function tryMe(array, sep) {
  return array.reduce(function(stringSoFar, currentStr) {
    return stringSoFar + sep + currentStr;
  }, '');
}

function repeatMe(str, times){
  //creates an array of the size we need, but filled with numbers, and we assign the output to a variable, in this case step1
  var step1 = range(0, times);
  console.log('step1', step1);
  var step2 = step1.map(function(anything) {
    // now this passes in str which is the variable containing 'abc', for each spot in the array, which will create an array of the same length with each element being the value of str which is 'abc'

    // we also assing this array we have made to a variable to call later.
    return str;
  });
  console.log('step2', step2);
  var step3 = tryMe(step2, '');
  // assigns the output of tryMe( using step 2 as an argument) to step 3
  console.log('step3', step3);
  return step3;
  // we now have to return the output, because we are going to use this function from another function. so it needs to give us back some value.  
}

console.log(repeatMe(alpha, 5));

//pseudo:
//take the string, add it to an array x amount of times, THEN reduce the array to a single string by combining all elements


//on the innermost level we need to create an array, to do that we need to use actually use a function WITHIN that to determine the size of the array. what calls the array creating function is th ereduce function, and what calls that and grabs the variable containing the string we need is going to be our outtermost function.
