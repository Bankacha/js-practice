const studentFunctions = require("./studentFunctions");


function getMaleStudents (array){
    let maleStudentsArr = [];
    for(let student of array) {
        if(student.genders === "male") {
            maleStudents.push(student)
        }
    }
    return maleStudents;
}

function getFemaleStudents (array){
    let femaleStudentsArr = [];
    for(let student of array) {
        if(student.genders === "female") {
            maleStudents.push(student)
        }
    }
    return femaleStudents;
}

function getBothArrays(array) {
    let bothArr = [getMaleStudents(array), getFemaleStudents(array)];
    return bothArr;
}

function getArrByGender (array, gender) {
    if (gender === "ALL") {
        return array;
    } else {
    let studentArr = [];
    for(let student of array) {
        if(student.genders === gender) {
            studentArr.push(student)
        }
    }
    return studentArr;
  } 
}

function sumRank(array) {
    let sum = 0;
    for(let student of array) {
        if(student.genders === "male") {
        sum = sum + student.rank;
        }
    }
    return sum;
}

function buildTwoArrays (array) {
    let maleArr = [];
    let femaleArr = [];
    for(let student of array) {
        if(student.genders === "male") {
            maleArr.push(student)
        } else if(student.genders === "female") {
            femaleArr.push(student)
        }
    } 
    return [maleArr , femaleArr]
}



module.exports = {
    getMaleStudents,
    getFemaleStudents,
    getBothArrays,
    getArrByGender,
    sumRank,
    buildTwoArrays


}