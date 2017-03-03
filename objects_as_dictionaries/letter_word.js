//wordHistogram('to be or not to be')
var letterCount = {};

function letterFrequency(text) {
  var splitText = text.split("");
  for (var i = 0; i < splitText.length; i++) {
    if (splitText[i] in letterCount) {
      if (splitText[i] != " "){
        letterCount[splitText[i]] += 1;
      }
      else {
        letterCount[splitText[i]] = 1;
      }
    }
  }
console.log(letterCount);
}


letterFrequency('to be or not to be');
