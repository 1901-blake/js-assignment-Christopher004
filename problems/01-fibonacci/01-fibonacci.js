/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
    let n = 4
function fib(n){
  let arr = [0, 10];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}
console.log(fib(n));