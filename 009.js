// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//     a^2 + b^2 = c^2

// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let max = 1000;
let target = 1000;
let answer;
let answers = 0;
let product = 1;

for(let a = 1; a < max; a++) {
    for(let b = 1; b < max; b++) {
        if(b > a) {
            let sumOfSqr = Math.pow(a, 2) + Math.pow(b, 2);
            let c = Math.sqrt(sumOfSqr);
            if (Number.isInteger(c) && c > b) {
                // console.log([[a, b, c], a + b + c]+""); // Debug
                if(a + b + c === target) {
                    answer = [[a, b, c], a+b+c];
                    product = a*b*c;
                    answers++;
                }
            }
        }
    }
}
let a = answer[0][0];
let b = answer[0][1];
let c = answer[0][2];
console.log("a:", a, "b:", b, "c:", c);
console.log("sum:", a + b + c, "target:", target, "found:", answers, "times");
console.log("product:", a*b*c);