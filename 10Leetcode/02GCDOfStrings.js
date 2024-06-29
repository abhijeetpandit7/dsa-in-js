// leetcode.com/problems/greatest-common-divisor-of-strings
/**
 * @param {String} str1
 * @param {String} str2
 * @return {String}
 */
function recursiveGcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  if (str2 === "") return str1;
  return gcdOfStrings(str2, str1.substring(0, str1.length % str2.length));
}

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  let m = str1.length,
    n = str2.length;
  while (n) {
    const temp = n;
    n = m % n;
    m = temp;
  }
  return str1.substring(0, m);
}

module.exports = { recursiveGcdOfStrings, gcdOfStrings };
