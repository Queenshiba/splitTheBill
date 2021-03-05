
let wholeConatiner = document.getElementById('whole-calc-conatiner')
console.log(wholeConatiner)
let selectNumberBtn = document.getElementsByClassName('selectNumber')
let numberOfPplValue = document.getElementById('numberOfPpl')
let setOfEach = document.getElementsByClassName('setOfEach')
let names = document.getElementsByClassName('name')

function selectNumber() {
    console.log(numberOfPplValue.value)
    wholeConatiner.style.display = ""

console.log(setOfEach)
let texrnode = document.createTextNode(setOfEach)
// wholeConatiner.appendChild(names)
wholeConatiner.appendChild(texrnode); 
}
