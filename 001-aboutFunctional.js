/**
 * 001 - aboutfunctional.js
 * @return {string} A cup of tea.
 **/
const prepareTea = () => "greenTea";

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line
// Call getTea to get 40 cups of tea and store them in tea4TeamFCC

// const tea4TeamFCC = null; // :(

// My code

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);
