function printBox(width, height) {
  console.log('*'.repeat(width));
  for (var i = 1; i <= height -2; i++) {
  console.log('*' + ' '.repeat(width - 2) + '*');
  }
  console.log('*'.repeat(width));
}

printBox(6,4)
