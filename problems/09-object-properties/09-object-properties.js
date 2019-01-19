/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(const obj in someObj) {
console.log(`${obj}: ${someObj[obj]} `);
    }
}

let motorcycle = {model: 'bmw', material: 'aluminium', tires: "4", transmission: "standard"};

objectProperties(motorcycle);
