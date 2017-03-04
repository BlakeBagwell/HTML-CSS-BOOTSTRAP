var arr = ['national', 'aeronautics', 'space', 'administration'];

function acronym(array, sep) {
  return array.reduce(function(stringSoFar, currentStr) {
    return stringSoFar + sep + currentStr[0];
  }, '');
}

console.log(acronym(arr, ''));

//Here we only need the FIRST character of each list item, BUT we still need to throw them together to make a single string, so REDUCE is still necessary. we need currentStr to represent each item, however we can index that like so currentStr[0], which equates to (for the first instance) 'national'[0] which is n, and then we move on as normal.
