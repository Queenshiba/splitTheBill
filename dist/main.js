
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

// Section for addting items
let divForAddItems = document.createElement('div')
divForAddItems.classList.add('divForAddItems')

// div for input and btn to show input to add item
// let divForAddItemsBtn = document.createElement('div')
// divForAddItemsBtn.classList.add('divForAddItemsBtn')
// let pForAddItems = document.createElement('p')
// pForAddItems.textContent += 'Add items'
// let btnForAddItems = document.createElement('button')
// btnForAddItems.textContent += 'Add'
// btnForAddItems.setAttribute('onclick','test()')
// divForAddItemsBtn.appendChild(pForAddItems)
// divForAddItemsBtn.appendChild(btnForAddItems)
// divForAddItems.appendChild(divForAddItemsBtn)


// div for input and btn to add items
let divForAddItemName = document.createElement('div')
divForAddItemName.classList.add('divForAddItemName')
let inputForItemName = document.createElement('input')
inputForItemName.classList.add('inputForItemName')
inputForItemName.setAttribute('type','text')
let btnForAddItemName = document.createElement('button')
btnForAddItemName.classList.add('btnForAddItemName')
btnForAddItemName.setAttribute('onclick','test()')
btnForAddItemName.textContent += 'Add Item'
divForAddItemName.appendChild(inputForItemName)
divForAddItemName.appendChild(btnForAddItemName)





let divForResult = document.createElement('div')
let pForResult = document.createElement('p')
let textResult = document.createTextNode('Result')
divForResult.classList.add('divForResult')
pForResult.append(textResult)
divForResult.appendChild(pForResult)

divForSet.appendChild(divForPaidItems)
divForSet.appendChild(divForAddItems)
divForSet.appendChild(divForResult)


    divForAddItems.appendChild(divForAddItemName)
function test() {
    let inputext = document.getElementsByClassName('inputForItemName')
    // alert(inputext[0].value)


// div for list
let divForAddItemList = document.createElement('div')
divForAddItemList.classList.add('divForAddItemList')

    // li for items
let liForAddItemName = document.createElement('li')
liForAddItemName.classList.add('liForAddItemName')
let create = document.createTextNode(inputext[0].value)
liForAddItemName.append(create)

divForAddItems.appendChild(divForAddItemList)
divForAddItemList.appendChild(liForAddItemName)
console.log(divForAddItems)

console.log(divForSet)
}


function selectNumber() {
    console.log(numberOfPplValue.value)
    wholeConatiner.style.display = ""

    for (let i = 0; i < numberOfPplValue.value; i++) {
        wholeConatiner.appendChild(divForSet.cloneNode(true))

    }


}
