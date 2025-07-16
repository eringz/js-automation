/**
 *  Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive)
 * Expected Output
    7
    14
    21
    .
    .
    .
    .
    91
    98

 */
console.log(`Task-1\n`);

let maxNum = 100;

for (let i = 1; i <= maxNum; i++) {
  if ( i % 7 === 0) console.log(i);
}

/**
 * Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 ( both inclusive).
 * Expected Output:
    6
    12
    8
    .
    .
    36
    42
    48
 */
console.log(`\nTask-2\n`);

maxNum = 50;
let i = 1;

while (i < maxNum) {
  if (i % 2 === 0 && i % 3 === 0) console.log(i);
  i++;
}

/**
 * Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
 * Expected Output:
    100
    95
    85
    .
    .
    .
    60
    55
    50
 */
console.log(`\nTask-3\n`);

maxNum = 100;
let minNum = 50;

[...Array(maxNum - minNum + 1 )].map((_, i) => maxNum - i).filter(x => x % 5 === 0).forEach(x => console.log(x));


/**
 * Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
 * Expected Output: 
    The square of 0 is = 0
    The square of 1 is = 1
    The square of 2 is = 4
    The square of 3 is = 9
    The square of 4 is = 16
    The square of 5 is = 25
    The square of 6 is = 36
    The square of 7 is = 49
 */
console.log(`\nTask-4\n`);

minNum = 0;
maxNum = 7;

console.log(`Expected Output: `);
[...Array(maxNum - minNum)].map((_, x) => console.log(`The square of ${x} is ${Math.pow(x, 2)}`));

/**
 * Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
 * Calculation => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
 * NOTE: Use loop!!!
 * Expected Output:
   55
 */
console.log(`\nTask-5\n`);
minNum = 1;
maxNum = 10;
let total = 0;

while (minNum <= maxNum) {
  total += minNum;
  minNum++;
}

console.log(`Expected Output:\n${total}`);


/**
 * Write a program generates a random number between 1 and 10 (both inclusive).
 * And find the factorial of the number.
 * Mathematicaly, the factorial of a non-negative integer n is defined as:
 * n! = n x (n-1) * (n-2) x ... x 2 x 1
 * For example:
   5! = 5 x 4 x 3 x 2 x 1 = 120
   4! = 4 x 3 x 2 x 1 = 24
   0! (by convention) is defined as 1
 */
console.log(`\nTask-6\n`);

const randomNumber = (start = 1, end = 10) => Math.floor(Math.random() * end) + start;
const sequence = (start, end = 1) => Array.from({length: Math.abs(end - start) + 1}, (_, x) => start + x * (start <= end ? 1 : -1));
const factorial = n => sequence(n, 1).reduce((product, val) => product * val, 1);
const num = randomNumber();

console.log(`${num}! = ${sequence(num, 1).join(" x ")} = ${factorial(num)}`);

/**
 * Write a program generates a random number between 1 and 100 (both inclusive).
 * Keep generating a new number till you get a number that is divisible by 5.
 * The program should also count how many attempts it takes to generate such a number.
 * Eventually, print the random number divisible by 5 with the number of attempts as below.
 * Expected Output:
   The random number is (randomNumber) and it took (attempts) attempt/s to generate it.
 */
console.log(`\nTask-7\n`);

const untilDivBy5 = () => {
  let attempt = 0;
  let num;

  do {
      num = randomNumber(1, 100);
      attempt++;
  } while (num % 5 !== 0) {
    return {num, attempt};
  }
}

const pluralize = n => n > 1 ? 'attempts' : 'attempt';
const result = untilDivBy5();

console.log(`The random number is (${result.num}) and it took (${result.attempt}) ${pluralize(result.attempt)} to generate it.`);


/**
 * Create an array that stores countries below.
 * Germany, Argentina, Ukraine, Romania
 * Then:
 * Output the entire array
 * Output the entire array sorted lexicographically
 * Expected Result:
   ['Germany', 'Argentina', 'Ukraine', 'Romania']
   ['Argentina', 'Germany', 'Romania', 'Ukraine']
 */
