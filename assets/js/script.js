// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Your password:" + password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password requirements
// At least 8 characters—the more characters, the better
// A mixture of both uppercase and lowercase letters
// A mixture of letters and numbers
// Inclusion of at least one special character, e.g., ! @ # ? ]
// Note: do not use < or > in your password, as both can cause problems in Web browsers

function generatePassword(){
  
  var character = [];
  var password = "";
  var passwordLength = 0;

  // Generate alphabet in an array
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabetUpper = alpha.map((x) => String.fromCharCode(x));
  // Get lowercase from alpha array
  const alphabetLower = [];
  alphabetUpper.forEach(element => {
    alphabetLower.push(element.toLowerCase());
  });

  // Get length of characters, check for invalid entries (min 8 | max 128)
  var uselength = prompt("How many characters for password? \n(NOTE: Atleast 8 and no more than 128 characters)");
  if (uselength >= 8 && uselength <= 128){
    passwordLength = uselength;  
  } else {
    var invalidText = "Invalid character length.";
    alert(invalidText);
    return invalidText;
  }
  // Get answer for using lowercase, uppercase, number and special characters
  var useLower = confirm("Use lowercase in the password?");
  var useUpper = confirm("Use uppercase in the password?");
  var useNumber = confirm("Use number in the password?");
  var useSpecial = confirm("Use special characters in the password?");

  // Loop thru the requirements by the number of characters set in useLength
  while (true){
    
    // Include lowercase to password
    if (useLower){
      // Get randomize number from alpha array
      alphaIndex1 = Math.ceil(alpha.length * Math.random()*Math.random());
      
      // Get the lowercase letter from alphabetLower array by index
      lower = alphabetLower[alphaIndex1];

      // Add lowercase retrieve to character array
      character.push(lower);
      
      // Check if character array is the same length set in passwordLength to exit while loop
      if (lengthChecker(character.length, passwordLength)){
        break;
      }
    }

    // Include uppercase to password
    if (useUpper){
      // Get randomize number from alpha array
      alphaIndex2 = Math.ceil(alpha.length * Math.random()*Math.random());
      
      // Get the uppercase letter from alphabetUpper array by index
      upper = alphabetUpper[alphaIndex2];
      
      // Add uppercase retrieve to character array
      character.push(upper);

      // Check if character array is the same length set in passwordLength to exit while loop
      if (lengthChecker(character.length, passwordLength)){
        break;
      }
    }

    // Include number to password
    if (useNumber){
      // Get randomize number from 0-9
      numeric = Math.floor(Math.random() * 10);

      // Add random number retrieve to character array
      character.push(numeric);
      
      // Check if character array is the same length set in passwordLength to exit while loop
      if (lengthChecker(character.length, passwordLength)){
        break;
      }
    }

    // Include special character to password
    if (useSpecial){
      // Set special character pool in array
      var specialCharacter = '!@#$%^&*()_+~`|}{[]\:;?,./-=';
      
      // Get randomize number from special character array
      specialIndex = Math.ceil(specialCharacter.length * Math.random()*Math.random());

      // Get special character from specialCharacter array by index
      special = specialCharacter[specialIndex];

      // Add special character retrieve to character array
      character.push(special);
      
      // Check if character array is the same length set in passwordLength to exit while loop
      if (lengthChecker(character.length, passwordLength)){
        break;
      }
    }
    // // fail safe
    // count++;
    // if (count == 128){
    //   console.log("exceeded max count!");
    //   break;
    // }
  }
  
  // Remove character from the array and output as a string
  password = character.join('');
  console.log("Character count:" + password.length);

  // return string generated
  return password;
}

// function to verify if two array equal each other return true/false
function lengthChecker(length1, length2){
  if (length1 == length2){
    return true;
  }
  return false;
}



