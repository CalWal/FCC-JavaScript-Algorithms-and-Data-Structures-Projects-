function convertToRoman(num) {
// roman is an empty string to return once conveted at the end
var roman = ''

// this is the array of roman numbers + the normal corresponding number to that the for/while loop will go through
var romanNumerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

var normalNumerals = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

// explanation of how this works is below
for (var i=0; i<normalNumerals.length;i++){
  while(num >=normalNumerals[i]){
    roman = roman + romanNumerals[i];
    num = num - normalNumerals[i];
  }
}

 return roman;
}


// This will return XXXVI
//for loop will go through finding a number less than 36
// will stop at 10 (X)
// roman now equals 10, num now equals 26 
// LOOP 2:
// for loop will go through again finding a number less than 26
// will stop at 10 (X)
// roman now equals 20, num now equals 16
// LOOP 3:
// for loop will go through finding number less than 16
// will stop at 10 (X)
// roman now equals 30, num now equals 6
// LOOP 4:
// for loop will go through finding number less than 6
// will stop at 5 (V)
// roman now equals 35, num now equals 1
//LOOP 5:
// for loop will go through finding number less than 1
// will stop at 1 (I)
// roman now equals 36, num now equals 0
// LOOP STOPS
// returns roman, which is 36, equal to XXXVI
convertToRoman(36);
