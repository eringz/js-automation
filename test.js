const generateBigArray = (size = 1) => Array.from({length: size}, () => Math.floor(Math.random() * size));

const secondMinLoop = arr => {
    if (arr.length === 1) return arr[0];

    let min = Infinity, secondMin = Infinity;

    for (num of arr) {
        if (num < min) {
            secondMin = min;
            min = num
        } else if (num < secondMin && num > min) {
            secondMin = num;
        }
    }
    return secondMin;
}

const secondMinOneLiner = arr => arr.length === 1 ? arr[0] : Math.min(...arr.filter(n => n !== Math.min(...arr)));


const bigArray = generateBigArray();

console.time("Loop-based");
const loopResult = secondMinLoop(bigArray);
console.timeEnd("Loop-based");

console.time("One-liner");
const oneLinerResult = secondMinOneLiner(bigArray);
console.timeEnd("One-liner");

console.log(`Loop result: ${loopResult}`);
console.log(`One-liner result: ${oneLinerResult}`);