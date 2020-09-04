const functions = require('./numberFunctions');
const { arraySum, arrayLen, arrayAverageValue, getMiddleElementOrNull, getBiggestElement, arrayReversed } = require('./numberFunctions');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// example: 
const len = arrayLen(array);
console.log(len);

// 1.  Write code that calculates and print a sum of array
const sum = arraySum(array)
console.log(`1: ${sum}`)


// 2.  Write code that calculates and print the average value of array
const average = arrayAverageValue(array);
console.log(`2: ${average}`)

// 3.  * Write code that prints the middle element if exist and null if not
const middleElement = getMiddleElementOrNull(array);
console.log(`3: ${middleElement}`)

// 5. Find the biggest element in the array
const biggestElement = getBiggestElement(array);
console.log(biggestElement);

// 4.  * Write code that builds new reverse array (see https://www.w3schools.com/js/js_loop_for.asp)
const reversed = arrayReversed(array);
console.log(reversed)






