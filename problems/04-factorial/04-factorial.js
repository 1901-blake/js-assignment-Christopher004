/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log(factorial(16));
