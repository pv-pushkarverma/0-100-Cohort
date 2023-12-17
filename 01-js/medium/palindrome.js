/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const punctuation=['.',',',';',':','!','?','"',"'",'(',')','[',']','{','}','-','_',' '];
  let str_a='';
   for(let i=0;i<str.length;i++){
      if(!punctuation.includes(str[i])){
        str_a+=str[i].toLowerCase();
      }
   }
  for(let i=0;i<str_a.length/2;i++){
    if(str_a[i]!=str_a[str_a.length-1-i])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
