/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(n,x) {
    return(x=x||0)<0||x>=n.length>>1||n[x]==n[n.length-1-x]&&isPalindrome(n,++x);
   }
   console.log(isPalindrome('radar'));
   console.log(isPalindrome('forget'));
