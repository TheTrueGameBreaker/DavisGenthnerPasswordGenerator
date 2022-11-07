// Assignment code here
var theVariable = "PlaceHolder"
const thePassword = []

function generatePassword() {
  var nnn = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var ynn = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var nyn = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"]
  var yyn = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
  var nny = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","&","*","?","/",">","<"]
  var yny = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","&","*","?","/",">","<"]
  var nyy = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","?","/",">","<"]
  var yyy = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","?","/",">","<"]
  parseInt = prompt("Enter the number of characters you want you password to be. (8-128")
  console.log(parseInt);
  var useUppercase = prompt("Would you like Uppercase letters in your password (y/n)")
  console.log(useUppercase)
  var useNumbers = prompt("Would you like numbers in your password (y/n)")
  console.log(useNumbers)
  var useSpecialcaracters = prompt("Would you like special characters in your password (y/n)")
  console.log(useSpecialcaracters)
  if (parseInt >= 8 && parseInt <= 128) {
    if (useUppercase == "y" || useUppercase == "n"){
      if (useNumbers == "y" || useNumbers == "n"){
        if (useSpecialcaracters == "y" || useSpecialcaracters == "n"){
          if (useUppercase == "n" && useNumbers == "n" && useSpecialcaracters == "n"){
            i = 0
            while (i < parseInt) {
            var theVariable = nnn[Math.floor(Math.random(parseInt) * nnn.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }  
          else if (useUppercase == "y" && useNumbers == "n" && useSpecialcaracters == "n") {
            i = 0
            while (i < parseInt) {
            var theVariable = ynn[Math.floor(Math.random(parseInt) * ynn.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
          else if (useUppercase == "n" && useNumbers == "y" && useSpecialcaracters == "n") {
            i = 0
            while (i < parseInt) {
            var theVariable = nyn[Math.floor(Math.random(parseInt) * nyn.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
          else if (useUppercase == "y" && useNumbers == "y" && useSpecialcaracters == "n") {
            i = 0
            while (i < parseInt) {
            var theVariable = yyn[Math.floor(Math.random(parseInt) * yyn.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
          else if (useUppercase == "n" && useNumbers == "n" && useSpecialcaracters == "y") {
            i = 0
            while (i < parseInt) {
            var theVariable = nny[Math.floor(Math.random(parseInt) * nny.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
          else if (useUppercase == "y" && useNumbers == "n" && useSpecialcaracters == "y") {
            i = 0
            while (i < parseInt) {
            var theVariable = yny[Math.floor(Math.random(parseInt) * yny.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
          else if (useUppercase == "n" && useNumbers == "y" && useSpecialcaracters == "y") {
            i = 0
            while (i < parseInt) {
            var theVariable = nyy[Math.floor(Math.random(parseInt) * nyy.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
          else if (useUppercase == "y" && useNumbers == "y" && useSpecialcaracters == "y") {
            i = 0
            while (i < parseInt) {
            var theVariable = yyy[Math.floor(Math.random(parseInt) * yyy.length)]
            console.log(theVariable)
            thePassword.push(theVariable)
            i++
            }
            console.log(thePassword)
          }
        }
        else {
          prompt("Error occured. Please click ok to refresh the page.")
          location.reload();
        }
      }
      else {
        prompt("Error occured. Please click ok to refresh the page.")
        location.reload();
      }
    }
    else {
      prompt("Error occured. Please click ok to refresh the page.")
      location.reload();
    }
  }
  else {
    prompt("Error occured. Please click ok to refresh the page.")
    location.reload();
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = thePassword
  var password = thePassword
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
