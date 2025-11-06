// ---Problem Statement ---
// given an array and a target value ,find two values of an array which can be same as target after adding them

var twoSum = function (nums, target) {
  let arrObject = {};
  nums.forEach((item, i) => {
    if (arrObject[item]) {
      arrObject[item].push(i);
    } else {
      arrObject[item] = [i];
    }
  });
  const sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const result = sortedNums[left] + sortedNums[right];
    if (result == target) {
      if (sortedNums[left] === sortedNums[right]) {
        return [
          arrObject[sortedNums[left]][0],
          arrObject[sortedNums[right]][1],
        ];
      } else {
        return [
          arrObject[sortedNums[left]][0],
          arrObject[sortedNums[right]][0],
        ];
      }
    } else if (result < target) {
      left++;
    } else {
      right--;
    }
  }
  return [0, 1];
};
