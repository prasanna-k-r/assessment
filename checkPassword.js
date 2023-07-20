function checkPassword(password) {
    const MIN_LENGTH = 6;
    const MAX_LENGTH = 20;
    let steps = 0;
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
    let repeatingChars = 0;
  
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      // Check if password contains at least one lowercase letter, one uppercase letter, and one digit
      if (!hasLowercase && /[a-z]/.test(char)) hasLowercase = true;
      if (!hasUppercase && /[A-Z]/.test(char)) hasUppercase = true;
      if (!hasDigit && /\d/.test(char)) hasDigit = true;
  
      // Check if password contains three repeating characters in a row
      if (i > 1 && char === password[i - 1] && char === password[i - 2]) {
        repeatingChars++;
        if (repeatingChars > 1) {
          // If more than 1 repeating characters are found, consider it as one step
          steps++;
          repeatingChars = 0;
        }
      }
    }
  
    // Check length condition and add the missing steps accordingly
    const missingLength = Math.max(0, MIN_LENGTH - password.length) + Math.max(0, password.length - MAX_LENGTH);
    steps = Math.max(steps, missingLength);
  
    // Check if any of the required character types is missing and add the missing steps accordingly
    const missingChars = (!hasLowercase ? 1 : 0) + (!hasUppercase ? 1 : 0) + (!hasDigit ? 1 : 0);
    steps = Math.max(steps, missingChars);
  
    return steps;
  }
console.log(checkPassword("a"))
console.log(checkPassword("Baaba0"))

module.exports = checkPassword;