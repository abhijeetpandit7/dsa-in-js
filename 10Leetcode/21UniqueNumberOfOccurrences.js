// leetcode.com/problems/unique-number-of-occurrences
/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  return map.size === new Set(map.values()).size;
}

module.exports = { uniqueOccurrences };
