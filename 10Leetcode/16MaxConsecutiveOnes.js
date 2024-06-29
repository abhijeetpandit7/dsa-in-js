// leetcode.com/problems/max-consecutive-ones-iii
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes1(nums, k) {
  let count = 0,
    left = 0,
    right = 0;
  let max = count,
    isK = k,
    queue = [];
  while (right < nums.length) {
    if (queue.length && left - 1 == queue[0]) {
      queue.shift();
      k++;
    }
    if (nums[right] == 1) {
      count++;
      right++;
    } else if (k) {
      count++;
      queue.push(right++);
      k--;
    } else if (isK) {
      count--;
      left++;
    } else {
      right = ++left;
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
}

function longestOnes(nums, k) {
  let max = 0,
    left = 0,
    zeroes = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] == 0) zeroes++;
    while (zeroes > k) {
      if (nums[left++] == 0) zeroes--;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

module.exports = { longestOnes };
