var counter = 0;
function updateCounter() {
  counter += 1;
  console.log('The global count is', counter);
  var counter = 0;
  console.log('The local count is reset to', counter);
}
updateCounter();
updateCounter();
updateCounter();
