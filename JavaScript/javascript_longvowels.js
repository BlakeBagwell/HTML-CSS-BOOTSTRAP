var newWord = '';

function longVowel(word) {
  for (var i = 0; i < word.length; i++) {
    if (word.substring(i, i + 1) !== word.substring(i + 1, i + 2)) {
      newWord = newWord + word.substring(i, i + 1);
    }
    if (word.substring(i, i + 1) == word.substring(i + 1, i + 2)) {
      newWord = newWord + word.substring(i, i + 1).repeat(4);
    }
  }
  console.log(newWord);
}

longVowel('cheese');
