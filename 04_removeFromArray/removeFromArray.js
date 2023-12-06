const removeFromArray = function(arrIn, ...theArgs) {
    let newArr = []

    arrIn.forEach(element => {
        if (!theArgs.includes(element)) {
            newArr.push(element)
        }
    });
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
