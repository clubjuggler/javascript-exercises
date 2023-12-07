const palindromes = function (stringIn) {

    let stringInLower = stringIn.toLowerCase();
    
    let stringNoPunc = ''

    //Remove punctuation from orig string
    for (i = 0; i < stringInLower.length; i++) {
        if (!!stringInLower[i].match(/^[.,:!? ]/)) {
            //pass
        } else {
            stringNoPunc += stringInLower[i]
        }
    }

    let revString = '';

    for (i=stringNoPunc.length - 1; i>-1; i--) {
        revString += stringNoPunc[i]
        };
    
    //return revString
    if (stringNoPunc == revString) {
        return true
    } else {
        return false
    };
};

// Do not edit below this line
module.exports = palindromes;
