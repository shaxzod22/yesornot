let inputTemp = document.querySelector('.weather__input')
let btn = document.querySelector('.btn')
let yes = document.querySelector('.yes')
let no = document.querySelector('.no')
let inputRain = document.querySelector('.rain__input')
let inputGym = document.querySelector('.input__gym')

btn.addEventListener('click' , function() {
    let inputValue = inputTemp.value

if(inputValue >= 5 && inputValue <= 30){
yes.style.color = 'green'
no.style.color = 'black'
}else{
    no.style.color = 'red'
    yes.style.color = 'black'
}

if(inputGym.checked === true && inputValue < 5 && inputRain.checked === true){
    yes.style.color = 'black'
    no.style.color = 'red'
}
else if(inputRain.checked === true && inputGym.checked === true){
    yes.style.color = 'green'
    no.style.color = 'black'
}else if (inputRain.checked === true){
    yes.style.color = 'black'
    no.style.color = 'red'}
})

