//Write a program to encode a string using run-length encoding.

const input = "aaabbcccc";
let uniqueCharacters = "";
let startingCharacter = "";

for (let i of input) {
  if (startingCharacter != i) {
    uniqueCharacters += i;
    startingCharacter = i;
  }
}
console.log(uniqueCharacters);

let count = 0;
let output = "";

for (let j of uniqueCharacters) {
  count = 0;
  for (let k of input) {
    if (j == k) {
      count += 1;
    }
  }
  output = output + j + count;
}

console.log(output);