console.log(`\nTask-8\n`);
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(`Expected Result:\n${countries}\n${countries.sort()}`);


/**
 * Create a String array that stores cartoon dogs below 
 * Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky
 * THEN:
 * Output the entire array
 * Then, check if the array has Pluto element
   if it has Pluto, then output true
   if it does not have Pluto, output false
 * Expected Result:
   ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']
   true
 */
console.log(`\nTask-9\n`);

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(`Expected Result:\n[${cartoonDogs.join(', ')}]\n${cartoonDogs.includes('Pluto')}`);

/**
 * Create an array that stores cartoon cats below.
 * Garfield, Tom, Sylvester, Azrael
 * THEN:
 * Output the entire array sorted lexicographically
 * Then, check if the array has both Garfield and Felix
   if it has both, then output true
   if it does not have both, output false
 * Expected Result:
   ['Azrael', 'Garfield', 'Sylvester', 'Tom']
   false
 */
console.log(`\nTask-10\n`);
const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(`Expected Result:\n[${cartoonCats.join(', ')}]`);

/**
 * Create an array that stores numbers below
 * 10.5, 20.75, 70, 80, 15, 75
 * THEN:
 * Output the entire array
 * Output each element
 * Expected Result:
 * [10.5, 20.75, 70, 80, 15.75]
   10.5
   20.75
   70
   80
   15.75
 */
console.log(`\nTask-11\n`);
let arrayNum = [10.5, 20.75, 70, 80, 15, 75];

console.log(`Expected Result:\n[${arrayNum}]`);
arrayNum.forEach(x => console.log(x));

/**
 * Create an array that stores objects below
 * Pen, notebook, Book, paper, bag, pencil, Ruler
 * THEN:
 * Output the entire array.
 * Output how many elements starts with 'B' or 'P', ignoring cases.
 * Output how many elements has 'book', or 'pen' partial strings, ignoring cases.
 * Expected Result:
   ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']
   Elements starting with 'B' or 'P' = 5
   Elements having 'book' or 'pen' = 4
 */
console.log(`\nTask-12\n`);
const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
   
console.log(`Expected Result:\n[${objects.join(', ')}]`);
console.log(`Elements starting with 'B' or 'P' = ${objects.filter(object => object[0].toUpperCase() === 'B' || object[0].toUpperCase() === 'P').length}`);
console.log(`Elemnts having 'book' or 'pen = ${objects.filter(object => object.toLowerCase().includes('book') || object.toLowerCase().includes('pen')).length}`);

/**
 * Create an array that stores numbers below.
 * 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
 * THEN:
 * Output the entire array
 * Output how many elements are more than 10
 * Output how many elements are less than 10
 * Output how many elements are 10
 * Expected Result:
   [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
   Elements that are more than 10 = 5
   Elements that are less than 10 = 4
   Elements that are 10 = 2
 */
console.log(`\nTask-13\n`);
arrayNum = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(`Expected Result:\n[${arrayNum.join(', ')}]`);
console.log(`Elements that are more than 10 = ${arrayNum.filter(x => x > 10).length}`);
console.log(`Elements that are more than 10 = ${arrayNum.filter(x => x < 10).length}`);
console.log(`Elements that are more than 10 = ${arrayNum.filter(x => x === 10).length}`);

/**
 * Create 2 arrays that stores numbers below.
 * First array -> [5, 8, 13, 1, 2]
 * Second array -> [9, 3, 67, 1, 0]
 * THEN:
 * Output both arrays
 * Then, create a new array that will take the greatest of same index from first 2 arrays and output the third array as well.
 * Expected Result:
   1st array is = [5, 8, 13, 1, 2]
   2nd array is = [9, 3, 67, 1, 0]
   3rd array is = [9, 8, 67, 1, 2]
 */
console.log(`\nTask-14\n`);
const firstArray = [5, 8, 13, 1, 2], secondArray = [9, 3, 67, 1, 0];

console.log('Expected Result');
console.log(`1st array is = [${firstArray.join(', ')}]`);
console.log(`2nd array is = [${secondArray.join(', ')}]`);
console.log(`3rd array is = [${firstArray.map((val, index) => Math.max(val, secondArray[index])).join(', ')}]`);

