const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arrIn) {
  let s = 0

	for (i = 0; i < arrIn.length; i++) {
     s += arrIn[i]
  }
  return s
};

const multiply = function(arrIn) {
  let p = 1

	for (i = 0; i < arrIn.length; i++) {
     p *= arrIn[i]
  }
  return p
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
  let p = 1
  if (a == 0) {
    return p
  } else {
    for (i = 1; i < a +1; i++) {
      p *= i
    }
  };
	return p
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
