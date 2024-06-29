// leetcode.com/problems/find-the-highest-altitude
/**
 * @param {Number[]} gain
 * @returns {Number}
 */
function largestAltitude(gain) {
  let alt = 0,
    max = 0;
  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    max = Math.max(max, alt);
  }
  return max;
}

module.exports = { largestAltitude };
