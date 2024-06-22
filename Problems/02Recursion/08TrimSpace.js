// task is to remove all tabs and spaces from a string. This includes the character \t and " " from a string

function trimTabsSpaces(str) {
  return (function recurse(index) {
    if (index < 0) return "";
    const char = str.at(index);
    return recurse(index - 1) + (char !== " " && char !== "\t" ? char : "");
  })(str.length - 1);
}

console.log(trimTabsSpaces("I Am Batman!\t Savior of Gotham"));
