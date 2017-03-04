function callNTimes(numTimes, plugIn) {
  for (var i = 0; i < numTimes; i++) {
    plugIn();
  }
}

function helloWorld() {
  console.log('Hello world!');
}

callNTimes(7, helloWorld);
