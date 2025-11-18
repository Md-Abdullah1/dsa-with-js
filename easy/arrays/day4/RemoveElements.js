// ---Problem Statement ---
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
var removeElement = function (nums, val) {
  console.log("nums before", nums, val);
  nums = nums.filter((value) => value !== val);
  console.log("nums after", nums, val);
  return nums.length;
};
