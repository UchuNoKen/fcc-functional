/**
 *
 * 010 - Implement .filter on Array.prototype
 *
 *
 */

// using forEach

Array.prototype.myFilter = function(callback) {
  let filteredArray = [];

  this.forEach(x => {
    if (callback(x) === true) {
      filteredArray.push(x);
    }
  });
  return filteredArray;
};
