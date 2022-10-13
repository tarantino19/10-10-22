`use strict`


const button = document.getElementById ("button")

console.log(button);

function passFunction () {
    let pass = document.getElementById ("password").value
    let finalPassword = pass
    //WD20P-SC

    switch (finalPassword) {
        case "WD20P-SC":
            alert ("successfully logged in!")
            break;
        default:
            alert ("Wrong password")
            break;
    }
}

button.addEventListener ("click", passFunction)

