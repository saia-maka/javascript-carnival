  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

// - The ability to store or get references to the cells in the HTML table.
// - A function to randomly select which cell should show the mole.
// - A way to show a mole in the chosen cell.

//setup

// create an array of cells
const cells = document.getElementsByTagName('td')
// console.log(cells)

// random number function
// needs a min number variable & max number variable
const minNum = 1
const maxNum = cells.length
// generate random number
const getRandomNumber = (min, max) => {
  // console.log(Math.floor(Math.random() * max) + min)
  return Math.random(Math.floor(Math.random() * max) + min)
}

//create shuffle mole function access array and select random element with in using getRandomNumber




//create an onclick function to call shuffle mole function




//loop through cells and add onclick function



