var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var makeCipher = function(offset) {
  var cipher = alpha.map(function(alpha) {
    return alpha[offset];
  });
  console.log(cipher);
};

makeCipher(13);

// need to redo. use ascii index insead of an alphabetic array to directly translate the cipher. 
