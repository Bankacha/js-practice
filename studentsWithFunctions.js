const { getStudentsByGender, getAverageRankByGender, getSumOfStudentsRanksByGender, getBothArrays, getBiggestRank, getSmallestRank, getMaleStudents, getSmallestFemaleRank, getSmallestFemaleRankWithOtherFunc } = require('./studentFunctions');

const students = [
    {
        name: 'Student 1',
        genders: 'male',
        rank: 5.62
    },
    {
        name: 'Student 2',
        genders: 'female',
        rank: 6.33
    },
    {
        name: 'Student 3',
        genders: 'male',
        rank: 7
    },
    {
        name: 'Student 4',
        genders: 'female',
        rank: 8.64
    },
    {
        name: 'Student 5',
        genders: 'male',
        rank: 8
    },
    {
        name: 'Student 6',
        genders: 'female',
        rank: 9.87
    },
    {
        name: 'Student 6',
        genders: 'N/A',
        rank: 9.87
    }
];


// Write code for:

// const maleStudents = getMaleStudents(students);
const maleStudents = getStudentsByGender(students, 'male')
// console.log(maleStudents)

// const femaleStudents = getFemaleStudents(students);
const femaleStudents = getStudentsByGender(students, 'female')
// console.log(femaleStudents)


//  1. Calculation and print of average rank of all students (and genders separetly)

const averageRankByMale = getAverageRankByGender(students, "male");
const averageRankByFemale = getAverageRankByGender(students, "female")
const averageRankByAll = getAverageRankByGender(students, "ALL")

// console.log({
//     averageRankByMale,
//     averageRankByFemale,
//     averageRankByAll
// })

//  4. Calculation and print of sum of male students ranks

const sumStudentsRankMale = getSumOfStudentsRanksByGender(students, "male")
const sumStudentsRankFemale = getSumOfStudentsRanksByGender(students, "female")
const sumStudentsRankAll = getSumOfStudentsRanksByGender(students, "ALL")

// console.log({
//     sumStudentsRankMale,
//     sumStudentsRankFemale,
//     sumStudentsRankAll
// })

//  5. Building two new arrays, one with male students, another with female
const bothArrays = getBothArrays(students);
// console.log(bothArrays);

//  6. Finding the student who has the biggest rank
 const biggestRank = getBiggestRank(students);
 //console.log(biggestRank)

 const smallestRank = getSmallestRank(students);
 console.log(smallestRank)

//  7. Finding the female student who has the smallest rank
const smallestFemale = getSmallestFemaleRank(students);
//console.log(smallestFemale)

const smallestFemaleWithFunc = getSmallestFemaleRankWithOtherFunc(students);
console.log(smallestFemaleWithFunc)

// 8. Calculation and print average rank of students who has rank over 7

// const maleStudents2 = getMaleStudents(students);
// console.log(maleStudents2)
