const palindromes = function(str) {
  str = str.toLowerCase();
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  str = str.replace(/\s+/g, "");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      console.log(str, str[left], str[right]);
      return false;
    } else {
      left += 1;
      right -= 1;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
