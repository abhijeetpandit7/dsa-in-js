// leetcode.com/problems/decode-string
/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  let stack = [],
    currentStr = "",
    currentNum = 0;
  for (const char of s) {
    // console.log({ char, currentStr, currentNum, stack });
    if (char >= "0" && char <= "9") {
      currentNum = 10 * currentNum + Number(char);
    } else if (char == "[") {
      stack.push(currentNum);
      stack.push(currentStr);
      currentNum = 0;
      currentStr = "";
    } else if (char == "]") {
      const prevStr = stack.pop();
      const prevNum = stack.pop();
      currentStr = prevStr + currentStr.repeat(prevNum);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
}

module.exports = { decodeString };
