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
    const characters = window.prompt("Please choose a number of characters from at least 8 and no more than 128 for you password")
    if(characters < 8 || characters > 128 || characters == ''){
        window.alert("Not valid");
        generatePassword();
        return
    }

    const lowerCase = window.confirm("Want lowercase?");
    if(lowerCase){
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alpha = alphabet.split('');
        lowercaseletter = alpha;
    }

    const upperCase = window.confirm("Want uppercase?");
    if(upperCase){
        let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
        let upperalphabet = alphabet.split('');
        uppercaseletter = upperalphabet;
    }

    const number = window.confirm("Want numeric?");
    if(number){
        let numbers = "1234567890";
        let numbersArray = numbers.split('');
        numeric = numbersArray;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
