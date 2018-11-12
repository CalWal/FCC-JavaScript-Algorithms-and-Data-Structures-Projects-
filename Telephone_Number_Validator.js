// okay here is how this works:
// Capture group 1: (1\s?) -  In case of international numbers
// matches the exact number 1 and any optional whitespace

// Capture group 2: (\(\d{3}\)|\d{3})
// matches any 3 digits between an opening '(' or closing ')' bracket
// OR matches any 3 digits

// Capture group 3: [\s\-]?\d{3}[\s\-]?\d{4}
// [\s\-]? looks for optional whitespace or dashes 
// then looks for 3 consecutive digits \d{3}
// looks again for optional whitespace or dashses
// then loops for 4 consecutive digits

// put that all together and you get:
// An option for a 1 digit in the case of international numbers
// the first 3 digits either in brackets or standalone
// any optional spaces or dashes
// 3 consecutive digits
// any optional spaces or dashes again
// 4 consecutive digits.




function telephoneCheck(str) {
 var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}



telephoneCheck("555-555-5555");
