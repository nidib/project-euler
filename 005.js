// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

let number = 1;
let flags = 0;
let within = 20;

while(flags < within) {
    for(let i = 1; i <= within; i++) {
        if(number % i === 0) {
            if(flags < within) {
                flags++;
            }
        } else {
            number++;
            flags = 0;
        }
    }
}

console.log(number, flags);