function call3Times(fun) {
  fun();
  fun();
  fun();
}
//call3Times essentailly calls a given function 3 times, the FUN is just a place holder and will be replaced by the name of the function being passed in. For this problme it fun will be equal to the helloWorld function. 

function helloWorld() {
  console.log('Hello world!');
}

call3Times(helloWorld);
