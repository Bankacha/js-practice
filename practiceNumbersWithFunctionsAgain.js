const functions = require('./practiceNumberFunctions');
const {summing, averageValue, middleEl, biggestElementFinder, makeReverseArr  } = require('./practiceNumberFunctions');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// example: 
// const len = arrayLen(array);
// console.log(len);

// 1.  Write code that calculates and print a sum of array

console.log(summing(array));

// 2.  Write code that calculates and print the average value of array

console.log(averageValue(array))

// 3.  * Write code that prints the middle element if exist and null if not

console.log(middleEl(array))

// 5. Find the biggest element in the array

console.log(biggestElementFinder(array))

// 4.  * Write code that builds new reverse array (see https://www.w3schools.com/js/js_loop_for.asp)

console.log(makeReverseArr(array))





