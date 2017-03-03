var counter = 0;
function hello() {
  console.log('Hello, world!');
  counter = counter + 1;
}
hello();
hello();
console.log('Called hello', counter, 'times.');

//will print Hello World, 2 times.
