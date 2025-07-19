/* Task 1 
Requirement:
 Write a function named hasUpperCase() which takes a string argument and return true 
 if there is an uppercase letter and false otherwise.
Examples:
 hasUpperCase("javascript") -> false
 hasUpperCase("John")       -> true
 hasUpperCase("$125.0")     -> false
 hasUpperCase("")           -> false
 */
console.time('Task 1 Duration');
console.log ('--- Task 1 ---');
let hasUpperCase = str => {
    for (let c of str) {
        if (c >= "A" && c <= "z") return true;
    }
    return false;
}

// hasUpperCase = str => /[A-Z]/.test(str);

let cases = ["javascript", "John", "$125.0", ""];
cases.forEach(str => console.log(`${`hassUpperCase("${str}")`.padEnd(30)} -> ${hasUpperCase(str)}`));

console.timeEnd('Task 1 Duration');

/* Task 2 
Requirement:
 Write a function named noDigit() which takes a string argument and returns a new string 
 with all digits removed from the original string​.
Examples:
 noDigit("")                     -> ""
 noDigit("Javascript")           -> "Javascript"
 noDigit("123Hello")             -> "Hello"
 noDigit("123Hello World149") 	-> "Hello World”
 noDigit("123Tech456Global149") 	-> "TechGlobal"
*/
console.time('Task 2 Duration');
console.log ('\n--- Task 2 ---');

let noDigit = str => {
    let result = '';
    for (let c of str) {
        if (c < '0' || c > '9') result += c;
    }
    return result;
}

// noDigit = str => str.replace(/[0-9]/g, '');

cases = ["", "Javascript", "123Hello", "123Hello World149", "123Tech456Global149"];
cases.forEach(str => console.log(`${`noDigit("${str}")`.padEnd(30)} -> "${noDigit(str)}"`));
console.timeEnd('Task 2 Duration');

/* Task 3
Requirement:
 Write a function named noVowel() which takes a string argument and returns a new string 
 with all vowels removed from the original string​.
Examples:
 noVowel("TechGlobal")  -> "TchGlbl"
 noVowel("AEOxyz")      -> "xyz"
 noVowel("Javascript")  -> "Jvscrpt"
 noVowel("")            -> ""
 noVowel("125$")        -> "125$"
*/
console.time('Task 3 Duration');
console.log ('\n--- Task 3 ---');
let noVowel = str => {
    let result = '';
    for (let c of str) {
        if (!'aeiou'.includes(c.toLowerCase())) result += c;
    }
    return result;
}

// noVowel = str => str.replace(/[aeiou]/gi,'');

cases = ["TechGlobal", "AEOxyz", "Javascript", "", "125$"];
cases.forEach(str => console.log(`${`noVowel("${str}")`.padEnd(30)} -> "${noVowel(str)}"`));
console.timeEnd('Task 3 Duration');

/* Task 4
Requirement:
 Write a function named no13() which takes an array of numbers as argument and return 
 a new array with all 13s replaced with 0s. ​
Examples:
 no13([1, 2, 3 ,4])          -> [1, 2, 3 ,4] 
 no13([13, 2, 3])            -> [0, 2, 3]
 no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
 no13([])                    -> []

*/
console.time('Task 4 Duration');
console.log ('\n--- Task 4 ---');
// let no13 = numArr => {
//     let result = [];
//     for (num of numArr) {
//         if (num === 13) {
//             num = 0;
//         };
//         result.push(num);
//     }
//     return result;
// };

let no13 = numArr => numArr.map(n => n === 13 ? 0 : n);

cases = [[1, 2, 3 ,4], [13, 2, 3], [13, 13, 13 , 13, 13], []];
cases.forEach(numArr => console.log(`${`no13([${numArr}])`.padEnd(30)} -> [${no13(numArr)}]`));
console.timeEnd('Task 4 Duration');

/* Task 5
Requirement:
 Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
 middleInt(1, 2, 2)     -> 2
 middleInt(5, 5, 8)     -> 5
 middleInt(5, 3, 5)     -> 5
 middleInt(1, 1, 1)     -> 1
 middleInt(-1, 25, 10)  -> 10

*/
console.time('Task 5 Duration');
console.log ('\n--- Task 5 ---');
let middleInt = (a, b, c) => {
    let nums = [a, b, c].sort((x, y) => x - y);
    return nums[1];
};

cases = [[1, 2, 2], [5, 5, 8], [5, 3, 5], [1, 1, 1], [-1, 25, 10]];
cases.forEach(nums => console.log(`${`middleInt(${nums.join(', ')})`.padEnd(30)} -> ${middleInt(...nums)}`));
console.timeEnd('Task 5 Duration');

/* Task 6
Requirement:
 Write a function named sumOfDigits() which takes a string argument and returns sum 
 of all digits from the original string. ​
Examples:
 sumOfDigits("Javascript")       -> 0
 sumOfDigits("John’s age is 29") -> 11
 sumOfDigits("$125.0")           -> 8
 sumOfDigits("")                 -> 0

*/
console.log ('\n--- Task 6 ---');



/* Task 7
Requirement:
 Write a function named arrFactorial() which takes an array of numbers as argument and  
return the array with every number replaced with their factorials.
Examples:
 arrFactorial([1, 2, 3 ,4])    -> [1, 2, 6, 24]
 arrFactorial([0, 5])          -> [1,120]
 arrFactorial([5 , 0, 6])      -> [120, 1, 720]
 arrFactorial([])              -> []
*/
console.log ('\n--- Task 7 ---');


/* Task 8
Requirement:
 Write a function named categorizeCharacters() which takes a string word as argument and return an array 
 as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
 categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
 categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
 categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

*/
console.log ('\n--- Task 8 ---');