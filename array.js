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

// *******************************************************************************
// const people = [
//     { name: "Elie", isInstructor: true },
//     { name: "Tim", isInstructor: true },
//     { name: "Matt", isInstructor: true }
// ];

// // Using the map method
// function extractKey(arrObject, name) {
//     let result = arrObject.map((value) => {
//         return value.name
//     })
//     return result;
// }

// console.log(extractKey(people, 'name'))

// // ******************************************************************************