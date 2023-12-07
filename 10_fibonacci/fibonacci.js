const fibonacci = function(idx) {

    if (idx < 0) {
        return "OOPS"
    };

    if (typeof idx == 'string') {
        idx = Number(idx)
    };

    let initVal = 1;
    let holdArr = [0,];

    if (idx == 1) {
        return 1
    } else {

        // Add first value
        holdArr.push(initVal);

        for (i = 1; i < idx; i++) {
            holdArr.push(holdArr[i] + holdArr[i-1])
        };
    };


    return holdArr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
