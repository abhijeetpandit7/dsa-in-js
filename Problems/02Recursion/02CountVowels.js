function isVowel(char) {
  return "aeiou".indexOf(char.toLowerCase()) >= 0;
}

function iterativeCountVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) count++;
  }
  return count;
}

function recursiveCountVowels(str, index = -1) {
  const char = str.at(index);
  if (char) return isVowel(char) + recursiveCountVowels(str, index - 1);
  return 0;
}

function recursiveCountVowels1(str, index = 0) {
  if (index === str.length) return 0;
  return isVowel(str[index]) + recursiveCountVowels1(str, index + 1);
}

function recursiveCountVowels2(str) {
  return (function recurse(len) {
    console.log(`winding: ${str[len - 1]} from ${str.substring(0, len)}`);
    if (len === 0) return 0;
    const charResult = isVowel(str[len - 1]);
    const recursedResult = recurse(len - 1);
    console.log(
      `count after checkung: ${str[len - 1]}: ${charResult + recursedResult}`
    );
    return charResult + recursedResult;
  })(str.length);
}

console.log(iterativeCountVowels("sequoia"));
console.log(recursiveCountVowels("sequoia"));
console.log(recursiveCountVowels1("sequoia"));
console.log(recursiveCountVowels2("sequoia"));
