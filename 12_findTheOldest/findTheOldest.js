const findTheOldest = function(people) {
    // Declare function that finds the larger of two ages
    const getMax = function(a, b) {

        const aEndDate = getEndDate(a)
        const bEndDate = getEndDate(b)

        const aAge = aEndDate - a['yearOfBirth']
        const bAge = bEndDate - b['yearOfBirth']
        if (aAge>bAge) {
          return a
        } else {
          return b
        }
      };
    
    const getEndDate = function(person) {
        const currentYear = new Date().getFullYear()
        
        if (typeof person['yearOfDeath'] == 'undefined') {
            return currentYear
        } else {
            return person['yearOfDeath']
        }
    }
    
    const oldest = people.reduce((acc, currentValue) => getMax(acc, currentValue));

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
