//wordHistogram('to be or not to be')
var wordCount = {};

function wordHistogram(text) {
  var splitText = text.split(" ");
  for (var i = 0; i < splitText.length; i++) {
    if (splitText[i] in wordCount) {
      wordCount[splitText[i]] += 1;
    }
    else {
      wordCount[splitText[i]] = 1;
    }
  }
console.log(wordCount);
}


wordHistogram('to be or not to be');
