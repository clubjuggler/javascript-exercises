const convertToCelsius = function(temp) {
  let f = (temp - 32) * 5 / 9

  return Number(f.toFixed(1))

};

const convertToFahrenheit = function(temp) {
  let c = (temp * 9 / 5) + 32

  return Number(c.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
