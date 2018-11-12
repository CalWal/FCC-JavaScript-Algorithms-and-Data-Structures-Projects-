function rot13(str) { // LBH QVQ VG!
// the string that is to be split and put into an array
  var encrypted = str.split('');

  // empty array to return at the end with decrypted string
  var decrypted = [];

// the reason this extends past Z is because we need to push letters a max of 13 times, therefore if the letter Z was to come up, we could push it to its corresponding letter (M)
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];

// goes through the split string supplied
for (var i=0; i<encrypted.length; i++){
  //if there is no index of any letters of the alphabet (e.g. !,?,_,-)
  // push it to the decrypted array.
  if(alphabet.indexOf(encrypted[i])=== -1){
    decrypted.push(encrypted[i]);
  }else{
    // goes through the alphabet array
    for (var j=0; j<alphabet.length; j++){
      // if curreny value of in the array is equal to something in the alphabet
      if (encrypted[i]===alphabet[j]){
      // add to the decrypted array, pushed 13 index places.
    decrypted.push(alphabet[j+13]);
      }
    }
  }
}

// join back together to make a string and return.
  return decrypted.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
