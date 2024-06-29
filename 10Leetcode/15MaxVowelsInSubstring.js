// leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
/**
 * @param {String} s
 * @param {Number} k
 * @returns {Number}
 */
function maxVowels(s, k) {
  let count = 0,
    i = 0;
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);
  for (; i < k; i++) {
    if (VOWELS.has(s[i])) count++;
  }
  let max = count;
  while (i < s.length && max < s.length) {
    count += VOWELS.has(s[i]) - VOWELS.has(s[i - k]);
    max = Math.max(max, count);
    i++;
  }
  return max;
}

module.exports = { maxVowels };
