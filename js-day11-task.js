//problrm:1

// Answer:

var score = 0;
score >= 90
  ? console.log("Excellent")
  : score >= 60
  ? console.log("good")
  : console.log("needs Improvement");

//   ----------------------------------------------------------------------------

// problem:2

// Answer:

var day = "SunDay";

day == "SaturDay" || day == "SunDay"
  ? console.log("WeekEnd")
  : day == "MonDay" ||
    day == "TuesDay" ||
    day == "WedNesDay" ||
    day == "ThursDay"
  ? console.log("WeekDAy")
  : console.log("Enter Day Properly");
//   ------------------------------------------------------------------

// proble:3

//Answer:

var inputString = "madam";
var output = "";
for (i = inputString.length - 1; i >= 0; i--) {
  output += inputString[i];
}
inputString == output
  ? console.log(`${inputString} is a Palindrome.`)
  : console.log(`${inputString} is not a Palindrome`);

//   --------------------------------------------------------------------------------

//problem:4

//Answeer:

var str = "HELLO";
var output = "";
for (i = 0; i < str.length; i++) {
  output += str[i];
  console.log(output);
}
