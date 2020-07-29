import validator from './validator.js';

let slideIndex = 0
let slides = document.getElementsByClassName("slides")
let carousel = () => {
    let i
    for(i=0; i < slides.length; i++){
        slides[i].classList.add('hide')
        slides[i].classList.remove('display')
    }
    slideIndex++
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].classList.add('display')
    slides[slideIndex-1].classList.remove('hide')
    setTimeout(carousel,2000) // Change image every 2 seconds
}
window.addEventListener('load', carousel)

let nowDonate = document.getElementById('nowdonate')
let welcomePage = document.getElementById('welcome')
let registerPage = document.getElementById('register')

nowDonate.addEventListener('click', () => {
    welcomePage.classList.add('hide')
    welcomePage.classList.remove('display')

    registerPage.classList.add('display')
    registerPage.classList.remove('hide')
})

let oneTimeButton = document.getElementById('onetime');
oneTimeButton.addEventListener('click',oneTime);
let monthlyButton = document.getElementById('monthly');
monthlyButton.addEventListener('click',monthly);
let next = document.getElementById('next');
next.addEventListener('click',nextPage);
let donate = document.getElementById('donate');

let back =  document.getElementById('back');
back.addEventListener('click', tryAgain);
let donateAgain = document.getElementById('donateagain');
donateAgain.addEventListener('click', payAgain);
let creditCardNumber;

let oneTimeAmount = document.getElementById('onetimeamount');
let monthlyAmount = document.getElementById('monthlyamount');

let paymentPage = document.getElementById('payment');
let valid = document.getElementById('validation');
let invalid = document.getElementById('invalidation');






function oneTime(){
    
    monthlyAmount.classList.add('hide');
    monthlyAmount.classList.remove('display');
    
    oneTimeAmount.classList.add('display');
    oneTimeAmount.classList.remove('hide');
}


function monthly(){

    oneTimeAmount.classList.add('hide');
    oneTimeAmount.classList.remove('display');

    monthlyAmount.classList.add('display');
    monthlyAmount.classList.remove('hide');    
}


function nextPage(){

    registerPage.classList.add('hide');
    registerPage.classList.remove('display');

    paymentPage.classList.add('display');
    paymentPage.classList.remove('hide');


}

donate.addEventListener('click', () => {
    creditCardNumber = document.getElementById('cardnumber').value;
    let mask = validator.maskify(creditCardNumber);
    if(validator.isValid(creditCardNumber) === true){

        paymentPage.classList.add('hide');
        paymentPage.classList.remove('display');
  
        valid.classList.add('display');
        valid.classList.remove('hide');

        document.getElementById('message').innerHTML = mask;

    }else{

        paymentPage.classList.add('hide');
        paymentPage.classList.remove('display');

        invalid.classList.add('display');
        invalid.classList.remove('hide');

        document.getElementById('messagemask').innerHTML = mask;

    }
}
)

function tryAgain(){
    invalid.classList.add('hide');
    invalid.classList.remove('display');

    paymentPage.classList.add('display');
    paymentPage.classList.remove('hide');
}

function payAgain(){
    valid.classList.add('hide');
    valid.classList.remove('display');

    registerPage.classList.add('display');
    registerPage.classList.remove('hide');
}


