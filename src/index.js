import validator from './validator.js';

let slideIndex = 0
let slides = document.getElementsByClassName("slides")

// Arrow function que muestra las imágenes cada 2 segundos en la ventana Welcome.

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
let welcomeWindow = document.getElementById('welcome')
let registerWindow = document.getElementById('register')
let monthlyButton = document.getElementById('monthly')


/* Arrow function con el evento click, que oculta la ventana de bienvenida y muestra 
   la ventana de registro. */

nowDonate.addEventListener('click', () => {
    welcomeWindow.classList.add('hide')
    welcomeWindow.classList.remove('display')

    registerWindow.classList.add('display')
    registerWindow.classList.remove('hide')

    monthlyButton.focus()

})

let oneTimeButton = document.getElementById('onetime')
let oneTimeAmount = document.getElementById('onetimeamount')
let monthlyAmount = document.getElementById('monthlyamount')
let amountOneTime = document.getElementsByName('donation-one-time')
let amountMonthly = document.getElementsByName('donation-monthly')
let otherAmount = document.getElementById('otheramount')


/* Arrow functions con el evento click, muestra u oculta los montos de los botones 
   Única y Mensual de la ventana de registro. */

oneTimeButton.addEventListener('click', () => {
    
    monthlyAmount.classList.add('hide')
    monthlyAmount.classList.remove('display')
    
    oneTimeAmount.classList.add('display')
    oneTimeAmount.classList.remove('hide')

    for(let k = 0; k < amountMonthly.length; k++){
        if(amountMonthly[k].checked ){
            amountMonthly[k].checked = false
        }
    }
    otherAmount.value = ''
})

monthlyButton.addEventListener('click', () => {

    oneTimeAmount.classList.add('hide')
    oneTimeAmount.classList.remove('display');

    monthlyAmount.classList.add('display')
    monthlyAmount.classList.remove('hide') 

    for(let j = 0; j < amountOneTime.length; j++){
        if(amountOneTime[j].checked){
            amountOneTime[j].checked = false
        }
    }
    otherAmount.value = ''
})

let nextButton = document.getElementById('next')
let paymentWindow = document.getElementById('payment')
let showAmount = document.getElementById('amount')
let donate = document.getElementById('donate')
let amountResultTrue = document.getElementById('amount-result-t')
let amountResultFalse = document.getElementById('amount-result-f')


/* Arrow function con el evento click, para el botón siguiente que oculta la ventana 
   de registro y muestra la ventana de pago con tarjeta de crédito. */

nextButton.addEventListener('click', () => {
    registerWindow.classList.add('hide')
    registerWindow.classList.remove('display')

    paymentWindow.classList.add('display')
    paymentWindow.classList.remove('hide')
    
    for(let j = 0; j < amountOneTime.length; j++){
        if(amountOneTime[j].checked){
            showAmount.innerHTML= `S/. ${amountOneTime[j].value}.00`
            donate.innerHTML = `Donar S/. ${amountOneTime[j].value}.00`
            amountResultTrue.innerHTML =`S/. ${amountOneTime[j].value}.00`
            amountResultFalse.innerHTMLinnerHTML = `S/. ${amountOneTime[j].value}.00`
            }
            amountOneTime[j].checked = false        
        }
    for(let k = 0; k < amountMonthly.length; k++){
        if(amountMonthly[k].checked ){
            showAmount.innerHTML = `S/. ${amountMonthly[k].value}.00`
            donate.innerHTML = `Donar S/. ${amountMonthly[k].value}.00`
            amountResultTrue.innerHTML = `S/. ${amountMonthly[k].value}.00`
            amountResultFalse.innerHTML = `S/. ${amountMonthly[k].value}.00`
        }
        amountMonthly[k].checked = false
    }
    if (otherAmount.value !== ''){
        showAmount.innerHTML = `S/. ${otherAmount.value}`
        donate.innerHTML = `Donar S/. ${otherAmount.value}`
        amountResultTrue.innerHTML = `S/. ${otherAmount.value}`
        amountResultFalse.innerHTML = `S/. ${otherAmount.value}`
    }
})

