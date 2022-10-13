

let inputOne = document.getElementById ("input1")
let inputTwo= document.getElementById ("input2")

console.log(inputOne);

function clearInput () {
        inputOne.value = ""
        inputTwo.value = ""
}

function addNumber () {
    let num1 = document.getElementById ("input1").value;
    let num2 = document.getElementById ("input2").value;
    let result = Number (num1) + Number (num2);
    let finalResult = parseFloat (result).toFixed (2);
    clearInput ()
    return finalResult
}

function subtractNumber () {
    let num1 = document.getElementById ("input1").value;
    let num2 = document.getElementById ("input2").value;
    let result = Number (num1) - Number (num2);
    let finalResult = parseFloat (result).toFixed (2);
    clearInput () 
    return finalResult
}

function multiplyNumber () {
    let num1 = document.getElementById ("input1").value;
    let num2 = document.getElementById ("input2").value;
    let result = Number (num1) * Number (num2);
    let finalResult = parseFloat (result).toFixed (2);
    clearInput () 
    return finalResult
}

function divideNumber () {
    let num1 = document.getElementById ("input1").value;
    let num2 = document.getElementById ("input2").value;
    let result = Number (num1) / Number (num2);
    let finalResult = parseFloat (result).toFixed (2);
    clearInput () 
    return finalResult
}


// let a = new Date ().getDay () 
// // alert (a)

// switch (new Date().getDay()) {
//     case 0:
//       alert ("Sunday")
//       break;
//     case 1:
//         alert ("Monday")
//       break;
//     case 2:
//         alert ("Tuesday")
//       break;
//     case 3:
//         alert ("Wednesday")
//       break;
//     case 4:
//         alert ("Thursday")
//       break;
//     case 5:
//         alert ("Friday")
//       break;
//     case 6:
//         alert ("Saturday")
//         default:
//         alert ("not a valid day")
//             break;
//   }

