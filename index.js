//Let's first store all the lowercase character in a variable

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

//Now let's create a variable containing uppercase characters

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Let's store 0-9 numbers in a variable

const numbers = "0123456789";

//one more variable containing all speacial characters

const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//Let's merge them all

const allChars = lowerCase + upperCase + numbers + specialChars;

//Now lets create a function that'll generate random password using all these above character

const generatePassword = (event) => {
  event.preventDefault();
  const lengthInput = document.getElementById("length");
  const length = lengthInput.value;
  if (length > 50 || length <= 7) {
    alert("An ideal Password should be between 8-15 characters");
  } else {
    let password = "";
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasSpecialChar = false;
    let hasNumber = false;

    // ensure that the password contains at least one uppercase character, one lowercase character, one special character, and one number
    while (!hasUpperCase || !hasLowerCase || !hasSpecialChar || !hasNumber) {
      password = "";
      hasUpperCase = false;
      hasLowerCase = false;
      hasSpecialChar = false;
      hasNumber = false;

      for (let i = 0; i < length; i++) {
        password += allChars.charAt(
          Math.floor(Math.random() * allChars.length)
        );
      }

      for (let i = 0; i < password.length; i++) {
        if (upperCase.includes(password[i])) {
          hasUpperCase = true;
        } else if (lowerCase.includes(password[i])) {
          hasLowerCase = true;
        } else if (specialChars.includes(password[i])) {
          hasSpecialChar = true;
        } else if (numbers.includes(password[i])) {
          hasNumber = true;
        }
      }
    }
    const returnPassword = document.getElementById("passGenerated");
    returnPassword.textContent = password;
  }
};

function copyToClipboard(elementId) {
  let element = document.getElementById(elementId);
  let range = document.createRange();
  range.selectNode(element);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Text copied to clipboard");
}
