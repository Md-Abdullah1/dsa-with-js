// ---Problem Statement ---
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  let newArr = new Set(nums);
  if (newArr.size == nums.length) {
    return false;
  } else {
    return true;
  }
};
