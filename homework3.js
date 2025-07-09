/**
 * Write a program that generates 3 random numbers between 1 to 100 (1 and 100 are included)
 * Print true if the average of the random numbers is greater or equals 50.
 * Print false if the average fo the random numbers is less than 50.
 * Test data 1:
    20, 70, 25
 * Expected Output 1:
    false
 * Test data 2:
    65, 80, 90
 * Expected Output 2:
    true
 */
console.log("Task-1\n");
Array.from({length: 2}).forEach((_, index) => {
   const randomNums = Array.from({length: 3}, () => Math.floor(Math.random() * 100 + 1));
   const randomAverage = randomNums.reduce((x, y) => x + y) / randomNums.length;
   
   console.log(`Test data ${index +1}:\n${randomNums.join(`, `)}\n`);
   console.log(`Expected Output ${index+1}:\n${randomAverage >= 50 ? true : false}\n`);
});

/**
 * Write a program that generates 3 random numbers between 1 to 3 (1 and 3 are included)
    - If all numbers are different, then print "NO MATCH"
    - If any of those 2 numbers are equal, then prin "DOUBLE MATCH"
    - If all 3 numbers are equal, then print "TRIPLE MATCH"
 * Test data 1:
    3, 3, 3
 * Expected Output 1:
    TRIPLE MATCH
 * Test data 2:
    1, 3, 3
 * Expected Output 2:
    DOUBLE MATCH
 * Test data 3:
    1, 2, 3
 * Expected Output 3:
    NO MATCH
 * Test data 4:
    1, 1, 2
 * Expected Output 4:
    DOUBLE MATCH
 */
console.log("Task-2\n");
Array.from({length: 3}).forEach((_, index) => {
   randomNums =  Array.from({length: 3}, () => Math.floor(Math.random() * 3) + 1);
   const [x, y, z] = randomNums;
   const uniqueVal = new Set(randomNums).size
   
   console.log(`Test data ${index+1}:\n${randomNums.join(`, `)}\n`);
   console.log(`Expected Output ${index+1}`);
   console.log(`${uniqueVal === 1 ? `TRIPLE MATCH` : uniqueVal === 2 ? `DOUBLE MATCH` : `NO MATCH`}\n`);
})


/**
 * Write a function named as hasA() which takes a string word as an argument and returns true 
    if given string ha a character "a" or "A", and false otherwise when invoked.
 * NOTE: Assume you will not be given an empty word.
 * Examples: 
    hasA("Tech")        -> false
    hasA("Global")      -> true
    hasA("")            -> false
    hasA("Apple")       -> true
 */
console.log("Task-3\n");

const hasA = word => {
   return word.toLowerCase().includes("a");
};

console.log("Examples:");

let testWords = ["Tech", "Global", "", "Apple"];
testWords.map(word => {console.log(`hasA("${word}") -> ${hasA(word)}`)});

/**
 * Write a function names as doubleOrTripleWord() which takes a string word as an argument and returns the given word back 
    tripled if the string length is even or doubled if the string length is odd when invoked.
 * Examples:
    doubleOrTripleWord("Tech")            -> "TechTechTech"
    doubleOrTripleWord("Apple")           -> "AppleApple"
    doubleOrTripleWord("")                -> ""
    doubleOrTripleWord(" ")               -> " "
    doubleOrTripleWord("1")               -> "11"
    doubleOrTripleWord("22")              -> "222222"
 */
console.log("\nTask-4\n");

const doubleOrTripleWord = word => {
    return word.length % 2 === 0 ? word.repeat(3) : word.repeat(2);
}

console.log("Examples:");

testWords = ["Tech", "Apple", "", " ", "1", "22"];
testWords.map(word => {console.log(`doubleOrTripleWord("${word}") -> ${doubleOrTripleWord(word)}`)});

/**
 * Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.
 * NOTE: Return empty string if the given string does not have any word.
 * Examples:
    firstWord("Hello World")            -> "Hello"
    firstWord("I like JavaScript")      -> "I"
    firstWord("Hello")                  -> "Hello"
    firstWord("")                       -> ""
    firstWord(" ")                      -> ""
 */
console.log("\nTask-5\n");

const firstWord = word => {
   const splitWords = word.trim().split(" ");
   return splitWords[0];
}

console.log("Examples:");

testWords = ["Hello World", "I like JavaScript", "Hello", "", " "];
testWords.map(word => {console.log(`firstWord("${word}") -> ${firstWord(word)}`)});

/**
 * Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.
 * NOTE: Return empty string if the given string does not have any word.
 * Examples:
    lastWord("Hello World")             -> "World"
    lastWord("I like JavaScript")       -> "JavaScript"
    lastWord("Hello")                   -> "Hello"
    lastWord("")                        -> ""
    lastWord(" ")                       -> ""
 */
console.log("\nTask-6\n");

const lastWord = word => {
   const splitWords = word.trim().split(" ");
   return splitWords[splitWords.length-1];
}

testWords = ["Hello World", "I like JavaScript", "Hello", "", " "];
testWords.map(word => {console.log(`lastWord("${word}") -> ${lastWord(word)}`)});

/**
 * Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
 * NOTE: Return empty string if the given string does not have any word.
 * Examples:
    firstLastWord("Hello World")        -> "HelloWorld"
    firstLastWord("I like JavaScript")  -> "IJavaScript"
    firstLastWord("Hello")              -> "HelloHello"
    firstLastWord("")                   -> ""
    firstLastWord(" ")                  -> ""
 */
console.log("\nTask-7\n");

const firstLastWord = word => {
   const splitWords = word.trim().split(" ").filter(w => w!== "");
   return splitWords.length === 0 ? "" : splitWords[0] + splitWords[splitWords.length-1];
}

testWords = ["Hello World", "I like JavaScript", "Hello", "", " "];
testWords.map(word => {console.log(`firstLastWord("${word}") -> ${firstLastWord(word)}`)});


/**
 * Write a function names as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
 * NOTE: Vowel letters: a, e, i, o, u, A, E, I, O, U
 * Examples:
    startVowel("Hello")                 -> false
    startVowel("Apple")                 -> true 
    startVowel("orange")                -> true
    startVowel("")                      -> false
    startVowel(" ")                     -> false
    startVowel("123")                   -> false
 */
console.log("Task-8\n");


/**
 * Write a function names as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.
 * NOTE: Return empty string if the given string does not have 8 or more characters.
 * Examples:
    swap4("abc")                        -> ""
    swap4("JavaScript")                 -> "riptScJava"
    swap4("TechGlobal")                 -> "obalGITech"
    swap4("")                           -> ""
    swap4(" ")                          -> ""
    swap4("Apple")                      -> ""
 */
console.log("Task-9\n");


/**
 * Write a function names as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.
 * NOTE: Return empty string if the given string does not have 2 or more words.
 * Examples:
    swapFirstLastWord("Hello World")        -> "World Hello"
    swapFirstLastWord("I like JavaScript")  -> "JavaScript like I"
    swapFirstLastWord("foo bar foo bar")    -> "bar bar foo foo"
    swapFirstLastWord("")                   -> ""
    swapFirstLastWord("Hello")              -> ""
    swapFirstLastWord("Hello ")              -> ""
 */
console.log("Task-10\n");
