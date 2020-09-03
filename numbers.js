const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Example of for loop to use instead of using forEach (remove this when start):
// for (let num of array) {
//    console.log(num);
// }

// 1.  Write code that calculates and print a sum of array
var item = 0;

for (let num of array) {
    item = item + num;
}
//console.log(item)

// 2.  Write code that calculates and print the average value of array
var item2 = 0;
for (let num of array) {
    item2 = item2 + num;
}
avrgValArr = item2 / 2;

//console.log(avrgValArr)
// 3.  * Write code that builds new reverse array (see https://www.w3schools.com/js/js_loop_for.asp)
let newArr = [];

for (let i = array.length - 1; i >= 0; i--) {
    const num = array[i];
    newArr.push(num)
}
//console.log(newArr)


// 4.  * Write code that prints the middle element if exist and null if not

if (array.length % 2 > 0) {
    const middleIndex = Math.floor(array.length / 2);
    console.log(array[middleIndex])
} else {
    console.log(null)
}



