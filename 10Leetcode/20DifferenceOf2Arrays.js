// leetcode.com/problems/find-the-difference-of-two-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  const set1 = new Set(nums1),
    set2 = new Set(nums2);
  for (const val of set1.values()) {
    if (set2.has(val)) {
      set1.delete(val);
      set2.delete(val);
    }
  }
  return [Array.from(set1.values()), Array.from(set2.values())];
}

module.exports = { findDifference };
