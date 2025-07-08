/**
 * Convert given Strings below to nuber data types and find thier sum, product, division,subtraction, remainder and exponentiation 
 * let str1 = "5", str2 = "2";
 * Expected results:
    The sum of 5 and 2 is = 7
    The product of 5 and 2 is = 10
    The division of 5 and 2 is = 2.5
    The subtraction of 5 and 2 is = 3
    The remainder of 5 and 2 is = 1
    The exponentiation of 5 and 2 is 25
 */
console.log("Task 1\n");

let str1 = "5", str2 = "2";

console.log(`Expected results:`)
console.log(`The sum of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) + Number(str2)}`);
console.log(`The product of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) * Number(str2)}`);
console.log(`The division of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of ${Number(str1)} and ${Number(str2)} is = ${Math.pow(Number(str1), Number(str2))}\n`);

/**
 * Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.
 * let s1 = "200", s2 = "-50";
 * Expected results:
    The greatest value is = 200
    The smallest value is = -50
    The average is = 75
    The absolute difference is = 250
 */
console.log("Task 2\n");

let s1 = "200", s2 = "-50";
let n1 = Number(s1), n2 = Number(s2);

console.log(`Expected Results:`);
console.log(`The greatest value is = ${Math.max(n1, n2)}`);
console.log(`The smallest value is = ${Math.min(n1, n2)}`);
console.log(`The average is = ${(n1 + n2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(n1 - n2)}\n`);


/**
 * Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the absolute difference of these numbers.
 * Test Data:
    5, 27
 * Expected Output:
    The absolute difference between number is = 22
 */
console.log("Task 3\n");

n1 = Math.floor(Math.random() * 50) + 1, n2 = Math.floor(Math.random() * 50) + 1; 

console.log(`Test Data:\n${n1}, ${n2}`);
console.log(`The absolute difference between number is = ${Math.abs(n1 - n2)}\n`);


/**
 * Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the max and min of these numbers.
 * Test Data:
    3, 15, 45, 20, 25
 * Expected Output:
    The max value = 45
    The min value = 3   
 */
console.log("Task 4\n");

let nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);

console.log(`Test Data:\n${nums.join(", ")}\n`);
console.log(`Expected Output:`);
console.log(`The max value = ${Math.max(...nums)}`);
console.log(`The min value = ${Math.min(...nums)}\n`);

/**
 * Write a program that generates 3 random numbers between 50 and 100 both included.
 * First print the numbers
 * Then, find the sum of these numbers
 * Test Data:
   55, 67, 90
 * Expected output:
    The number 1 = 55
    The number 2 = 67
    The number 3 = 90
    The sum of numbers is = 212
 */
console.log("Task 5\n");

nums = Array.from({ length: 3 }, () => Math.floor(Math.random() * 51) + 50);

console.log(`Test Data:\n${nums.join(", ")}\n`);
console.log(`Expected Output:`);
console.log(`The number 1 = ${nums[0]}`);
console.log(`The number 2 = ${nums[1]}`);
console.log(`The number 3 = ${nums[2]}`);
console.log(`The sum of numbers is = ${nums.reduce((a, b) => a + b)}\n`);

/**
 * Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.
 * Print true if all numbers are greater than 25.
 * Print false if any of the number is less than or equals 25
 */
console.log("Task 6\n");
nums = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1);

console.log(`Test Data:\n${nums.join(", ")}`);
console.log(`${nums.every(n => n > 25)}\n`);

/**
 * Assume you are given a name let name = "David";
    1. Print out the length of the name
    2. Find the first character in the name and print it
    3. Find the last characteer in the name and print it
    4. Find the first 3 characters in the name and print them
    5. Find the last 3 characters in the name and print them
 * Expected Output:
    The length of the name is = 5
    The first character in the name is = D
    The last character in the name is = d
    The first 3 characters in the name are = Dav
    The last 3 characters in the name are = vid
 */
console.log("Task 7\n");
const name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name[name.length - 1]}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);



