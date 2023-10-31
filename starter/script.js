// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options
function getPasswordOptions() {
  var PasswordOptions = {
    length: passwordLength,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters
  };
}


// Function for getting a random element from an array
function getRandom(arr) {
  const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    password += charset[randomIndex];
  }
  console.log(randomIndex);
}


function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));


  while (passwordLength < 8 || passwordLength > 128) {
    alert("Try again! - Password length must be between 8 - 128 characters!");
    var passwordLength = (prompt("How many characters would you like your password to contain?"));
  }


  var specialCharacters = confirm("Click OK to confirm if you would like to include special characters!");
  var numericCharacters = confirm("Click OK to confirm if you would like to include numeric characters!");
  var lowerCasedCharacters = confirm("Click OK to confirm if you would like to include lowercase characters!");
  var upperCasedCharacters = confirm("Click OK to confirm if you would like to include uppercase characters!");

  while (specialCharacters === false && numericCharacters === false && lowerCasedCharacters === false && upperCasedCharacters === false) {
    alert("You must choose at least one option!");
    var specialCharacters = confirm("Click OK to confirm if you would like to include  any special characters!");
    var numericCharacters = confirm("Click OK to confirm if you would like to include  any numeric characters!");
    var lowerCasedCharacters = confirm("Click OK to confirm if you would like to include any lowercase characters!");
    var upperCasedCharacters = confirm("Click OK to confirm if you would like to include any uppercase characters!");
  }
}

var passwordLength = specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters;

if (specialCharacters) {
  passwordLength = passwordLength.concat(specialCharacters)
}

if (numericCharacters) {
  passwordLength = passwordLength.concat(numericCharacters)
}

if (lowerCasedCharacters) {
  passwordLength = passwordLength.concat(lowerCasedCharacters)
}

if (upperCasedCharacters) {
  passwordLength = passwordLength.concat(upperCasedCharacters)
}

console.log(passwordLength);


// const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let password = "";
// for (let i = 0; i < length; i++) {
//   const randomIndex = Math.floor(Math.random() * charset.length);
//   password += charset[randomIndex];

// }
// console.log(randomIndex);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);