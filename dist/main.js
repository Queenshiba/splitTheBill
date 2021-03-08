
let wholeConatiner = document.getElementById('whole-calc-conatiner')
console.log(wholeConatiner)
let selectNumberBtn = document.getElementsByClassName('selectNumber')
let numberOfPplValue = document.getElementById('numberOfPpl')

let divForSet = document.createElement('div')
divForSet.classList.add('divForSet')

let inputForName = document.createElement('input')
inputForName.classList.add('inputForName')
divForSet.appendChild(inputForName)

let divForPaidItems = document.createElement('div')
divForPaidItems.classList.add('divForPaidItems')
let inputForPaidAmnt = document.createElement('input')
divForPaidItems.appendChild(inputForPaidAmnt)

let divForAddItems = document.createElement('div')
divForAddItems.classList.add('divForAddItems')
let pForAddItems = document.createElement('p')
pForAddItems.textContent += 'Add items'
let btnForAddItems = document.createElement('button')
btnForAddItems.textContent += 'Add'
btnForAddItems.setAttribute('onclick','test()')
divForAddItems.appendChild(pForAddItems)
divForAddItems.appendChild(btnForAddItems)

divForPaidItems.appendChild(divForAddItems)

let divForResult = document.createElement('div')
let pForResult = document.createElement('p')
let textResult = document.createTextNode('Result')
divForResult.classList.add('divForResult')
pForResult.append(textResult)
divForResult.appendChild(pForResult)

divForSet.appendChild(divForPaidItems)
divForSet.appendChild(divForAddItems)
divForSet.appendChild(divForResult)


function test() {
    alert('test')
}

function selectNumber() {
    console.log(numberOfPplValue.value)
    wholeConatiner.style.display = ""

    for (let i = 0; i < numberOfPplValue.value; i++) {
        wholeConatiner.appendChild(divForSet.cloneNode(true))

    }


}
