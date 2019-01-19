/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr (someStr) {
    return someStr.split( '' ).reverse( ).join( '' );;
    }
    
   //declaring variables
    let someStr = "Christopher";
console.log(reverseStr(someStr));
