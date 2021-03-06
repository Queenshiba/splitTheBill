
let wholeConatiner = document.getElementById('whole-calc-conatiner')
console.log(wholeConatiner)
let selectNumberBtn = document.getElementsByClassName('selectNumber')
let numberOfPplValue = document.getElementById('numberOfPpl')


let inputForName = document.createElement('input')
inputForName.classList.add('inputForName')
wholeConatiner.appendChild(inputForName)

let divForPaidItems = document.createElement('div')
let inputForPaidAmnt = document.createElement('input')


let divForAddItems = document.createElement('div')
divForAddItems.classList.add('divForAddItems')
let pForAddItems = document.createElement('p')
pForAddItems.textContent += 'Add items'
let btnForAddItems = document.createElement('button')
btnForAddItems.textContent += 'Add'
divForAddItems.appendChild(pForAddItems)
divForAddItems.appendChild(btnForAddItems)

divForPaidItems.appendChild(divForAddItems)

let divForResult = document.createElement('div')
let pForResult = document.createElement('p')
let textResult = document.createTextNode('Result')
pForResult.append(textResult)
divForResult.appendChild(pForResult)


wholeConatiner.appendChild(divForAddItems)
wholeConatiner.appendChild(divForResult)



function selectNumber() {
    console.log(numberOfPplValue.value)
    wholeConatiner.style.display = ""



}
