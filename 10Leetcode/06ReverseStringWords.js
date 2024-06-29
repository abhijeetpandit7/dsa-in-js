// leetcode.com/problems/reverse-words-in-a-string
/**
 * @param {String} s
 * @returns {String}
 */
function reverseWords(s) {
  const arr = [];
  let end = s.length;
  for (let i = end - 1; i >= 0; i--) {
    if (s[i] == " ") {
      end !== i + 1 && arr.push(s.substring(i + 1, end));
      end = i;
    }
  }
  end > 0 && arr.push(s.substring(0, end));
  return arr.join(" ");
}

module.exports = { reverseWords };
