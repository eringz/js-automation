/**
 * Write a function named countPos() which takes an array of numbers as an argument and returns how many elemenst are positive when invoked.
 * Examples:
 * countPos([-45, 0, 0, 34, 5, 67])                  -> 3
 * countPos([-23, -4, 0, 2, 5, 90, 123])             -> 4
 * countPos([0, -1, -2, -3])                         -> 0
 */
console.log(`Task-1\n`);

const countPos = array => array.filter(x => x > 0).length;

console.log(`countPos([-45, 0, 0, 34, 5, 67]) -> ${countPos([-45, 0, 0, 34, 5, 67])}`);
console.log(`countPos([-23, -4, 0, 2, 5, 90, 123]) -> ${countPos([-23, -4, 0, 2, 5, 90, 123])}`)
console.log(`countPos([0, -1, -2, -3]) -> ${countPos([0, -1, -2, -3])}`)

/**
 * Write a function names countA() which takes a string argument and
 * returns how many A or a there are in the given string when invoked.
 * NOTE: Ignore case sensitivity.
 * Examples:
    countA("TechGlobal is a QA bootcamp")               -> 4
    countA("QA stands for Quality Assurance")           -> 5
    countA("Cypress")                                   -> 0
 */
console.log(`\nTask-2\n`);
const countA = str => [...str].filter(c => c.toLowerCase() === 'a').length;

console.log(`countA("TechGlobal is a QA bootcamp") -> ${countA("TechGlobal is a QA bootcamp")}`);
console.log(`countA("QA stands for Quality Assurance) -> ${countA("QA stands for Quality Assurance")}`);
console.log(`countA("Cypress") -> ${countA("Cypress")}`);

/**
 * Write a function names as countVowels() which takes a string word as an 
 * argumant and returns the count of the vowel letters when invoked.
 * NOTE: Vowel letters are A,E,O,U,I,a,e,o,u,i
 * Examples:
    countVowels("Hello")                            -> 2
    countVowels("Hello World")                      -> 3
    countVowels("JavaScript is fun")                -> 5
    countVowels("")                                 -> 0
 */
console.log(`\nTask-3\n`);
const countVowels = str => [...str].filter(c => 'aeiou'.toLowerCase().includes(c)).length;

console.log(`countVowels("Hello") -> ${countVowels("Hello")}`);
console.log(`countVowels("Hello World") -> ${countVowels("Hello World")}`);
console.log(`countVowels("JavaScript is fun") -> ${countVowels("JavaScript is fun")}`);
console.log(`countVowels("") -> ${countVowels("")}`);

/**
 * Write a function names as countConsonants() which takes a string word as an 
 * argument and returns the count of the consonant letters when invoked.
 * NOTE: A letter that is not vowel is considered as a consonant letter.
 * Examples:
    countConsonants("Hello")                        -> 3
    countConsonants("Hello World")                  -> 7
    countConsonants("JavaScript is fun")            -> 10
    countConsonants("")                             -> 0
 */
console.log(`\nTask-4\n`);
const countConsonants = str => [...str.toLowerCase()].filter(c => c >= 'a' && c <= 'z' && !'aeiou'.includes(c)).length;

console.log(`countConsonants("Hello") -> ${countConsonants("Hello")}`);
console.log(`countConsonants("Hello World") -> ${countConsonants("Hello World")}`);
console.log(`countConsonants("JavaScript is fun") -> ${countConsonants("JavaScript is fun")}`);
console.log(`countConsonants("") -> ${countConsonants("")}`);

/**
 * Write a function names countWords() which takes a string 
 * argument and returns the total count of words in the given string when invoked.
 * NOTE: Be careful about the extra whitespaces before and after the string.
 * Examples:
    countWords("    Javascript is fun   ")                      -> 3
    countWords("Cypress is an UI automation tool.   ")          -> 6
    countWords(" 1 2 3 4")                                      -> 4
 */
console.log(`\nTask-5\n`);

/**
 * Write a function named as factorial() which takes a number as an 
 * argument and returns the factorial of the number when invoked.
 * NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
 * n! = n x (n-1) x (n-2) x ...2 x 1
 * Assume you will not be given a negative number.
 * Examples:
    factorial(5)                -> 120
    factorial(4)                -> 24
    factorial(0)                -> 1
    factorial(1)                -> 1
 */
console.log(`\nTask-6\n`);

/**
 * Write a function names as isPalindrome() which takes a string word as an 
 * argument and return true if the word is palindrome or returns false
 * otherwise when invoked.
 * NOTE: Palindrome: It is a word that is read the same backward as forward
 * Examples: kayak, civic, madam
 * NOTE: your function should ignore case sensitivity
 * Examples:
    isPalindrome("Hello")                       -> false
    isPalindrome("Kayak")                       -> true
    isPalindrome("civic")                       -> true
    isPalindrome("abba")                        -> true
    isPalindrome("ab a")                        -> false
    isPalindrome("123454321")                   -> true
    isPalindrome("A")                           -> true
    isPalindrome("")                           -> true
 */
