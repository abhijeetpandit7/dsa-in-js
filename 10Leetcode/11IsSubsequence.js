// leetcode.com/problems/is-subsequence
/**
 * @param {String} s
 * @param {String} t
 * @returns {Boolean}
 */
function isSubsequence(s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  }
  return i == s.length;
}

module.exports = { isSubsequence };
