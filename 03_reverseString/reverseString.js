const reverseString = function(stringIn) {
    let stringArr = stringIn.split('')

    let revStringArr = stringArr.reverse()

    let revString = revStringArr.join('')

    return revString
};

// Do not edit below this line
module.exports = reverseString;
