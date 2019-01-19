/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
const numArray = [9,8,7,6,5,4,3,2,1];
function bubbleSort(numArray) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < numArray.length; i++) {
      if(numArray[i] && numArray[i + 1] && numArray[i] > numArray[i + 1]) {
        [numArray[i], numArray[i + 1]] = [numArray[i + 1],numArray[i]];
        swapped = true;
      }
    }
  } while(swapped);
  return numArray;
}
console.log(bubbleSort(numArray.slice())); 