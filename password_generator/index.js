// let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ">", "<", "*", ")", "(", "?", "!"];
let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ><()*!?1234567890";
let option = [];

const LENGTH_EL = document.querySelector("#length-el")
const GENERATE_EL = document.querySelector("#generate-el")
const OPTION_EL = document.querySelectorAll(".option-el")
LENGTH_EL.value = 10;
GENERATE_EL.addEventListener('click', generate);
for (let i = 0; i < OPTION_EL.length; i++) {
    OPTION_EL[i].addEventListener('click', copy);
}

function generate() {
    let length;
    if (!LENGTH_EL.value || LENGTH_EL.value > 15 || LENGTH_EL.value == 0) {
        console.log("here");
        length = 10;
        LENGTH_EL.value = 10;
    } else {
        length = LENGTH_EL.value;
    }
    console.log(length);
    for (let i = 0; i < 4; i++) {
        let password = "";
        for (let j = 0; j < length; j++) {
            let rand = Math.floor(Math.random() * 69);
            // password += char[rand];
            password += char[rand];
        }
        option.push(password);
        OPTION_EL[i].innerHTML = `<input type="text" id=option${i} class="input" spellcheck="false">`;
        const content = document.querySelector(`#option${i}`)
        content.value = password;
        console.log(content.value);
    }
}

function copy(e) {
    navigator.clipboard.writeText(e.target.value);
}

