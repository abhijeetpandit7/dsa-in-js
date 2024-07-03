function maskify(input) {
  let maskedInput = "";
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (isNaN(Number(element)) || i < 1 || i >= input.length - 5)
      maskedInput += element;
    else maskedInput += "#";
  }
  return maskedInput;
}

console.log(maskify("5512103073210694")); // 5###########0694
console.log(maskify("4556-3646-0793-5616")); // 4###-####-####-5616
console.log(maskify("")); // ''
console.log(maskify("paypalisgreat")); // paypalisgreat
