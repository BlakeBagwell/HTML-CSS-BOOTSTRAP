function factor(num) {
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      if (i * j == num) {
        console.log(i);
      }
    }
  }
}

factor(15);
