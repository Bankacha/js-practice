function getMaleStudents(studentsArray) {
    let maleStudentArr = [];
    for (let student of studentsArray) {
        if (student.genders === "male") {
            maleStudentArr.push(student)
        }
    }
    return maleStudentArr;
}


function getFemaleStudents(studentsArray) {
    let femaleStudentArr = [];
    for (let student of studentsArray) {
        if (student.genders === "female") {
            femaleStudentArr.push(student)
        }
    }
    return femaleStudentArr;
}


function getBothArrays(studentsArray) {
    let bothArr = [getMaleStudents(studentsArray), getFemaleStudents(studentsArray)]
    return bothArr;
}

function getStudentsByGender(studentsArray, gender) {
    if (gender === 'ALL') {
        return studentsArray;
    } else {
        let students = [];
        for (let student of studentsArray) {
            if (student.genders === gender) {
                students.push(student)
            }
        }
        return students;
    }
}

function getAverageRank(studentsArray) {
    let rank = 0;
    for (let student of studentsArray) {
        rank = rank + student.rank
    }
    let avrgRank = rank / studentsArray.length;
    return avrgRank
}

function getSum(studentsArray) {
    let sum = 0;
    for (let student of studentsArray) {
        sum += student.rank
    }
    return sum;

}


function getAverageRankByGender(studentsArray, gender) {
    let getStudents = getStudentsByGender(studentsArray, gender);
    return getAverageRank(getStudents)
}

function getSumOfStudentsRanksByGender(studentsArray, gender) {
    let chooseStudent = getStudentsByGender(studentsArray, gender);
    return getSum(chooseStudent);

}

function getBiggestRank(studentsArray) {
    let biggestStudentRank = studentsArray[0];

    for (let student of studentsArray) {
        if (biggestStudentRank.rank < student.rank) {
            biggestStudentRank = student;
        }
    }
    return biggestStudentRank;
}

function getSmallestRank(studentsArray) {
    let smallestRank;
    for (let student of studentsArray) {
        if (!smallestRank) {
            smallestRank = student;
        } else {
            if (student.rank < smallestRank.rank) {
                smallestRank = student;
            }
        }
    }
    return smallestRank;
}
function getSmallestFemaleRank(studentsArray) {
    let smallestRankFemale;
    for (let student of studentsArray) {
        if (student.genders === 'female') {

            if (!smallestRankFemale) {
                smallestRankFemale = student;
            } else {
                if (student.rank < smallestRankFemale.rank) {
                    smallestRankFemale = student;
                }
            }

        }
    }
    return smallestRankFemale;
}

function getSmallestFemaleRankWithOtherFunc(studentsArray) {
    return getSmallestRank(getFemaleStudents(studentsArray))
    
}

module.exports = {
    getStudentsByGender,
    getAverageRankByGender,
    getSumOfStudentsRanksByGender,
    getBothArrays,
    getBiggestRank,
    getSmallestRank,
    getMaleStudents,
    getSmallestFemaleRank,
    getSmallestFemaleRankWithOtherFunc

}