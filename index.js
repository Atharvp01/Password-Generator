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

const generatePassword = (length) => {
  let password = "";
  //We'll add chars in the password variable at every iteration till we reach the password length
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
};

console.log(generatePassword(12));
