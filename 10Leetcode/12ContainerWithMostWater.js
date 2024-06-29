// leetcode.com/problems/container-with-most-water
/**
 * @param {Number[]} height
 * @returns {Number}
 */
function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    area = 0;
  while (left < right) {
    let h,
      w = right - left;
    if (height[left] < height[right]) h = height[left++];
    else h = height[right--];
    area = Math.max(area, h * w);
  }
  return area;
}

module.exports = { maxArea };
