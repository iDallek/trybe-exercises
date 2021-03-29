function checkPalindrome(str) {
  let isPalindrome;

  /**
   * Consultei o Stack Overflow para saber como inverte uma string
   * Source link: https://stackoverflow.com/a/959004
   */

  let splitStr = str.split('').reverse().join('').toLowerCase();
  
  if(str.toLowerCase() === splitStr) {
    isPalindrome = true;
  } else (
    isPalindrome = false
  );

  return isPalindrome;
};

console.log(checkPalindrome('Aguia'))
console.log(checkPalindrome('Arara'))

///////////////////////////////