const repeatString = function(word, n) {
    if (n < 0) {
        let strOut = 'ERROR'
        return strOut
    } else {
        let strOut = '';

        for (let i = 0; i < n; i++) {
            strOut += word
        };
        return strOut
    }
};

// Do not edit below this line
module.exports = repeatString;
