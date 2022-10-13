`use strict`

function passwordFunction () {
    const pass = document.getElementById ("password").value
    const finalPassword = pass

switch (finalPassword) {
    case "js_password":
        alert ("Successfully logged in")
        break;

    default:
        alert ("Wrong password, please try again")
        location.reload ()
        break;
}

}

const button = document.getElementById ("button")

button.addEventListener ("click", passwordFunction)

