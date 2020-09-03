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
    }
];

// Example of for loop to use instead of using forEach (remove this when start):
// for (let student of students) {
//     console.log(student);
// }


// Write code for:

//  1. Calculation and print of average rank of all students
var ranks = 0;

for (let student of students) {
    ranks = ranks + student.rank;
    avrgRank = ranks / students.length;
}
//console.log(avrgRank)

//  2. Calculation and print average rank of female students

var femaleRanks = 0;
var numOfFemale = 0;

for (let student of students) {
    if (student.genders === "female") {
        femaleRanks = femaleRanks + student.rank;
        numOfFemale += 1;
    }
}
//console.log(femaleRanks/numOfFemale)

//or

const avrgFemaleRank = femaleRanks / numOfFemale;

//console.log(avrgFemaleRank)

//  4. Calculation and print of sum of male students ranks
sumOfFemaleRanks = 0;

for (let student of students) {
    if (student.genders === "female") {
        sumOfFemaleRanks = sumOfFemaleRanks + student.rank;
    }
}
//console.log(sumOfFemaleRanks)    

//  5. Building two new arrays, one with male students, another with female
let maleStudentsArr = [];
let femaleStudentsArr = [];

for (let student of students) {
    if (student.genders === "male") {
        maleStudentsArr.push(student);
    } else {
        femaleStudentsArr.push(student);
    }
}
//console.log(maleStudentsArr);
//console.log(femaleStudentsArr);

//  6. Finding the student who has the biggest rank
let biggestStudentRank = students[0];

for (let student of students) {
    if (biggestStudentRank.rank < student.rank) {
        biggestStudentRank = student;
    }
}
//console.log(biggestStudentRank)

//  7. Finding the female student who has the smallest rank
let femaleSmallestRanked = students[0];

for (let student of students) {
    if (students.gender === "female") {
        if (!femaleSmallestRanked) {
            femaleSmallestRanked = students;
        } else {
            if (femaleSmallestRanked.rank > student.rank) {
                femaleSmallestRanked = student;
            }
        }
    }
}
//console.log(femaleSmallestRanked)

// 8. Calculation and print average rank of students who has rank over 7

var studentsArrOver7 = [];

for (let student of students) {
    if (student.rank > 7) {
        studentsArrOver7.push(student)
    }
}
console.log(studentsArrOver7)

let overSeven = 0;

for (let student of studentsArrOver7) {
    overSeven = overSeven + student.rank;
}
console.log(overSeven)

let averageGradeOver7 = overSeven / studentsArrOver7.length;

console.log(averageGradeOver7)