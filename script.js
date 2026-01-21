console.log("Hello World");

let number =  Number(prompt("Enter a number:"));


if (number % 2 === 0) {
    console.log(number + " is an Even number");
} else {
    console.log(number + " is an Odd number");
}


for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("Counting completed.");

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log(a + " is the largest number");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest number");
} else {
    console.log(c + " is the largest number");
}
