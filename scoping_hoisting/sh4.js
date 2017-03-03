// global scope -a f- is defined
var a = 0;
//
function f(c) {
  //-scope of f - c, b, g- are defined
  var b = 1;
  // 

  var g = function g(d) {
    //scope of g -d and e- are defined
    var e = 4;
    //
  };
  //
  return g;
  //
}
//
var h = f(2);
h(3);
//
