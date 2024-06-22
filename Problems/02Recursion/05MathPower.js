function iterativeMathPower(num, pow) {
  let res = 1;
  if (pow > 0) {
    while (pow--) {
      res *= num;
    }
  } else if (pow < 0) {
    while (pow++) {
      res /= num;
    }
  }
  return res;
}

function recursiveMathPower(num, pow) {
  if (pow === 0) return 1;
  if (pow < 0) return recursiveMathPower(num, pow + 1) / num;
  return num * recursiveMathPower(num, pow - 1);
}

console.log(Math.pow(2, 5));
console.log(iterativeMathPower(2, 5));
console.log(recursiveMathPower(2, 5));
console.log(Math.pow(2, -3));
console.log(iterativeMathPower(2, -3));
console.log(recursiveMathPower(2, -3));
