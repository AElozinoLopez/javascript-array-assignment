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



//  **********************************************************************
const letters = ["a","a","b","c","A"];

function firstLetters(arr, query) {
    return arr.filter((al) => 
    al.toLowerCase().includes(query.toLowerCase()))
}

console.log(firstLetters(letters, "a"));

// **********************************************************************

//
function filterLetters(arrLetters, letter) {
    let occurence = 0;
    arrLetters.filter((arrLetter) => {
        if (arrLetter.toUpperCase() == letter.toUpperCase()) {
            occurence++;
        }
    })
    return occurence;
}

console.log(filterLetters(["a", "a", "b", "c", "A"], "a"));
// console.log(filterLetters(["a", "a", "b", "c", "A"], "z"));
// console.log(filterLetters(["a", "a", "b", "c", "A"], "B"));
//
