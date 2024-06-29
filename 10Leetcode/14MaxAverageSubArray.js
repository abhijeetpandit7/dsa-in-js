// https://leetcode.com/problems/maximum-average-subarray-i
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum / k;
}

module.exports = { findMaxAverage };
