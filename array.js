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

 const letters =  ["a","a","b","c","A"]; 
 
 function filterLetters(lettersArray) {
    return lettersArray.filter ((value) {
        value.toLowerCase()}
    )

 }


//  **********************************************************************
// const letters = ["a","a","b","c","A"]

// function firstLetters(arr, query) {
//     return arr.filter((al) => 
//     al.toLowerCase().includes(query.toLowerCase()))
// }

// console.log(firstLetters(letters, "a"));

// **********************************************************************
