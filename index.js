const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pwLength = 15
let shouldClearValues = false
let pw1El = document.getElementById("pw1-el")
let pw2El = document.getElementById("pw2-el")
let generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", function generatePw(){
    if (shouldClearValues = true){
        pw1El.textContent = ""
        pw2El.textContent = ""
    }
    for (i=0; i < pwLength; i++){
        let randomIndexA = Math.floor(Math.random() * characters.length)
        let randomIndexB = Math.floor(Math.random() * characters.length)
        pw1El.textContent += characters[randomIndexA]
        pw2El.textContent += characters[randomIndexB]
     }
 shouldClearValues = true
}
)

