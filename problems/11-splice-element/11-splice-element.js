/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let someObj = someArr.splice(index, 3); 
    return someObj;
}
let fruits = ['Banana', 'Orarge', 'Apple', 'Mango'];

console.log(spliceElement(fruits));
