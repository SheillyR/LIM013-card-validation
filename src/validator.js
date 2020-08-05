const validator = {

    isValid: function (creditCardNumber){
    creditCardNumber = creditCardNumber.split('').join('')
    if (parseInt(creditCardNumber) <= 0 || creditCardNumber.length > 16) {
        return false
    }
    let carray = new Array()
    for (let j = 0; j < creditCardNumber.length; j++) {
        carray[carray.length] = creditCardNumber.charCodeAt(j) - 48;
    }
    carray.reverse()
    let sum = 0
    for (let i = 0; i < carray.length; i++) {
        let tmp = carray[i]
        if ((i % 2) != 0) {
            tmp *= 2
            if (tmp > 9) {
                tmp -= 9
            }
        }
        sum += tmp;
    }
    if ((sum % 10) == 0){
        return true
    }else{
        return false
    }
},

maskify: function(number){
    let hash = number.replace(/.(?=.{4,}$)/g, '#');
    return hash
}
}

export default validator;



