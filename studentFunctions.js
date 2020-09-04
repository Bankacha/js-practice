// function getMaleStudents(studentsArray) {
//     let maleStudentArr = [];
//     for (let student of studentsArray) {
//         if (student.genders === "male") {
//             maleStudentArr.push(student)
//         }
//     }
//     return maleStudentArr;
// }

// function getFemaleStudents(studentsArray) {
//     let maleStudentArr = [];
//     for (let student of studentsArray) {
//         if (student.genders === "female") {
//             maleStudentArr.push(student)
//         }
//     }
//     return maleStudentArr;
// }

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
    for(let student of studentsArray) {
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




module.exports = {
    getStudentsByGender,
    getAverageRankByGender,
    getSumOfStudentsRanksByGender
}