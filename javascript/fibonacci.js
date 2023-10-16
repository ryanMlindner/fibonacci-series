function fibonacci(num) {
  // type your code here
  let zeroIndex = 0, indexMinusOne = 0, indexPlusOne = 0;

  for (let index = 0; index < num; index++) {
    if(index === 0) {indexPlusOne = 1}
    else {indexPlusOne = zeroIndex + indexMinusOne;}
    console.log("sum: " + zeroIndex + "+" + indexMinusOne);
    console.log("next:" + indexPlusOne);
    indexMinusOne = zeroIndex;
    zeroIndex = indexPlusOne;
  }
  return zeroIndex
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/**
 * given an integer, find the zero-indexed number in the fibonacci series
 * probably(again) some clever workaround to not have to make the whole series every time,
 * but the easiest and simplest way is to generate the series every time
 * much easier to break this code than the last one, given the growth factor of the series
 * that aside,
 * create the sequence up to the number given and return the value
 * to make the fibonacci sequence:
 * have an increment and a starting value
 * sum them
 * set the increment to the sum of the last two
 * repeat up to the given number
 */
// And a written explanation of your solution
