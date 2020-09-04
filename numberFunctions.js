function arrayLen(array) {
    return array.length;
}

function arraySum(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

function arrayAverageValue(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum / array.length;
}

function getMiddleElementOrNull(array) {
    if (array.length % 2 > 0) {
        middleIndex = Math.floor(array.length / 2);
        return array[middleIndex];
    }

    return null;
} 

function getBiggestElement(array) {
    let currentBiggest = array[0];
    for (let num of array) {
        if (currentBiggest < num) {
            currentBiggest = num;
        }
    } 
    return currentBiggest;
}

function arrayReversed(array) {
    let revArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArr.push(array[i])
    } 
    return revArr;
}


module.exports = {
    arraySum,
    arrayAverageValue,
    getMiddleElementOrNull,
    getBiggestElement,
    arrayLen,
    arrayReversed
}