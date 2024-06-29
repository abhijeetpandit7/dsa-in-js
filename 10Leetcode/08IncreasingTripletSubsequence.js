// leetcode.com/problems/increasing-triplet-subsequence
/**
 * @param {Number[]} nums
 * @returns {Boolean}
 */
function increasingTriplet(nums) {
  let a = Infinity,
    b = Infinity,
    c = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= a) a = nums[i];
    else if (nums[i] <= b) b = nums[i];
    else c = nums[i];
    if (c < Infinity && c > b && b > a) return true;
  }
  return false;
}

module.exports = { increasingTriplet };
