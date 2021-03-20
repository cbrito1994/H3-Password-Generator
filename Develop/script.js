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

    const specials = window.confirm("Want special characters?");
    if(specials){
        let specialCharacters = "!#$%&/@?¿¡";
        let scArray = specialCharacters.split('');
        special = scArray;
    }

    if(lowercaseletter.length === 0 && uppercaseletter.length === 0 && numeric.length === 0 && special.length === 0){
        window.alert("You must choose at least one option to generate your password");
    } else {
        if(lowercaseletter.length !== 0){
          const lowerRandomNumber = Math.floor(Math.random() * lowercaseletter.length);
          let randomLower = lowercaseletter[lowerRandomNumber];
          secretPassword.push(randomLower);
        }

        if(uppercaseletter.length !== 0){
            const lowerUpperLetter = Math.floor(Math.random() * uppercaseletter.length);
            let randomUpper = uppercaseletter[lowerUpperLetter];
            secretPassword.push(randomUpper);
        }

        if(numeric.length !== 0){
            const numericRandomNumber = Math.floor(Math.random() * numeric.length);
            let randomNumber = numeric[numericRandomNumber];
            secretPassword.push(randomNumber);
        }

        if(special.length !== 0){
            const specialRandomNumber = Math.floor(Math.random() * special.length);
            let randomSpecial = special[specialRandomNumber];
            secretPassword.push(randomSpecial);
        }

        secretPassword.sort(function(){
            return Math.random() - 0.5
        });
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
