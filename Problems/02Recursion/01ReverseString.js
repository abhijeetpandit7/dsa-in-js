function iterativeReverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

function recursiveReverseString(str, pos = -1) {
  const char = str.at(pos);
  console.log(`Winding: ${char}`);
  if (!char) return "";
  // return char + recursiveReverseString(str, pos - 1);
  const recursedResult = recursiveReverseString(str, pos - 1);
  const result = char + recursedResult;
  console.log(`Unwinding: ${char} + ${recursedResult} = ${result}`);
  return result;
}

console.log(iterativeReverseString("Hello World!"));
console.log(recursiveReverseString("Hello World!"));
