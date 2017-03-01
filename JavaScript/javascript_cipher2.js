var alpha = 'abcdefghijklmnopqrstuvwxyz';
var encoded = '';
var decoded = '';

function cipher(offset) {
  for (var i = offset; i < alpha.length; i++) {
    encoded = encoded + alpha.substring(i, i + 1);
  }
  for (var j = 0; j < offset; j++) {
    encoded = encoded + alpha.substring(j, j + 1);
  }
  console.log(encoded);
}

function decipher(secret) {
  for (var x = 0; x < secret.length; x++) {
    for (var y = 0; y < alpha.length; y++) {
      if (secret.substring(x, x + 1) == encoded.substring(y, y + 1)) {
        decoded = decoded + alpha.substring(y, y + 1);
      }
    }
    if (secret.substring(x, x + 1) == ' ') {
      decoded = decoded + ' ';
    }
  }
  console.log(decoded);
}

cipher(13);
decipher('travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar');
