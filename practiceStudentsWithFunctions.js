
const {getMaleStudents, getFemaleStudents, getBothArrays, getArrByGender, sumRank, buildTwoArrays } = require('./practiceStudentFunctions');

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

//  1. Calculation and print of average rank of all students (and genders separetly)

const avg = getArrByGender(students, "male");
console.log(avg);

//  4. Calculation and print of sum of male students ranks

const summing = sumRank(students);
console.log(summing)

// const summingMale = sumMaleRank(students);
// console.log(summingMale)

//  5. Building two new arrays, one with male students, another with female

const twoArr = buildTwoArrays(students);
console.log(twoArr);

//  6. Finding the student who has the biggest rank

//  7. Finding the female student who has the smallest rank

//  8. Calculation and print average rank of students who has rank over 7
