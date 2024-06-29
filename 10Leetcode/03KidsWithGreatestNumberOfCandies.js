// leetcode.com/problems/kids-with-the-greatest-number-of-candies
/**
 * @param {Number[]} candies
 * @param {Number} extraCandies
 * @returns {Boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  return candies.reduce((acc, candy) => {
    acc.push(candy + extraCandies >= maxCandy);
    return acc;
  }, []);
}

module.exports = { kidsWithCandies };
