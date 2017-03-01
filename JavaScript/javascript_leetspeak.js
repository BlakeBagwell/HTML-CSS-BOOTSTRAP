var translation = '';
var upperLeet = '';
var leetLib = 'AEGIOST';
var leetTrans = '4361057';

function leet(leetMe) {
  upperLeet = leetMe.toUpperCase();
  for (var i = 0; i < leetMe.length; i++) {
    for (var j = 0; j < leetLib.length; j++) {
      var left = upperLeet.substring(i, i + 1);
      var right = leetLib.substring(j, j + 1);
      if (left == right) {
        translation = translation + leetTrans.substring(j, j + 1);
        break;
      }
      else if (j == leetLib.length - 1){
        /* Length -1 since the index starts at 0, otherwise it will never be triggered */
        translation = translation + upperLeet.substring(i, i + 1);
      }
    }
  }
  console.log(translation);
}
leet('leet');
