// define password criteria

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var criteria = {
    lowletters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    capLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    num: ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"],
    specChar: ["!", "@", "#"]
}

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var generatePassword;

var getPasswordOptions = {
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNumericCharacter: confirmNumericCharacter,
    confirmSpecialCharacter: confirmSpecialCharacter
    }


 function getCriteria (){
    var confirmLength = prompt("Choose between 8 and 128 characters");
    console.log(confirmLength);
        if (confirmLength < 8 || confirmLength > 128){
            alert("please enter a number between 8 and 128 charcters");
            return;
        } 
        if (isNaN(confirmLength)===true){ 
            alert("Password length must be a numerical value from to 128 characters. ")
        }
    var confirmLowerCase = confirm("Will you use lower case characters for your password");
    console.log(confirmLowerCase);
        if (confirmLowerCase === true){ 
        } else {
            alert("Please use lower characters for your password");
            return;
        }
    var confirmUpperCase = confirm("Will you use Upper case characters for your password");
    console.log(confirmUpperCase);
        if (confirmUpperCase === true){
        } else {
            alert("You need to use at least 1 upper case character");
            return;
        }
    var confirmNumericCharacter = confirm("Will you be using numerical characters for your password?");
    console.log(confirmNumericCharacter);
        if (confirmNumericCharacter === true){
        } else {
            alert("You need to use at least 1 numeric character");
            return;
        }
    var confirmSpecialCharacter = confirm("Will you be using special characters for your password?");
    console.log(confirmSpecialCharacter);
        if (confirmSpecialCharacter === true){
        } else {
                alert("You need to use at least 1 special character.");
                return;
        }
   if (confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmNumericCharacter){
       alert("Password must contain a lowercase value, uppercase value, numeric value and a special character");
       return;
   }
   var passOptions={
       confirmLong,
       confirmLow, 
       confirmCap,
       confirmNumeric,
       confirmSpecial,
   }
   return passOptions
}

function myLoop(arr){
    var randomIndex = Math.floor(Math.random()*arr.length);
    var randomEl = arr[randomIndex]
    return randomEl
}

function passGen(){
    var options = getCriteria();
    var result = []
    var possibleChar = []
    var guaranteedChar = []
}


    
getCriteria();
