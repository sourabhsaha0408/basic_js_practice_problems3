//Write a program to find the longest common prefix among a list of strings.

const input = ["flower", "flow", "flight"];
let shortestWord = input[0];

for (i = 1; i < input.length; i++) {
  if (shortestWord.length > input[i].length) {
    shortestWord = input[i];
  }
}
console.log(shortestWord);

let commonPrefix = "";
let count = 0;

for (j = shortestWord.length; j >= 1; j--) {
  count = 0;
  for (let i of input) {
    commonPrefix = "";
    if (i.slice(0, j) == shortestWord.slice(0, j)) {
      commonPrefix = shortestWord.slice(0, j);
      count += 1;
    }
  }
  if (count == input.length) {
    console.log(commonPrefix);
    break;
  }
}

if (count < input.length) {
  console.log("no commonPrefix");
}
