//P2 Req. A

function isArmstrong(n) {
         "use strict";
         var sum = 0;

	 if ((n >= 0) && (n <= 99999)) {

   	      //convert n to String
 	      n = String(n);
 	      //exponent each digit in n
	      for (var i = 0; i < n.length; ++i) {
 	            //exponent digit and add to sum
	            sum = sum + Math.pow(n[i], n.length);
	      }
        	
              //is it an Armstrong num?

	      if (sum == n) 
                 return true;
               else 
                 return false;
              

          } else {
		return false;
          }
 }




//P2 Req. B

function AllArmstrongs() {

   "use strict";
   var sum = 0;
   var n = "";
   var iNum = 0;
   var retString = "";  // declare retString for return value

   // walk through all numbers between 1 - 99999
   for (iNum=1; iNum<=99999; ++iNum) {

  // check if iNum is an armStrong number
  
        sum = 0;    // initialize the sum (used to calculate if armstrongNumber

       //convert iNum to String
  n = String(iNum);

  //exponent each digit in iNum
  for (var i = 0; i < n.length; ++i) {
        //exponent digit and add to sum
        sum = sum + Math.pow(n[i], n.length);
  }
          
        //is it an Armstrong num?

        if (sum == iNum) {

    // if no armstrongs found yet, assign the first one
    if (retString == "") 
      retString = String(iNum);

    // otherwise concatenate a comma and add the new iNum to the return string
    else
      retString = retString + ", " + String(iNum); 

  }
   }

   return retString;
}




//P2 Req. C

function allSubStrings1(s) {
   // return one string containing all substrings, separated by a comma

   "use strict";

   var retStr = "";  // return value from function
   var i;  // first index of substring
   var iLast;    // last index of substring

   if (s.length > 0) {   // make sure s is a string longer than ""

  // iterate through all possible starting positions
  // i = the starting point for substrings, 
  for (i=0; i<s.length; ++i) {        

    // iterate through all possible substrings starting at s[i]
    for (iLast = i+1; (iLast <= s.length); ++iLast) {
    
      if (retStr.length > 0) {
        retStr = retStr + ",";    // add comma only if retStr already has characters in it
      }

    // here i = index of 1st char of substring, iLast is 1st char of substring that you don't want
    retStr = retStr + s.substring(i,iLast);  

      }
        }
    }
    
    return retStr;
}




//P2 Req. D

function allSubStrings2(s) {
   // return an array of strings representing the substrings

   "use strict";

   var retStr = "";  // return value from function
   var i;  // first index of substring
   var iLast;    // last index of substring
   var retArr = [];  // array to return

   if (s.length > 0) {   // make sure s is a string longer than ""

  // iterate through all possible starting positions
  // i = the starting point for substrings, 
  for (i=0; i<s.length; ++i) {        

    // iterate through all possible substrings starting at s[i]
    for (iLast = i+1; (iLast <= s.length); ++iLast) {

    // here i = index of 1st char of substring, iLast is 1st char of substring that you don't want
    retArr.push (s.substring(i,iLast));  

      }
        }
    }
    
    return retArr;
}




//P2 Req. E (version that does not concatenate possible multiple longest words)

function maxWord (s) {
   // return the longest word in the string, s
   // assume s contains only words & spaces
   // we're not checking for other characters, leading spaces, double spaces

   "use strict";
   var tmpLongest = "";     // keep track of the longest word we've found so far while walking through the input string
   var tmpWord = "";
   var i = 0;       // index of beginning of current word
   var iLast;       // index of space after current word (or end of string)
   var iLongestLength   // length of longest word found (can't use tmpLongest.length if it has multiple words stored)

     
   while (i < s.length) {
    
  // walk through any potential leading spaces
  while (s[i] == " ")
    i++;
  
  // look for the next " " or the end of the string, s. Whichever comes first
  for (iLast = i+1; ((s[iLast] != " ") && (iLast < s.length)); ++iLast) ;
  
  // at this point, s[iLast] should either be the first space after current word, or the end of the string, s
  tmpWord = s.substring(i,iLast);
  if (tmpWord.length > tmpLongest.length ) 
    tmpLongest = tmpWord;     // store longest word

  // bump i to be index following the current word
  i = iLast;    
   }

    return tmpLongest;
} 


//P2 Req. E (version that does concatenate multiple longest words)

  
function maxWord(s) {
   // return the longest word(s) in the string, concatenate string if there are multiple words of longest length
   // assume s contains only words & spaces
   // we're not checking for other characters, leading spaces, double spaces

   "use strict";
   var tmpLongest = "";     // keep track of the longest word we've found so far while walking through the input string
   var tmpWord = "";
   var i = 0;       // index of beginning of current word
   var iLast;       // index of space after current word (or end of string)
   var iLongestLength = 0;  // length of longest word found (can't use tmpLongest.length if it has multiple words stored)

     
   while (i < s.length) {
    
  // walk through any potential leading spaces
  while (s[i] == " ")
    i++;
  
  // look for the next " " or the end of the string, s. Whichever comes first
  for (iLast = i+1; ((s[iLast] != " ") && (iLast < s.length)); ++iLast) ;
  
  // at this point, s[iLast] should either be the first space after current word, or the end of the string, s
  tmpWord = s.substring(i,iLast);
  if (tmpWord.length > iLongestLength ) {
    tmpLongest = tmpWord;     // store longest word
    iLongestLength = tmpLongest.length  // store the longest word's length

  } else if (tmpWord.length == iLongestLength ) // 
    tmpLongest = tmpLongest + "," + tmpWord // concatenate and make a list of the longest words

  // bump i to be index following the current word
  i = iLast;    
   }

    return tmpLongest;
} 

