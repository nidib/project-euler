// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

let number = 20;
let flags = 0;
let within = 20;
let found = false;

while(!found) {
    for(let i = 1; i <= within; i++) {
        if(number % i === 0) {
            flags++;
            if(flags === within) {
                found = true;
            }
        } else {
            number += 20;
            flags = 0;
        }
    }
}

console.log(number);