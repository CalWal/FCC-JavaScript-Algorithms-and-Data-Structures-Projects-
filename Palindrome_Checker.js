function palindrome(str) {
  //Makes the str lowercase
str = str.toLowerCase();

// Should have used Regex here but basically goes through each condition replacing them in order to return true
for (var i=0; i <str.length; i++){
  str= str.replace(' ','');
  str= str.replace(',','');
  str= str.replace('.','');
  str= str.replace('/','');
  str=str.replace('-','');
  str= str.replace('(','');
  str= str.replace(')','');
  str= str.replace('_','');
}
// Is the reversed word to check against
var palindromeWord = str.split('').reverse().join('');

// if its a palindrome return true if not return false.
if(palindromeWord==str){
  return true;
} else{
  return false;
}
}



palindrome("eye");
