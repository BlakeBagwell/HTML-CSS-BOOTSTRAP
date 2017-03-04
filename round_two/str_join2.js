var arr = ['Hello', 'and', 'goodbye'];

//use reduce method

// to use reduce we need a combine function

// we also need to make a funciton that that takes in an array and a seperating character

// end goal : someFunction(arrayOStrings, sep)

var strJoin = function(arrayOfStrings, sep) {
  return arrayOfStrings.reduce(function(a, b) {
    //this line above will take our array with many strings, and make them into a single string with a seperator of our choice.
    return a + b + sep;
    //above, we add the total so far (a) which has the initial value we give it from the reduce funtion which is and empty string '', and then we add it to the current list item and then the seperator
  }, '');
};

console.log(strJoin(arr, ' '));


// NOTE!!! we must use return when a function is calling on another funtion or we wont get the value we need to get the higher function running.
