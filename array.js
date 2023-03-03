// Exercise 1
const extractKeysArray = [
    {name: "Elie", isInstructor:true},
    {name: "Tim", isInstructor:true},
    {name: "Matt", isInstructor:true}
];

function extractKey (extractKeysArray) {
    for (let key of extractKeysArray) {
        console.log(key);
    }

}

console.log(extractKey());