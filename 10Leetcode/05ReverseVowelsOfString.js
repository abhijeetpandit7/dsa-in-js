/**
 * @param {String} s
 * @returns {String}
 */
function reverseVowels(s) {
  let arr = Array.from(s),
    left = 0,
    right = s.length - 1;
  const VOWELS = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  while (left < right) {
    while (left < right && !VOWELS.has(arr[left])) {
      left++;
    }
    while (left < right && !VOWELS.has(arr[right])) {
      right--;
    }
    if (left < right && VOWELS.has(arr[left]) && VOWELS.has(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
}

/*
  while (left < right) {
    const isLeftVowel = VOWELS.has(arr[left]);
    const isRightVowel = VOWELS.has(arr[right]);
    if (isLeftVowel && isRightVowel) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    } else if (isLeftVowel) left--;
    else if (isRightVowel) right++;
    left++;
    right--;
  }
*/

module.exports = { reverseVowels };
