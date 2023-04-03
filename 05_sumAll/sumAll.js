const sumAll = function(first, second) {
  let sum = 0;
  if (first < 0) {
    return 'ERROR';
  }
  if (typeof (second) != 'number') {
    return 'ERROR';
  }
  if (second > first) {
    while (first <= second) {
      sum += first;
      first += 1;
    }
  } else if (first > second) {
    while (second <= first) {
      sum += second;
      second += 1;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
