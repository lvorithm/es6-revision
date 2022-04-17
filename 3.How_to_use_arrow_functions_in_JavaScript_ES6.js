// normal funcion using the function keyword
function getInfo(name, age) {
    return `Name: ${name}  - Age: ${age}`;
}


console.log(getInfo("Alvorithm Ikiguy", 33));
// arrow function using the arrow syntax, const keyword  without the fucntion keyword
const getInfo2 = (name, age) => {
    return `Name: ${name}  - Age: ${age}`;
};

console.log(getInfo2("Alvorithm Ikiguy", 33));

// arrow function: no need for return statement and curly parenthesis when returning one value
const getInfo3 = (name, age) => `Name: ${name}  - Age: ${age}`;

console.log(getInfo3("Alvorithm Ikiguy", 33));

// no need for parenthesis if there is one argument being passed
const getInfo4 = (name) => `Name: ${name}`
console.log(getInfo4("Alvorithm Ikiguy", 33));