const removeFromArray = function(arr, ...args) {
  return arr.filter(word => !args.includes(word));
};

// Do not edit below this line
module.exports = removeFromArray;
