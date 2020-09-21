function summing (array) {
    let sum = 0;
    for(let num of array) {
        sum = sum + num;
    }
    return sum;
}


function averageValue (array) {
    let sum = 0;
    for(let num of array) {
        sum += num;
    }
    return sum / array.length
}


function middleEl (array) {
    middleIndex = Math.floor(array.length/2);
    if (array.length %2 > 0) {
        return array[middleIndex]
    } else {
        return null
    }
}


function biggestElementFinder (array) {
    let exampleEl = array[0];
    for(let num of array) {
        if(exampleEl < num) {
            exampleEl = num;
        }
    }   
    return exampleEl;
}


function makeReverseArr (array) {
    let arrReverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrReverse.push(array[i])
    }
    return arrReverse;
}




module.exports = {
    summing,
    averageValue,
    middleEl,
    biggestElementFinder,
    makeReverseArr
}
