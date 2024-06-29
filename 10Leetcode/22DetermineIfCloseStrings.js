// https://leetcode.com/problems/determine-if-two-strings-are-close
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function crypto1(arr) {
  return JSON.stringify(Array.from(arr).sort((a, b) => a - b))
}
function crypto2(arr) {
  return JSON.stringify(Array.from(arr).sort((a, b) => a.charCodeAt() - b.charCodeAt()))
}
function closeStrings(word1, word2) {
  if (word1.length != word2.length) return false
    const map1 = new Map(), map2 = new Map()
    for (let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) ?? 0) + 1)
        map2.set(word2[i], (map2.get(word2[i]) ?? 0) + 1)
    }
    return (crypto1(map1.values()) == crypto1(map2.values()))
        && (crypto2(map1.keys()) == crypto2(map2.keys()))
}

module.exports = { closeStrings };
