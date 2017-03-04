var strs = ['Hello', 'and', 'goodbye'];


// function combine(stringSoFar, currentStr) {
//   return stringSoFar + ' ' + currentStr;
// }
//
// var sentence = strs.reduce(combine, '');
//
// console.log(sentence);

// on line 7, reduce MUST take in a function that we make, and then it needs an initial starting value.
//the combine function we made will really only be effective when called by the reduce function.

//when the combine function is called by the reduce function, stringSoFar initially is what we give it when reduce is called which is '', an empty string. It takes that and then starts iterating through the array we gave it. that was stringSoFar is '' and currentStr is 'Hello'. then the combine function does the rest. it concatenates '' and 'Hello', and then reassigns stringSoFar the value we just made, meaning 1. stringSoFar = '' and then 2. stringSoFar = '' + 'Hello' which means 3. stringSoFar = 'Hello'. if we keep going we keep going through the array that is passed in and essentially adding each new array item to stringSoFar.


function tryMe(array, sep) {
  return array.reduce(function(stringSoFar, currentStr) {
    return stringSoFar + sep + currentStr;
  }, '');
}

console.log(tryMe(strs, ' '));

// SO! This one is a little cimplicated. what weve done here with the second version of the program is this: instead of defining functions seperately, we pack them all together. lets work from the inside out.

//first we have the combiner function, which in this example is the innermost function. this entire combiner function is one of the two parameters the reduce function needs. so instead of defining it seperately we define it within the parameter portion of the reduce function. the way that this works is as follows. It uses a fairly standard formula where we have the initial value, which only works by being called BY A HIGHER FUNCTION. this means, a necessary part of the combiner function is provided from the reduce function. So looking at the combiner function alone is confusing. Back to how it works. the first parameter of the combiner fucntion is stringSoFar, which it kind of like our total that we use in summation functions. BUT that parameter isnt initally defined with a value, thats where the reduce function comes in and helps. it give the initial value of the function we make (in this case, stringSoFar) a starting value of '', then the second parameter of the combine funciton represents the current array item we are on, this is the loop iterating. so if the array is 1 2 3 the first round, stringSoFar = 0 (because we provide that value with the reduce function that is calling the combine funciton), current = 1 and then it adds them (if our function added instead of concatenated) to make the new value of stringSoFar to 1, then 1 + (the next item represented by currentStr) 2, then stringSoFar is now 3, we then add 3 (stringSoFar) + with (the next item) 3, and then stringSoFar = 6.

//the way this is designed is to allow us to 1. combine all elements into some kind of string, and 2. to allow us to determine was kind of seperator we want, in this case a space ' '.
