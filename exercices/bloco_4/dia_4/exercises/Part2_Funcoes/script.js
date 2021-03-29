function checkPalindrome(str) {
  let isPalindrome;

  /** Source: https://stackoverflow.com/a/959004 */
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

let arrayNumbers = [2, 6, 8, 10, 12, 3];

function returnHighestValueIndex(numbers) {

  /** Source: https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464 */  
  let highestIndex = numbers.indexOf(Math.max(...numbers));
  
  return highestIndex;
}

console.log(returnHighestValueIndex(arrayNumbers));

////////////////////////////////

function returnLowestValueIndex(numbers) {

  let lowestIndex = numbers.indexOf(Math.min(...numbers));
  
  return lowestIndex;
}

console.log(returnLowestValueIndex(arrayNumbers));

////////////////////////////////

let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

/**Source: https://stackoverflow.com/questions/52411850/find-longest-string-in-array */
function returnLongestName(arr) {
  let longest = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  
  return longest;
}

console.log(returnLongestName(arrayNames));

////////////////////////////////