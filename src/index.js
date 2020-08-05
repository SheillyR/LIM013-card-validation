import validator from './validator.js';

// Arrow function que muestra las imágenes cada 2 segundos en la ventana Welcome.

let slideIndex = 0
let carousel = () => {
    let slidesHow = document.getElementsByClassName("slideshow")
    for(let i=0; i < slidesHow.length; i++){
        slidesHow[i].classList.add('hide')
        slidesHow[i].classList.remove('display')
    }
    slideIndex++
    if(slideIndex > slidesHow.length) {slideIndex = 1}
    slidesHow[slideIndex-1].classList.add('display')
    slidesHow[slideIndex-1].classList.remove('hide')
    setTimeout(carousel,2000) // Change image every 2 seconds
}

window.addEventListener('load', carousel)

let welcomeWindow = document.getElementById('welcome-window')
let nowDonate = document.getElementById('now-donate-button')
let registerWindow = document.getElementById('register-window')
let monthlyButton = document.getElementById('monthly-button')

/* Arrow function con el evento click, que oculta la ventana de bienvenida y muestra 
   la ventana de registro. */

nowDonate.addEventListener('click', () => {
    welcomeWindow.classList.add('hide')
    welcomeWindow.classList.remove('display')

    registerWindow.classList.add('display')
    registerWindow.classList.remove('hide')

    monthlyButton.focus()

})

let oneTimeButton = document.getElementById('one-time-button')
let oneTimeAmount = document.getElementById('one-time-amount')
let monthlyAmount = document.getElementById('monthly-amount')
let oneTimeDonation = document.getElementsByName('one-time-donation')
let monthlyDonation = document.getElementsByName('monthly-donation')
let otherAmount = document.getElementById('other-amount')

/* Arrow functions con el evento click, muestra u oculta los montos de los botones 
   Única y Mensual de la ventana de registro. */

let clearOneTimeDonation = () => {
    for(let j = 0; j < oneTimeDonation.length; j++){
        if(oneTimeDonation[j].checked){
            return oneTimeDonation[j].checked = false
        }
    }
}

let clearMonthlyDonation = () =>{
    for(let k = 0; k < monthlyDonation.length; k++){
        if(monthlyDonation[k].checked ){
            return monthlyDonation[k].checked = false
        }
    }
}

oneTimeButton.addEventListener('click', () => {
    
    monthlyAmount.classList.add('hide')
    monthlyAmount.classList.remove('display')
    
    oneTimeAmount.classList.add('display')
    oneTimeAmount.classList.remove('hide')

    otherAmount.value = ''

    clearMonthlyDonation()
})

monthlyButton.addEventListener('click', () => {

    oneTimeAmount.classList.add('hide')
    oneTimeAmount.classList.remove('display');

    monthlyAmount.classList.add('display')
    monthlyAmount.classList.remove('hide') 

    otherAmount.value = ''

    clearOneTimeDonation()
})

otherAmount.addEventListener('keyup', () => {
    clearMonthlyDonation()
    clearOneTimeDonation()
    if (otherAmount.value !== ''){
        elementShowDonationAmount.innerHTML = `S/. ${otherAmount.value}`
        donateButton.innerHTML = `Donar S/. ${otherAmount.value}`
        validResult.innerHTML = `S/. ${otherAmount.value}`
        amountResultFalse.innerHTML = `S/. ${otherAmount.value}`
    }
} )

let onlyNumber = () => {
    if (event.which != 46 && (event.which < 47 || event.which > 59)){
        return event.preventDefault()
    }else if (event.which == 46) {
            return event.preventDefault()
        }
    }

let phone = document.getElementById('phone')

phone.addEventListener('keypress', onlyNumber)

let nextButton = document.getElementById('next-button')
let paymentWindow = document.getElementById('payment-window')
let elementShowDonationAmount = document.getElementById('element-show-donation-amount')
let donateButton = document.getElementById('donate-button')
let validResult = document.getElementById('valid-result')
let amountResultFalse = document.getElementById('false-result')
let userName = document.getElementById('user-name')

/* Arrow function con el evento click, para el botón siguiente que oculta la ventana 
   de registro y muestra la ventana de pago con tarjeta de crédito. */