let cardNumber = document.getElementById('cardnumber')

cardNumber.addEventListener('keypress', () => {
    if (event.which != 46 && (event.which < 47 || event.which > 59))
    {
        event.preventDefault();
        if (event.which == 46) {
            event.preventDefault();
        }
    }
});

cardNumber.addEventListener('keyup', () =>{

    if(cardNumber.value == 0 ){
        cardNumber.style.background = '#ffdfd4'
    } else {
        cardNumber.style.background = 'white'   
    } 
    if(cardNumber.value.length == 15 || cardNumber.value.length == 16 ){   
        cardNumber.style.background = '#c7f6c7'
    }
    
})


let expiration = document.getElementById('expiration')
let cvv = document.getElementById('cvv')

expiration.addEventListener('keyup', () =>{

    if(expiration.value == 0 ){
        expiration.style.background = '#ffdfd4'
    } else {
        expiration.style.background = 'white'   
    } 
    if(expiration.value.length == 5){   
        expiration.style.background = '#c7f6c7'
    }
    
})

cvv.addEventListener('keyup', () =>{

    if(cvv.value == 0 ){
        cvv.style.background = '#ffdfd4'
    } else {
        cvv.style.background = 'white'   
    } 
    if(cvv.value.length == 3){   
        cvv.style.background = '#c7f6c7'
    }
    
})

let validityResult = document.getElementById('validation')
let invalidityResult = document.getElementById('invalidation')
let elementValidityMessage = document.getElementById('validity-message')
let elementInvalidityMessage = document.getElementById('invalidity-message')


/* Arrow function con el evento click, para el botón donar que va capturar el valor del
   número de la tarjeta de crédito, y aplicar los métodos isvalid y maskify del objeto
   validator, además de ocultar la ventana de pago y mostrar la ventana de resultado 
   válido e inválido dependiendo del resultado. */

donate.addEventListener('click', () => {
    
    
    let mask = validator.maskify(cardNumber.value)
    let name = document.getElementById('user-name').value
    let userName = name.charAt(0).toUpperCase() + name.slice(1)

    if(validator.isValid(cardNumber.value) === true){

        paymentWindow.classList.add('hide')
        paymentWindow.classList.remove('display')
  
        validityResult.classList.add('display')
        validityResult.classList.remove('hide')

        document.getElementById('maskValidity').innerHTML = mask

        elementValidityMessage.innerHTML =`<p>Gracias ${userName}, tu donación nos permite seguir ayudando a los comedores 
        solidarios durante esta emergencia, aun en los lugares más alejados</p>`

    }else{

        paymentWindow.classList.add('hide')
        paymentWindow.classList.remove('display')

        invalidityResult.classList.add('display')
        invalidityResult.classList.remove('hide')

        document.getElementById('maskInvalidity').innerHTML = mask
        elementInvalidityMessage.innerHTML = `<p>${userName} tu donación no se ha realizado exitosamente!</p>`
}})

let donateAgain = document.getElementById('donateagain')

/* Arrow function con evento click, para el botón donar otra vez, que muestra
   la página de registro y oculta la del resultado válido. */

donateAgain.addEventListener('click', () => {
    validityResult.classList.add('hide')
    validityResult.classList.remove('display')

    registerWindow.classList.add('display')
    registerWindow.classList.remove('hide')

    monthlyAmount.classList.remove('hide') 
    monthlyAmount.classList.add('display')

    oneTimeAmount.classList.add('hide')
    oneTimeAmount.classList.remove('display');
    
    monthlyButton.focus()

    otherAmount.value = ''
})

let returnWindow =  document.getElementById('back')

/* Arrow function con evento click, para el botón de volver a intentar que permite
   retornar a la página donde se selecciona el monto a donar, y oculta la del 
   resultado inválido. */

returnWindow.addEventListener('click', () => {
    invalidityResult.classList.add('hide');
    invalidityResult.classList.remove('display');

    paymentWindow.classList.add('display');
    paymentWindow.classList.remove('hide');

})



