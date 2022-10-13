'use strict'

// BASIC FUNCTION

// function addAlert () {
//     let num1 = 12
//     let num2 = 15
//     let result = num1 + num2
//     alert (result)
// };

// addAlert ()



//FUNCTION DECLARATION WITH PARAMETERS

// function sumTotal (num1, num2) {
//     let result = num1 + num2
//     alert (result)
// }

// sumTotal (15, 15)

//FUNC DECLARATION WITH PARAMETERS AND RETURN

// function sumTotalAlert (num1, num2) {
//     let result = num1 + num2
//     return result
// }

// alert (sumTotalAlert (20, 12))

const inputTwo = document.getElementById ("input2")

const sumTotal = function () {
    let numOne = document.getElementById ("input1").value
    // let numTwo = document.getElementById ("input2").value
    let result = Number (numOne) * (9/5) + (32)
    let finalResult = parseFloat (result).toFixed (2)
    return finalResult
}

function clearInput () {
    document.getElementById ('input1').value = ""
    document.getElementById ('input2').value = ""
}