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
        name: 'Student 7',
        genders: 'male',
        rank: 9.88
    }
];

// Example of for loop to use instead of using forEach (remove this when start):
// for (let student of students) {
//     console.log(student);
// }


// Write code for:

//  1. Calculation and print of average rank of all students

let ranks = 0;

for (let student of students) {
    ranks = ranks + student.rank;
}
let avgRank = ranks / students.length;

//console.log(avgRank)


//  2. Calculation and print average rank of female students

femaleRanks = 0;
numOfFemale = 0;

 for(let student of students) {
     if (student.genders === "female") {
         femaleRanks = femaleRanks + student.rank;
         numOfFemale += 1;
     }
     
 }
// console.log(femaleRanks/numOfFemale)


//  4. Calculation and print of sum of male students ranks
sumMale = 0;

for(let student of students) {
    if(student.genders === "male") {
        sumMale += student.rank;
    }
} 
//console.log(sumMale)

//  5. Building two new arrays, one with male students, another with female

maleArr = [];
femaleArr = [];

for(let student of students) {
    if(student.genders === "male") {
        maleArr.push(student);
    } else if (student.genders === "female") {
        femaleArr.push(student);
    }
}
// console.log(maleArr);
// console.log(femaleArr);

//  6. Finding the student who has the biggest rank
let exampleStudent = students[0];

for(let student of students) {
    if(exampleStudent.rank < student.rank) {
        exampleStudent = student;
    }
}
// console.log(exampleStudent)


//  7. Finding the female student who has the smallest rank

let exampleFemale;

for(let student of students) {
    if(student.genders === "female") {
        if(!exampleFemale) {
            exampleFemale = student;
        } if (exampleFemale.rank > student.rank) {
            exampleFemale = student;
        }
    }
}
// console.log(exampleFemale)


// 8. Calculation and print average rank of students who has rank over 7

let higherRankedStudents = [];
let counterOfHigherRanked = 0;

for(let student of students) {
    if (student.rank > 7) {
        higherRankedStudents.push(student);
        counterOfHigherRanked += 1;
    }
}
let higherRanks = 0;

for(let student of higherRankedStudents) {
    higherRanks += student.rank;
}

console.log(higherRanks/counterOfHigherRanked)