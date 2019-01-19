/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if (someNum == 0)
      return true;
    else if (someNum == 1)
      return false;
    else if (someNum < 0)
      return isEven(-someNum);
    else
      return isEven(someNum - 2);
  }

  console.log(isEven(48));
  console.log(isEven(5));
