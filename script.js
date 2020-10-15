//if, if else, statements
//vars or what it takes to create password
//password needs to be random 8-128 characters
//password generator
//prompts
//user commands

var generateBtn = document.querySelector("#generate");
//setting up my global storage for shopping
var length;
var lower;
var upper;
var numbers;
var special;
// var user choice pulls from all of the array's
var userCharacterChoice = [];
// final piece generated from string
var finalPassword = "";
//vars my function will pull from
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphabetUPPER = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//changing to var symbols made my final code pull from the correct array.

var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "<",
  ">",
  "?",
  "_",
];
// var charset = []

//Generate Password Function
function generatePassword() {
  var user = alert("YO DUDE LETS MAKE A PASSWORD")
  var length = prompt("Enter 8 to 128 characters");
  var lower = confirm("Do you want lower case letters");
  var upper = confirm("Do you want upper case letter");
  var numbers = confirm("Do you want numbers");
  var punctuation = confirm("Do you want symbols");
  //creating my if statements to what user chooses and confirms when prompted

  //making numeric string readable by js, using paresInt
  if (parseInt(length) >= 8 && parseInt(length) <= 128) {
    if (lower) {
      userCharacterChoice = userCharacterChoice.concat(alphabet);
    }
    if (upper) {
      userCharacterChoice = userCharacterChoice.concat(alphabetUPPER);
    }
    if (numbers) {
      userCharacterChoice = userCharacterChoice.concat(numeric);
    }
    if (punctuation) {
      userCharacterChoice = userCharacterChoice.concat(symbols);
    }

    console.log(userCharacterChoice);
    for (var i = 0; i < parseInt(length); i++) {
      var randomIndex = Math.floor(Math.random() * userCharacterChoice.length);
      var randomChar = userCharacterChoice[randomIndex];

      //for loop pushes code from users choice randomly thus providing final code.

      finalPassword = finalPassword + randomChar;
    }
  }
  return finalPassword;
  console.log(finalPassword);
}
// Assignment Code
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Added an event listener to generate my button
generateBtn.addEventListener("click", writePassword);
