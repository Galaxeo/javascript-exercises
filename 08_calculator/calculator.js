const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, currentVal) => total + currentVal, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentVal) => total * currentVal, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  total = 1;
  for (i = 2; i <= num; i++) {
    total *= i;
  }
  return total;
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
