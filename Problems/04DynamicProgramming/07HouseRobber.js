function rob(nums, idx = 0, memo = {}) {
  if (idx === nums.length - 1) return nums.at(-1);
  if (idx >= nums.length) return 0;
  if (memo[idx] >= 0) return memo[idx];
  memo[idx] = Math.max(
    nums[idx] + rob(nums, idx + 2, memo),
    rob(nums, idx + 1, memo)
  );
  return memo[idx];
}
