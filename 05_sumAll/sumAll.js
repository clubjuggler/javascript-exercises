const sumAll = function(start, end) {

    // Case when non-numeric
    if ((typeof start != "number") || (typeof end != "number")) {
        return "ERROR"
    }

    // Case when either number is negative
    if ((start < 0) || (end < 0)) {
        return "ERROR"
    }

    let a, b
    // Case when larger number is first
    if (start > end){
        a = end
        b = start
    } else {
        a = start
        b = end
    }

    let finalSum = 0

    for (let i = a; i < b+1; i++) {
        finalSum += i
    }

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
