// leetcode.com/problems/product-of-array-except-self
/**
 * @param {Number[]} nums
 * @returns {Number[]}
 */
function productExceptSelf(nums) {
  const arr = Array.from({ length: nums.length }, function () { return 1 });
  const n = arr.length - 1;
  let right = 1, left = 1;
  for (let i = 0; i <= n; i++) {
      arr[n - i] *= right;
      right *= nums[n - i];
      arr[i] *= left;
      left *= nums[i];
  }
  return arr;
}

module.exports = { productExceptSelf };
