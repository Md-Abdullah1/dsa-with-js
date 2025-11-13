// ---Problem Statement ---
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
var removeDuplicates = function (nums) {
  let newNums = Array.from(new Set(nums));
  let k = 0;
  if (newNums.length != nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (i > newNums.length - 1) {
        k = i;
        newNums.push("_");
      }
    }
    console.log(k, "in if ", newNums, nums);
    // return (newNums.length , newNums)
    return k;
  } else {
    console.log("in else ", newNums, nums);
    return nums.length, nums;
  }
};
