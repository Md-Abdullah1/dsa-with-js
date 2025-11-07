// ---Problem Statement ---
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function (strs) {
  strs.sort();

  const firstValue = strs[0];
  const lastValue = strs[strs.length - 1];
  const minLen = Math.min(firstValue.length, lastValue.length);

  let i = 0;

  while (i < minLen && firstValue[i] == lastValue[i]) {
    i++;
  }

  return firstValue.slice(0, i);
};
