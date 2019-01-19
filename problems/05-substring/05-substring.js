/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex){
    let res = someStr.substring(startIndex, endIndex);
   return res;
   }
   
  //declaring variables
   let someStr = "Christopher";
   let startIndex = 1;
   let endIndex = 4;
   //calling function
   console.log(substring(someStr, startIndex, endIndex))