console.log(`\nTask-7\n`);

/**
 * Write a function names as countMultipleWords() which takes an array as an 
 * argument and returns the count of the elements that has multiple words
 * when invoked.
 * NOTE: Be careful about the extra whitespaces before and after the array element
 * Examples:
    countMultipleWords(["foo", "", " ", "foo bar", "    foo"])      -> 1    
    countMultipleWords(["foo, "bar", "foobar", "    foo "])         -> 0    
    countMultipleWords(["foo, "bar", "foobar", "    foo "])         -> 4    
 */
console.log(`\nTask-8\n`);

/**
 * Write a function names as count3OrLess() which takes a string word as an
 * argument and returns the count of the words that has 3 characters or less when invoked.
 * Examples:
    count3OrLess("Hello")                                   -> 0
    count3OrLess("Hi John")                                 -> 1
    count3OrLess("JavaScript is fun")                       -> 2
    count3OrLess("My name is John Doe")                     -> 3
    count3OrLess("")                                        -> 0
 */
console.log(`\nTask-9\n`);

/**
 * Write a function names as isPrime() which takes a number as an
 * argument and returns true if the number is prime or return false otherwise when invoked.
 * NOTE Mathematically, Prime number is a number that can be divided only by itself and 1.
 * It cannot be divided by any other number.
 * Thesmalles prime number is 2 and 2 is the only even prime number.
 * Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
 * NOTE: The smalles prime number is 2 and there is no negative prime numbers.
 * Examples:
    isPrime(5)          -> true
    isPrime(2)          -> true
    isPrime(29)         -> true
    isPrime(-5)         -> false
    isPrime(0)          -> false
    isPrime(1)          -> false
 */
console.log(`\nTask-10\n`);

/**
 * Write a function named add() which takes two array of numbers as argument
 * and returns a new array with sum of given arrays elements.
 * NOTE: Be careful about the array sizes as they could be different.
 * Examples:
    add([3,0, 0, 7, 5, 10], [6, 3, 2])                          -> [9, 3, 2, 7, 5, 10]
    add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])        -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
    add([-5, 6, -3, 11], [5, -6, 3, -11])                       -> [0, 0, 0, 0]
 */
console.log(`\nTask-11\n`);

/**
 * Write a function names as removeExtraSpaces() which takes a string word as 
 * and argument and returns the string back with all extra spaces removed when invoked.
 * Examples:
    removeExtraSpaces("Hello")                          -> "Hello"
    removeExtraSpaces(" Hello World  ")                 -> "Hello World"
    removeExtraSpaces("  JavaScript is   fun")          -> "JavaScript is fun"
    removeExtraSpaces("")                               -> ""
 */
console.log(`\nTask-12\n`);

/**
 * Write a function names findClosestTo10() which takes an array of numbers as
 * argument and returns the closest element to 10 from the given array.
 * NOTE: Assume that length of array is always more than zero.
 * NOTE: Ignore the 10 itself.
 * NOTE: If there are more than one numbers are close equally, return the smaller number.
 * Examples:
    findClosestTo10([10, -13, 5, 70, 15, 57])       -> 5
    findClosestTo10([10, -13, 8, 12, 15, -20])      -> 8
    findClosestTo10([0, -1, -2])                    -> 0
 */
console.log(`\nTask-13\n`);

/**
 * Write a function names as isEmailValid() which takes a string email as an
 * argument and returns true if the email is valid or returns false otherwise when invoked.
 * NOTE: A VALID EMAIL:
 * should NOT have any space.
 * should not have more than one "@" character.
 * should be in the given format <2+chars>@<2+chars>.com meaning
    There should be at least characters before @ character.
    There should be at least 2 characters between @ and . Characters.
    There should be at least 2 characters after the . character.
 * Examples:
    isEmailValid("")                                    -> false
    isEmailValid("@gmail.com")                          -> false
    isEmailValid("johndoe@yahoo")                       -> false
    isEmailValid("johndoe@.com")                        -> false
    isEmailValid("a@outlook.com")                       -> false
    isEmailValid("johndoe@a.com")                       -> false
    isEmailValid("johndoe@gmail.com")                   -> true
 */
console.log(`\nTask-14\n`);

/**
 * Write a function names isPasswordValid which takes a string email as an 
 * argument and returns true if the password is valid or return false otherwise when invoked.
 * NOTE: A VALID PASSWORD:
    should have length of 8 to 16 (both inclusive)
    should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
    should NOT have any space.
 * Examples:
    isPasswordValid("")                                     -> false
    isPasswordValid("abcd")                                 -> false
    isPasswordValid("abcd1234")                             -> false
    isPasswordValid("Abcd1234")                             -> false
    isPasswordValid("Chicago12345US!#$%")                   -> false
    isPasswordValid("Abcd1234$")                            -> true
    isPasswordValid("Chicago123$")                          -> true
    isPasswordValid("Test1234#")                            -> true
 */
console.log(`\nTask-15\n`);
