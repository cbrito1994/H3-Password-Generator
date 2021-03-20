// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercaseletter = [];
let uppercaseletter = [];
let numeric = [];
let special = [];
let secretPassword = [];
let fullPassword = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//   passwordText.value = password;
  
}

function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
