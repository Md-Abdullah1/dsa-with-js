// ---Problem Statement ---
// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
//  The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
var plusOne = function (digits) {
  let lastIndex = digits.length - 1;
  if (digits[lastIndex] !== 9) {
    digits[lastIndex] = digits[lastIndex] + 1;
    console.log("in if", digits);
    return digits;
  } else {
    if (digits[lastIndex - 1] == 9) {
      digits[lastIndex - 1] = 1;
      digits[lastIndex] = 0;
      digits.push(0);
    } else {
      digits[lastIndex] = 1;
      digits.push(0);
      console.log("in elese", digits);
    }
    return digits;
  }
};
