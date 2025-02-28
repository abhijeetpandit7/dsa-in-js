// leetcode.com/problems/move-zeroes
/**
 * @param {Number[]} nums
 * @returns {void}
 */
function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

module.exports = { moveZeroes };
