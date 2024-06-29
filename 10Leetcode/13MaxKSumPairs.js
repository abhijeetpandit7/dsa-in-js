// leetcode.com/problems/max-number-of-k-sum-pairs
/**
 * @param {Number[]} nums
 * @param {Number} k
 * @returns {Number}
 */
function maxOperations(nums, k) {
  let map = new Map(), ctr = 0;
    for (let i = 0; i < nums.length; i++) {
        const complement = k - nums[i];
        if (map.has(complement) && map.get(complement) > 0) {
            map.set(complement, map.get(complement) - 1);
            ctr++;
        } else {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
        }
    }
    return ctr;
}

module.exports = { maxOperations };
