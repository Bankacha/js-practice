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


let smallestRankFemale;

for (let student of students) {
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

console.log(smallestRankFemale);