/**
 * Write a function named as firstDuplicate() which takes an array argument and returns the frist duplicated number in the array when invoked.
 * NOTE: Make your code dynamic that works for any array and return - 1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.
 * Examples:
   firstDuplicate([3,  7, 10, 0, 3, 10])              -> 3
   firstDuplicate([5, 7, 7, 0 ,5, 10])                -> 5
   firstDuplicate([5, '5', 3, 7, 4])                  -> -1
   firstDuplicate([123, 'abc', '123', 3, 'abc'])      -> 'abc'
   firstDuplicate([1, 2, 3])                          -> -1
   firstDuplicate(['foo', 'abc', '123', 'bar'])       -> -1
 */
console.log(`\nTask-15\n`);
const firstDuplicate = array => { const seen = new Set(); return array.find(item => seen.has(item) || !seen.add(item)) ?? -1; };

console.log('Examples:');
console.log(`firstDuplicate([3,  7, 10, 0, 3, 10])  -> ${firstDuplicate([3,  7, 10, 0, 3, 10])}`);
console.log(`firstDuplicate([5, 7, 7, 0 ,5, 10])  -> ${firstDuplicate([5, 7, 7, 0 ,5, 10])}`);
console.log(`firstDuplicate([5, '5', 3, 7, 4])  -> ${firstDuplicate([5, '5', 3, 7, 4])}`);
console.log(`firstDuplicate([123, 'abc', '123', 3, 'abc'])  -> ${firstDuplicate([123, 'abc', '123', 3, 'abc'])}`);
console.log(`firstDuplicate([1, 2, 3])  -> ${firstDuplicate([1, 2, 3])}`);
console.log(`firstDuplicate(['foo', 'abc', '123', 'bar'])  -> ${firstDuplicate(['foo', 'abc', '123', 'bar'])}`);

/**
 * Write a function names as getDuplicated() which takes an array argument and return all the duplicated elements in the array when invoked.
 * NOTE: Make your code dynamic that works for any array and return empty 
 * array if there are no duplicates in the array. For two elements to be
 * considered as duplicated, value and data types of the elements must be same.
 * Examples:
   getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])                      -> [0, -7]
   getDuplicates([1, 2, 5, 0, 7])                                       -> []
   getDuplicates(['A', 'foo', '12', 12 'bar', 'a', 'a', 'foo'])         -> ['foo', 'a']
   getDuplicats(['foo', '12', 12, 'bar', 'a'])                          -> []
 */
console.log(`\nTask-16\n`);
const getDuplicates = arr => {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates.join(", ");
};

console.log(`getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])) -> [${getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])}]`); 
console.log(`getDuplicates([1, 2, 5, 0, 7]) -> [${getDuplicates([1, 2, 5, 0, 7])}]`); 
console.log(`getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']) -> [${getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo'])}]`); 
console.log(`getDuplicates(['foo', '12', 12, 'bar', 'a']) ->  [${getDuplicates(['foo', '12', 12, 'bar', 'a'])}]`); 

/**
 * Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word seperately reversed when invoked.
 * NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and ater words in the given string.
 * Examples:
   reverseStringWords("Hello World")            -> "olleH dlroW"
   reverseStringWords("I like JavaScript")      -> "I ekil tpircSavaJ"
   reverseStringWords("Hello")                  -> "olleH"
   reverseStringWords("")                       -> ""
   reverseStringWords(" ")                      -> ""
 */
console.log(`\nTask-17\n`);
const reverseStringWords  = str => {
  let word = '', result = '', isWord = false;

  for (const char of str.trim() + ' ') {
    if (char !== ' ') {
      word = char + word;
      isWord = true;
    } else if (isWord) {
      result += word + ' ';
      word = '';
      isWord = false;
    }
  }

  return result.trim();
}

console.log(`reverseStringWords("Hello World") -> ${reverseStringWords("Hello World")}`);
console.log(`reverseStringWords("I like JavaScript") -> ${reverseStringWords("I like JavaScript")}`); 
console.log(`reverseStringWords("Hello") -> ${reverseStringWords("Hello")}`); 
console.log(`reverseStringWords("") -> ${reverseStringWords("")}`); 
console.log(`reverseStringWords(" ") -> ${reverseStringWords(" ")}`); 

