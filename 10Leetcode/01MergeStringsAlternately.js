// leetcode.com/problems/merge-strings-alternately
/**
 * @param {String} word1
 * @param {String} word2
 * @returns {String}
 */
function recursiveMergeAlternately(word1, word2) {
  return (function recurse(i) {
    const char1 = word1[i];
    const char2 = word2[i];
    if (char1 && char2) return char1 + char2 + recurse(i + 1);
    else if (char1 && !char2) return word1.substring(i);
    else if (!char1 && char2) return word2.substring(i);
    else return "";
  })(0);
}

function mergeAlternately(word1, word2) {
  let res = "";
  const minLen = Math.min(word1.length, word2.length);
  for (let i = 0; i < minLen; i++) {
    res += word1[i] + word2[i];
  }
  res += word1.substring(minLen);
  res += word2.substring(minLen);
  return res;
}

module.exports = { recursiveMergeAlternately, mergeAlternately };
