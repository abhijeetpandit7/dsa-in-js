// leetcode.com/problems/find-pivot-index
/**
 * @param {Number[]} nums
 * @returns {Number}
 */
function pivotIndex(nums) {
  let lSum = 0,
    rSum = nums.reduce((acc, num) => acc + num, 0);
  for (let i = 0; i < nums.length; i++) {
    rSum -= nums[i];
    if (lSum == rSum) return i;
    lSum -= nums[i];
  }
  return -1;
}

module.exports = { pivotIndex };
