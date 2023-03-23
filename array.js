// Exercise 1
const facilitators = [
    {name: "Elie", isInstructor:true},
    {name: "Tim", isInstructor:true},
    {name: "Matt", isInstructor:true}
];

function extractKey(arrayOfObjects, name) {
    let instructors = arrayOfObjects.map(function(theInstructors){
        return theInstructors.name
    })
    return instructors
}

console.log(extractKey(facilitators));


// EXERCISE 2

function filterLetters(lettersArray, determinantLetter) {
    let occurence = 0;
    lettersArray.filter(function(letterArray) {
        if (letterArray.toUpperCase() === determinantLetter.toUpperCase()) {
            occurence++;
        }
    })
    return occurence;
}

console.log(filterLetters(["a", "a", "b", "c", "A"], "a"));


// EXERCISE 3
const wordsArray = ['awesome','example','of','forEach'];
function printFirstAndLast (words){
    let result = "";
    words.forEach((value) => {
        result = value[0] + value[value.length-1]
        console.log(result);
    })
    
}
printFirstAndLast(wordsArray);



// EXERCISE 4
function valTimesIndex (array) {
    return array.map((number, index) =>  number * index)
}

console.log(valTimesIndex([5, 10, 15]));

