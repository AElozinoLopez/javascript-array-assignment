// Exercise 1
const facilitators = [
    {name: "Elie", isInstructor:true},
    {name: "Tim", isInstructor:true},
    {name: "Matt", isInstructor:true}
];

const extractKey = facilitators.forEach(function(extractKey) {
    console.log(extractKey);
})

// function extractKey (arrayobj, name) {
//     for (let key of extractKeysArray) {
//         console.log(key);
//     }

// }

console.log(extractKey());

// *****************************************************************************
const instructors = [
    {name: "Elia", isInstructor: true},
    {name: "Tim", isInstructor: true},
    {name: "Matt", isInstructor: true}
];

function extractKey(obj, user) {
    let newArr = [];
    obj.forEach((person) => {
        newArr.push(person[user]);
    });
    return newArr;
} 
// console.log(extractKey(instructors, "name"));

// *******************************************************************************
const people = [
    { name: "Elie", isInstructor: true },
    { name: "Tim", isInstructor: true },
    { name: "Matt", isInstructor: true }
];

// Using the map method
function extractKey(arrObject, name) {
    let result = arrObject.map((value) => {
        return value.name
    })
    return result;
}

// console.log(extractKey(people, 'name'))

// ******************************************************************************