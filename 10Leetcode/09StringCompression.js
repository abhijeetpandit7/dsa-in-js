// leetcode.com/problems/string-compression
/**
 * @param {character[]} chars
 * @returns {Number}
 */
function compress(chars) {
  let i = 0,
    itr = -1;
  while (i < chars.length) {
    let count = 1;
    while (i < chars.length && chars[i] == chars[i + 1]) {
      i++;
      count++;
    }
    chars[++itr] = chars[i];
    if (count > 1) {
      for (const c of count.toString()) {
        chars[++itr] = c;
      }
    }
    i++;
  }
  return chars; // itr + 1
}

module.exports = { compress };
