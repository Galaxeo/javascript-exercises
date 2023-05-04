const findTheOldest = function(arr) {
  function Older(a, b) {
    let aAge;
    let bAge;
    if (a.yearOfDeath & b.yearOfDeath) {
      aAge = a.yearOfDeath - a.yearOfBirth;
      bAge = b.yearOfDeath - b.yearOfBirth;
    }
    if (!a.yearOfDeath) {
      console.log("HERE");
      const curr = new Date();
      aAge = curr.getFullYear() - a.yearOfBirth;
      bAge = b.yearOfDeath - b.yearOfBirth;
    }
    if (!b.yearOfDeath) {
      const curr = new Date();
      bAge = curr.getFullYear() - b.yearOfBirth;
      aAge = a.yearOfDeath - a.yearOfBirth;
    }
    return (aAge > bAge ? a : b);
  }
  return arr.reduce((oldest, person) => {
    return (Older(oldest, person));
  });
};

// Do not edit below this line
module.exports = findTheOldest;
