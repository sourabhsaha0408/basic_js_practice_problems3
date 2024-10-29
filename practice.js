//Write a program to capitalize the first letter of each word in a given sentence.

const input = "hello huw world from code";
const arrInput = input.split(' ');
let output ='';

for(let i of arrInput){
    i = i.charAt(0).toUpperCase()+i.slice(1);
    output+= i +' ';
}

console.log(output);
