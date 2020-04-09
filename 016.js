// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 21000 ?

let power = String(BigInt(Math.pow(2, 1000))).split("");
let sum = 0;

sum = power.reduce((sum, current) => sum += parseInt(current), 0);
console.log(sum)