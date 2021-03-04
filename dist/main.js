
let wholeConatiner = document.getElementById('whole-calc-conatiner')
console.log(wholeConatiner)
let selectNumberBtn = document.getElementsByClassName('selectNumber')
let numberOfPplValue = document.getElementById('numberOfPpl')

function selectNumber() {
    console.log(numberOfPplValue.value)
    wholeConatiner.style.display = "show"
   
}
