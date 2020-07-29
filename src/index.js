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


// Arrow function con el evento click, que oculta la ventana de bienvenida y muestra 
// la ventana de registro.

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

// Arrow functions con el evento click, muestra u oculta los montos de los botones 
// Única y Mensual de la ventana de registro.

oneTimeButton.addEventListener('click', () => {
    
    monthlyAmount.classList.add('hide')
    monthlyAmount.classList.remove('display')
    
    oneTimeAmount.classList.add('display')
    oneTimeAmount.classList.remove('hide')
})

monthlyButton.addEventListener('click', () => {

    oneTimeAmount.classList.add('hide')
    oneTimeAmount.classList.remove('display');

    monthlyAmount.classList.add('display')
    monthlyAmount.classList.remove('hide') 
})

let nextButton = document.getElementById('next')
let paymentWindow = document.getElementById('payment')

// Arrow function con el evento click, para el botón siguiente que oculta la ventana 
// de registro y muestra la ventana de pago con tarjeta de crédito.

nextButton.addEventListener('click', () => {
    registerWindow.classList.add('hide')
    registerWindow.classList.remove('display')

    paymentWindow.classList.add('display')
    paymentWindow.classList.remove('hide')
})

let donate = document.getElementById('donate')
let validityResult = document.getElementById('validation')
let invalidityResult = document.getElementById('invalidation')

// Arrow function con el evento click, para el botón donar que va capturar el valor del
// número de la tarjeta de crédito, y aplicar los métodos isvalid y maskify del objeto
// validator, además de ocultar la ventana de pago y mostrar la ventana de resultado 
// válido e inválido dependiendo del resultado. 

donate.addEventListener('click', () => {
    let creditCardNumber = document.getElementById('cardnumber').value
    let mask = validator.maskify(creditCardNumber)
    
    if(validator.isValid(creditCardNumber) === true){

        paymentWindow.classList.add('hide')
        paymentWindow.classList.remove('display')
  
        validityResult.classList.add('display')
        validityResult.classList.remove('hide')

        document.getElementById('message').innerHTML = mask

    }else{

        paymentWindow.classList.add('hide')
        paymentWindow.classList.remove('display')

        invalidityResult.classList.add('display')
        invalidityResult.classList.remove('hide')

        document.getElementById('messagemask').innerHTML = mask
    }
})

let donateAgain = document.getElementById('donateagain')

// Arrow function con evento click, para el botón donar otra vez, que muestra
// la página de registro y oculta la del resultado válido.

donateAgain.addEventListener('click', () => {
    validityResult.classList.add('hide')
    validityResult.classList.remove('display')

    registerWindow.classList.add('display')
    registerWindow.classList.remove('hide')
})

let returnWindow =  document.getElementById('back')

// Arrow function con evento click, para el botón de volver a intentar que permite
// retornar a la página donde se selecciona el monto a donar, y oculta la del 
// resultado inválido.

returnWindow.addEventListener('click', () => {
    invalidityResult.classList.add('hide');
    invalidityResult.classList.remove('display');

    paymentWindow.classList.add('display');
    paymentWindow.classList.remove('hide');
})



