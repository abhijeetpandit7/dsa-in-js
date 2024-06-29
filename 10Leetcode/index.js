const { mergeAlternately } = require("./01MergeStringsAlternately");
const { gcdOfStrings } = require("./02GCDOfStrings");
const { kidsWithCandies } = require("./03KidsWithGreatestNumberOfCandies");
const { canPlaceFlowers } = require("./04CanPlaceFlowers");
const { reverseVowels } = require("./05ReverseVowelsOfString");
const { reverseWords } = require("./06ReverseStringWords");
const { productExceptSelf } = require("./07ProductOfArrayExceptSelf");
const { increasingTriplet } = require("./08IncreasingTripletSubsequence");
const { compress } = require("./09StringCompression");
const { moveZeroes } = require("./10MoveZeroes");
const { isSubsequence } = require("./11IsSubsequence");
const { maxArea } = require("./12ContainerWithMostWater");
const { maxOperations } = require("./13MaxKSumPairs");
const { findMaxAverage } = require("./14MaxAverageSubArray");
const { maxVowels } = require("./15MaxVowelsInSubstring");
const { longestOnes } = require("./16MaxConsecutiveOnes");
const { longestSubarray } = require("./17LongestSubArrayOnes");
const { largestAltitude } = require("./18HighestAltitude");
const { pivotIndex } = require("./19PivotIndex");
const { findDifference } = require("./20DifferenceOf2Arrays");
const { uniqueOccurrences } = require("./21UniqueNumberOfOccurrences");
const { closeStrings } = require("./22DetermineIfCloseStrings");
const { equalPairs } = require("./23EqualRowColumnPairs");
const { removeStars } = require("./24RemovingStarsFromString");
const { asteroidCollision } = require("./25AsteroidCollision");
const { decodeString } = require("./26DecodeString");

// console.log(mergeAlternately("abc", "def")); // Output: adbecf
// console.log(mergeAlternately("hello", "world")); // Output: hweolrllod
// console.log(mergeAlternately("12345", "67890")); // Output: 1627384950

// console.log(gcdOfStrings("ABCABC", "ABC")); // Output: ABC
// console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: AB
// console.log(gcdOfStrings("LEET", "CODE")); // Output: ""

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // Output: [true, true, true, false, true]
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // Output: [true, false, false, false, false]
// console.log(kidsWithCandies([12, 1, 12], 10)); // Output: [true, false, true]

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 2)); // Output: false
// console.log(canPlaceFlowers([0, 0, 0, 0, 0], 3)); // Output: true

// console.log(reverseVowels("hello")); // Output: holle
// console.log(reverseVowels("leetcode")); // Output: leotcede
// console.log(reverseVowels("aA")); // Output: Aa

// console.log(reverseWords("  Hello world  ")); // Output: "Hello world"
// console.log(reverseWords("SingleWord")); // Output: "SingleWord"

// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([5, 2, 7, 4])); // Output: [56, 140, 40, 70]
// console.log(productExceptSelf([3, 1, 2])); // Output: [2, 6, 3]

// console.log(increasingTriplet([1, 2, 3, 4, 5])); // Output: true
// console.log(increasingTriplet([5, 4, 3, 2, 1])); // Output: false
// console.log(increasingTriplet([1, 2])); // Output: false

// console.log(compress(["a", "a", "b", "c", "c", "c", "c", "c", "a", "a", "a"])); // Output: "a2bc5a3"
// console.log(compress(["a", "b", "c", "d", "e", "f", "g"])); // Output: "abcdefg"
// console.log(compress(["a", "a", "b", "b", "b"])); // Output: "a2b3"

// console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
// console.log(moveZeroes([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// console.log(isSubsequence("abc", "ahbgdc")); // Output: true
// console.log(isSubsequence("abc", "ab")); // Output: false
// console.log(isSubsequence("abc", "")); // Output: false

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
// console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
// console.log(maxArea([1, 2, 1])); // Output: 2

// console.log(maxOperations([1, 2, 3, 4, 5], 5)); // Output: 2
// console.log(maxOperations([3, 1, 3, 4, 3], 6)); // Output: 1

// console.log(findMaxAverage([0, 0, 0, 0, 0], 2)); // Output: 0
// console.log(findMaxAverage([-1, -2, -3, -4, -5], 1)); // Output: -1

// console.log(maxVowels("leetcode", 3)); // Output: 3
// console.log(maxVowels("aeiou", 5)); // Output: 5

// console.log(longestOnes([1, 1, 0, 1, 1, 0, 1, 0], 2)); // Output: 7
// console.log(longestOnes([1, 0, 0, 1, 0, 1, 0, 1], 1)); // Output: 3
// console.log(longestOnes([0, 0, 0, 0, 0], 3)); // Output: 3

// console.log(longestSubarray([1, 1, 0, 1, 1, 0, 1, 0])); // Output: 4

// console.log(largestAltitude([1, 2, 3, 4, 5])); // Output: 15
// console.log(largestAltitude([-1, -2, -3, -4, -5])); // Output: 0

// console.log(pivotIndex([1, 2, 3])); // Output: -1
// console.log(pivotIndex([2, 1, -1])); // Output: 0

// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // Output: 3
// console.log(findDifference([4, 5, 6], [4, 5, 6])); // Output: 0

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 3])); // Output: false
// console.log(uniqueOccurrences([-1, -2, -2, -1, -1, -3])); // Output: true

// console.log(closeStrings("hello", "world")); // Output: false
// console.log(closeStrings("abc", "cba")); // Output: true

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]])); // Output: 1
// console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // Output: 3

// console.log(removeStars("Hello*World")); // Output: "HellWorld"
// console.log(removeStars("")); // Output: ""

// console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
// console.log(asteroidCollision([8, -8])); // Output: []
// console.log(asteroidCollision([10, 2, -5])); // Output: [10]

// console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
// console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
// console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
// console.log(decodeString("abc3[cd]xyz")); // Output: "abccdcdcdxyz"
// console.log(decodeString("10[a]")); // Output: "aaaaaaaaaa"