/**
 * Write a function names as getEvens() which takes 2 number arguments and 
 * returns all the even numbers as an array stored from smallest even number
 * to greatest even number when invoked.
 * NOTE: Make your code dynamic that works for anu numbers and return
 * empty array if there are no even numbers in the range of given 2 numbers.
 * Assume you will not be given negative numbers.
 * Examples:
   getEvens(2, 7)    -> [2, 4, 6]
   getEvens(17, 5)   -> [6, 8, 10, 12, 14, 16]
   getEvens(4, 4)   -> [4]
   getEvens(3, 3)   -> []
 */
console.log(`\nTask-18\n`);
const getEvens = (a, b) => {
  const [start, end] = [Math.min(a, b), Math.max(a, b)];
  return Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(n => n % 2 === 0).join(", ");
};

console.log(`getEvens(2, 7) -> [${getEvens(2, 7)}]`); 
console.log(`getEvens(17, 5) -> [${getEvens(17, 5)}]`); 
console.log(`getEvens(4, 4) -> [${getEvens(4, 4)}]`); 
console.log(`getEvens(3, 3) -> [${getEvens(3, 3)}]`); 

/**
 * Write a function names as getMultipleOf5() which takes 2 number 
 * arguments and return all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
 * NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers.
 * Assyme you will not be given negative numbers.
 * Examples:
   getMultipleOf5(3, 17)        -> [5, 10, 15]
   getMultipleOf5(23, 5)        -> [20, 15, 10, 5]
   getMultipleOf5(5, 5)        -> [5]
   getMultipleOf5(2, 4)        -> []
 */
console.log(`\nTask-19\n`);
const getMultipleOf5 = (a, b) => {
  const [start, end] = [Math.min(a, b), Math.max(a, b)];
  const result = Array.from({ length: end - start + 1 }, (_, i) => i + start)
                      .filter(n => n % 5 === 0);
  return a <= b ? result : result.reverse().join(", ");
};

console.log(`getMultipleOf5(3, 17) -> [${getMultipleOf5(3, 17)}]`); 
console.log(`getMultipleOf5(23, 5) -> [${getMultipleOf5(23, 5)}]`); 
console.log(`getMultipleOf5(5, 5) -> [${getMultipleOf5(5, 5)}]`); 
console.log(`getMultipleOf5(2, 4) -> [${getMultipleOf5(2, 4)}]`); 

/**
 * Write a function names as fizzBuzz() which takes 2 numbers and 
 * returns a string composed with below requirements when invoked.
 * You need to find all the numbers within the range of given 2 numbers 
   (both inclusive) and store them in a string from smallest to greatest number with a ' | ' seperator for each number.
 * You will need to convert numbers divisible by 3 to 'Fizz'
 * You will need to convert numbers divisible by 5 to 'Buzz'
 * You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz'
 * The rest will stay the same.
 * NOTE: Make your code dynamic that works for any numbers.
 * Assume you will not be given negative numbers
 * Examples: 
   fizzBuzz(13, 18)              -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
   fizzBuzz(12, 5)               -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
   fizzBuzz(5, 5)                -> "Buzz"
   fizzBuzz(9, 6)                -> "Fizz | 7 | 8 | Fizz"
 */
console.log(`\nTask-20\n`);
const fizzBuzz = (a, b) => {
  const [start, end] = [Math.min(a, b), Math.max(a, b)];
  return Array.from({ length: end - start + 1 }, (_, i) => {
    const n = i + start;
    return n % 15 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n;
  }).join(' | ');
};

console.log(`fizzBuzz(13, 18) -> ${fizzBuzz(13, 18)}`); 
console.log(`fizzBuzz(12, 5) -> ${fizzBuzz(12, 5)}`)
console.log(`fizzBuzz(5, 5) -> ${fizzBuzz(5, 5)}`); 
console.log(`fizzBuzz(9, 6) -> ${fizzBuzz(9, 6)}`); 

