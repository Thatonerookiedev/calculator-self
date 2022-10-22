const numbers = document.querySelectorAll('.number')
console.log(numbers)
const display = document.getElementById('nuns')
let currentNumber = display.innerText
const secDisplay = document.getElementById('prev')

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const keystroke = number.innerHTML;
        //console.log(keystroke)

        //--------------------

        const mate = String(keystroke)
        let to = String(display.innerHTML)
        display.innerHTML += keystroke

        //------------------
        currentNumber += display.innerHTML




        //-----



    })

});

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
    console.log('it works')
    display.innerText = ''
    secDisplay.innerText = ''
})


const operators = document.querySelectorAll('.op')
console.log(operators)

operators.forEach((operator) => {
    operator.addEventListener('click', () => {

        //--------dont touch up--------------
        currentNumber = display.innerHTML
        secDisplay.innerText = currentNumber
        display.innerText = ''

        //--------------------------
        //--------------------------
        //--------------------------

        let currentOp = Operation

        function Operation() {
            if (operator.innerText == '/') {
                return '/'
            } else if (operator.innerText == 'x') {
                return '*'
            } else if (operator.innerText == '-') {
                return '-'
            } else if (operator.innerText == '+') {
                return '+'
            }
        };

        Operation()
            //-------------------------------------
            //-------------------------------------------


    })

})





//the bottom will take both the 2 divs and do something with them

const equalButton = document.getElementById('equal')
equalButton.addEventListener('click', () => {
    if (equal() == '0') {
        console.log(display.innerText, secDisplay.innerText)
    } else {
        //console.log(display.innerText, secDisplay.innerText)
        //console.log('it went to else')

    }
})







//dont touch bottom
function equal() {
    //-------
    if (lastPressedOp == '/') {
        new Promise((resolve, reject) => {
            if (display.innerText == '') {
                console.log('sucessful promise')
                resolve(('sucessful promise'))
            } else {
                //console.log('bad promise')
                //reject(('bad promise'))
                let div = Number(display.innerText) / Number(secDisplay.innerText)
                display.innerText = ''
                secDisplay.innerText = ''
                display.innerText = String(div)
            }
            //-----------------------------
        })
    } else if (lastPressedOp == 'x') {
        new Promise((resolve, reject) => {
            if (display.innerText == '') {
                console.log('sucessful promise')
                resolve(('sucessful promise'))
            } else {
                //console.log('bad promise')
                //reject(('bad promise'))
                let mul = Number(display.innerText) * Number(secDisplay.innerText)
                display.innerText = ''
                secDisplay.innerText = ''
                display.innerText = String(mul)
            }
            //-----------------------------
        })
    } else if (lastPressedOp == '-') {
        new Promise((resolve, reject) => {
            if (display.innerText == '') {
                console.log('sucessful promise')
                resolve(('sucessful promise'))
            } else {
                //console.log('bad promise')
                //reject(('bad promise'))
                let neg = Number(display.innerText) - Number(secDisplay.innerText)
                display.innerText = ''
                secDisplay.innerText = ''
                display.innerText = String(neg)
            }
            //-----------------------------
        })
    } else if (lastPressedOp == '+') {
        new Promise((resolve, reject) => {
            if (display.innerText == '') {
                console.log('sucessful promise')
                    //resolve(('sucessful promise'))
            } else {
                //console.log('bad promise')
                let sum = Number(display.innerText) + Number(secDisplay.innerText)
                display.innerText = ''
                secDisplay.innerText = ''
                display.innerText = String(sum)
                    //reject(('bad promise'))
            }
            //-----------------------------
        })
    }
}
//dont touch else

let lastPressedOp;
const ops = document.querySelectorAll('.op')

ops.forEach((op) => {
    op.addEventListener('click', () => {
        lastPressedOp = op.innerText
        console.log(lastPressedOp)
        equal(lastPressedOp)

    })
})




//-----------------------------------------------------
//---------------------------------------------------

// function doOperation() {
//     if (operator.innerText == '/') {
//         if (equal() == '0') {
//             return 'error'
//         } else {
//             let result = Number(display.innerText) / Number(secDisplay.innerText)
//             return result
//         }
//     } else if (operator.innerText == '*') {
//         if (equal() == '0') {
//             return 'error'
//         } else {
//             let result = Number(display.innerText) * Number(secDisplay.innerText)
//             return result
//         }
//     } else if (operator.innerText == '-') {
//         if (equal() == '0') {
//             return 'error'
//         } else {
//             let result = Number(display.innerText) - Number(secDisplay.innerText)
//             return result
//         }
//     } else if (operator.innerText == '+') {
//         if (equal() == '0') {
//             return 'error'
//         } else {
//             let result = Number(display.innerText) + Number(secDisplay.innerText)
//             return result
//         }
//     }
// }