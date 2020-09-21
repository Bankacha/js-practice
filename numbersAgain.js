const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Example of for loop to use instead of using forEach (remove this when start):
// for (let num of array) {
//    console.log(num);
// }



// 1.  Write code that calculates and print a sum of array
let item = 0;

for(let num of array) {
    item = item + num;
}

//console.log(item)

// 2.  Write code that calculates and print the average value of array

let sum = 0

for(let num of array) {
    sum += num
}
avrgNum = sum / array.length;

//console.log(avrgNum)

//console.log(avrgValArr)
// 3.  * Write code that builds new reverse array (see https://www.w3schools.com/js/js_loop_for.asp)

newArr = [];

for(let i = array.length - 1; i >= 0; i--) {
    const num = array[i];
    newArr.push(num)
}

//console.log(newArr)


// 4.  * Write code that prints the middle element if exist and null if not

if (array.length %2 != 0) {
    middleIndex = Math.floor(array.length / 2);
    let num = array[middleIndex];
    console.log(num);
} else {
    console.log(null)
}