nextButton.addEventListener('click', () => {
    
    if(userName.value == '' ){
        alert('¡Debes llenar todos los campos!')
    }else{

        registerWindow.classList.add('hide')
        registerWindow.classList.remove('display')
    
        paymentWindow.classList.add('display')
        paymentWindow.classList.remove('hide')

        for(let j = 0; j < oneTimeDonation.length; j++){
            if(oneTimeDonation[j].checked){
                elementShowDonationAmount.innerHTML= `S/. ${oneTimeDonation[j].value}.00`
                donateButton.innerHTML = `Donar S/. ${oneTimeDonation[j].value}.00`
                validResult.innerHTML =`S/. ${oneTimeDonation[j].value}.00`
                amountResultFalse.innerHTMLinnerHTML = `S/. ${oneTimeDonation[j].value}.00`
            }
            oneTimeDonation[j].checked = false        
        }
        
        for(let k = 0; k < monthlyDonation.length; k++){
            if(monthlyDonation[k].checked ){
                elementShowDonationAmount.innerHTML = `S/. ${monthlyDonation[k].value}.00`
                donateButton.innerHTML = `Donar S/. ${monthlyDonation[k].value}.00`
                validResult.innerHTML = `S/. ${monthlyDonation[k].value}.00`
                amountResultFalse.innerHTML = `S/. ${monthlyDonation[k].value}.00`
            }
        monthlyDonation[k].checked = false
        }
    }
})

let cardNumber = document.getElementById('card-number')

cardNumber.addEventListener('keypress', onlyNumber)

cardNumber.addEventListener('keyup', () =>{

    if(cardNumber.value == '' ){
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

    if(expiration.value == '' ){
        expiration.style.background = '#ffdfd4'
    } else {
        expiration.style.background = 'white'   
    } 
    if(expiration.value.length == 5){   
        expiration.style.background = '#c7f6c7'
    }
    
})

cvv.addEventListener('keypress', onlyNumber)

cvv.addEventListener('keyup', () =>{

    if(cvv.value == '' ){
        cvv.style.background = '#ffdfd4'
    } else {
        cvv.style.background = 'white'   
    } 
    if(cvv.value.length == 3){   
        cvv.style.background = '#c7f6c7'
    }
    
})

let validityResult = document.getElementById('validation-window')
let invalidityResult = document.getElementById('invalidation-window')
let elementValidMessage = document.getElementById('valid-message')
let elementInvalidityMessage = document.getElementById('invalid-message')
let cardHolder = document.getElementById('card-holder')
let cardHolderLastName = document.getElementById('card-holder-last-name')
let cardHolderMail = document.getElementById('card-holder-mail')

/* Arrow function con el evento click, para el botón donar que va capturar el valor del
   número de la tarjeta de crédito, y aplicar los métodos isvalid y maskify del objeto
   validator, además de ocultar la ventana de pago y mostrar la ventana de resultado 
   válido e inválido dependiendo del resultado. */

donateButton.addEventListener('click', () => {

    let mask = validator.maskify(cardNumber.value)
    let name = document.getElementById('user-name').value
    let userName = name.charAt(0).toUpperCase() + name.slice(1)

    if(cardNumber.value == '' || expiration.value == '' || cvv.value == '' || cardHolder.value == '' || 
        cardHolderLastName.value == '' || cardHolderMail.value == '' ){

        alert('¡Debes llenar todos los campos!')

    }else if(validator.isValid(cardNumber.value) === true){

        paymentWindow.classList.add('hide')
        paymentWindow.classList.remove('display')
  
        validityResult.classList.add('display')
        validityResult.classList.remove('hide')

        document.getElementById('valid-masking').innerHTML = mask

        elementValidMessage.innerHTML =`<p>Gracias ${userName}, tu donación nos permite seguir ayudando a los comedores 
        solidarios durante esta emergencia, aun en los lugares más alejados</p>`

    }else{

        paymentWindow.classList.add('hide')
        paymentWindow.classList.remove('display')

        invalidityResult.classList.add('display')
        invalidityResult.classList.remove('hide')

        document.getElementById('invalid-maskig').innerHTML = mask
        elementInvalidityMessage.innerHTML = `<p>${userName} tu donación no se ha realizado exitosamente!</p>`
    }
    cardNumber.style.background = 'white' 
    expiration.style.background = 'white'
    cvv.style.background = 'white' 

    otherAmount.value = '', cardNumber.value = '' , expiration.value = '' , cvv.value = ''

})

let donateAgain = document.getElementById('donate-again')

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
    oneTimeAmount.classList.remove('display')
    
    monthlyButton.focus()
})

let tryAgain =  document.getElementById('try-again')

/* Arrow function con evento click, para el botón de volver a intentar que permite
   retornar a la página donde se selecciona el monto a donar, y oculta la del 
   resultado inválido. */

tryAgain.addEventListener('click', () => {
    invalidityResult.classList.add('hide');
    invalidityResult.classList.remove('display');

    paymentWindow.classList.add('display');
    paymentWindow.classList.remove('hide');

})



