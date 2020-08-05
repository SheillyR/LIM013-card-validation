const validator = {

    isValid: function (creditCardNumber){
    creditCardNumber = creditCardNumber.split(' ').join("")
    if (parseInt(creditCardNumber) <= 0 || creditCardNumber.length > 16) {
        return false;
    }
    var carray = new Array();
    for (var j = 0; j < creditCardNumber.length; j++) {
        carray[carray.length] = creditCardNumber.charCodeAt(j) - 48;
    }
    carray.reverse();
    var sum = 0;
    for (var i = 0; i < carray.length; i++) {
        var tmp = carray[i];
        if ((i % 2) != 0) {
            tmp *= 2;
            if (tmp > 9) {
                tmp -= 9;
            }
        }
        sum += tmp;
    }
    if ((sum % 10) == 0){
        return true;
    }
    else{
        return false;
    }
},

maskify: function(number){
    let hash = number.replace(/.(?=.{4,}$)/g, '#');
    return hash;
}
}

export default validator;



