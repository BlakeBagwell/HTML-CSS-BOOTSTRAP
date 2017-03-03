var histogram = {};

function letterHistogram(word) {
  for (var i = 0; i < word.length; i++) {
      if (word[i] in histogram) {
        histogram[word[i]] += 1;
      }
      else {
        histogram[word[i]] = 1;
      }

    }
  console.log(histogram);
  }


letterHistogram('cheese');
