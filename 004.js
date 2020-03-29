// A palindromic number reads the same both ways.The largest palindrome made 
// from the product of two 2 - digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3 - digit numbers.

function isPali(num) {
    if(num.toString() === num.toString().split('').reverse().join('')) {
        return true;
    }
    return false;
}

let larger = 0;
let prod;
for(let i = 999; i > 99; i--) {
    for(let j = 999; j > 99; j--) {
        prod = i*j;
        if(isPali(prod)) {
            if(prod > larger) {
                larger = prod;
            }
        }
    }
}

console.log(larger);