// leetcode.com/problems/can-place-flowers
/**
 * @param {Number[]} flowerbed
 * @param {Number} n
 * @returns {Boolean}
 */
function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n; i++) {
    if (flowerbed[i] == 0 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n == 0;
}

module.exports = { canPlaceFlowers };
