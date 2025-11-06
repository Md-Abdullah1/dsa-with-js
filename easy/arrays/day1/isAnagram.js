// ---Problem Statement ---
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
var isAnagram = function (s, t) {
  console.log("yes it is", s.length, t.length, s, t);
  if (s.length !== t.length) return false;

  const str1 = s.split("").sort().join("");
  const str2 = t.split("").sort().join("");

  return str1 === str2;
};
