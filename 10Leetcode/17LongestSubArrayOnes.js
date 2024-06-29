// leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
/**
 * @param {Number[]} nums
 * @returns {Number}
 */
function longestSubarray(nums) {
  let zeroes = 0,
    left = 0,
    max = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] == 0) zeroes++;
    while (zeroes > 1) {
      if (nums[left++] == 0) zeroes--;
    }
    max = Math.max(max, right - left);
  }
  return max;
}

module.exports = { longestSubarray };
