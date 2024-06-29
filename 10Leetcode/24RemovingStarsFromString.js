// leetcode.com/problems/removing-stars-from-a-string
/**
 * @param {string} s
 * @return {string}
 */
function removeStars1(s) {
  const stack = [];
  for (const char of s) {
    if (char == "*") stack.pop();
    else stack.push(char);
  }
  return stack.join("");
}

function removeStars(s) {
  let stars = 0,
    str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "*") stars++;
    else if (stars == 0) str = s[i] + str;
    else stars--;
  }
  return str;
}

module.exports = { removeStars };
