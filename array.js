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

