const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function render() {
    generatePassword()
    document.getElementById("answer").textContent = generatePassword();
    if (generatePassword() === "⚠️ Please choose a number between 7 to 45"){
        document.getElementById("answer").style.color ="rgb(255, 0, 0)"
        document.getElementById("answer").style.fontWeight = "bold"
    } else {
        document.getElementById("answer").textContent = generatePassword()
        document.getElementById("answer").style.color ="#55F991"
    }
}






function getRandomElement(){
    let x = Math.floor(Math.random()*91)
    
    return characters[x]
}

function generatePassword(){
    let password = []
    let idk = document.getElementById("length").value
    for (let i=0; i<idk;i++){
        password.push(getRandomElement())
    }
    
    if (6<idk && idk < 46){
        return password.join("")
    }else{
        return "⚠️ Please choose a number between 7 to 45"
    }
    
}