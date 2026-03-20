const str = "HELLO world";
const vowels = "aeiouAEIOU";
let result = [];

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    result.push(str[i]);
  }
}

console.log(result);