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
// console.log(cells[7])

// add filepath to mole in a variable
const mole = './mole.PNG'



// random number function
// needs a min number variable & max number variable
const minNum = 0
const maxNum = cells.length 
// generate random number
const getRandomNumber = (min, max) => {
  // console.log(Math.floor(Math.random() * max) + min)
  return Math.floor(Math.random() * max) + min
}

// create shuffle mole function access array and select random element with in using getRandomNumber
// add filepath to a variable and store in setup section
// create funciton thats takes an array as arguments
// select random element in arr and place in variable called molesHole
// create a image element and store in a variable called moleImgElm
// append and image element to molesHole
// return
const showMole = (arr) => {
 const randomNum = getRandomNumber(minNum, maxNum)
 console.log(randomNum)
 const molesHole = cells[randomNum]
//  console.log(molesHole)
//  const moleImgElm = <img src="./mole.PNG"/>
let moleImgElm = document.createElement('img')
// console.log(moleImgElm)
moleImgElm.setAttribute('src', mole)
moleImgElm.setAttribute('class', 'moleSize')
molesHole.setAttribute('onclick', 'moleClicked()')
 molesHole.appendChild(moleImgElm)
}
showMole()

//create a function to remove mole from old hole
//target hole mole is in and store in a variable
//find child elements of that variable
//when called function should remove child element
const removeOldMole = (parent) => {
  let child = document.getElementsByClassName('moleSize')
  console.log(moleIsHere)
  return parent.removeChild(child)
}
// removeOldMole()


//create a function to play audio
let audio = new Audio('./whack-audio.wav')
const whackMole = () => {
  audio.play()
  console.log('play audio')
}
// whackMole()



//create an onclick function to call shuffle mole function
//onclick call whackMolegit
//onclick call the showMole function
const moleClicked = () => {
  whackMole()
  showMole()
}



//loop through cells and add onclick function
// for (let i = 0; i < cells.length; i++) {
//   cells[i] = moleClicked
// }



