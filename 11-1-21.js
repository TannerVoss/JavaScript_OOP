const classScores = [{
    name: "Ben",
    score: 100,
}, {
    name: "Seth",
    score: 74,
}, {
    name: "Jeremy",
    score: 88,
}];

/* itterate over the values
for, for/of, forEach, map, reduce*/

let sum = 0;

for (let i = 0; i < classScores.length; i++) {
    sum += classScore[i].score;
}

console.log(sum / classScores.length); /*will provide an average*/

/* find highest score */

let highestScorer = classScores.reduce(function(highest, student)) {
if (highest.score < student.score) {
    retrun student;
} else {
    return highest;

}
});
console.log(`${highestScorer.name} scored a class high of ${highestScorer.score}`);