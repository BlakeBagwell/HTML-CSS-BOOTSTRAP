var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var encoded = [];

function cipher(offset) {
  for (var i = offset; i < alpha.length; i++) {
    encoded.push(alpha[i]);
  }
  for (var j = 0; j < offset; j++) {
    encoded.push(alpha[j]);
  }
  console.log(encoded);
}

cipher(13);
