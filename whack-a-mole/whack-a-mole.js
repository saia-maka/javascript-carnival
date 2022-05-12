  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

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

let num = getRandomNumber(minNum, maxNum) //starting random num and random number holder
let startingHole = cells[num] //starting cell and cell holder
let moleImgElm = document.createElement('img') //img element holder
moleImgElm.setAttribute('src', mole) //create src attribute and filepath to mole image
moleImgElm.setAttribute('class', 'moleSize') //give mole class and styling
startingHole.setAttribute('onclick', 'moleClicked()') //give cell onclick function
startingHole.appendChild(moleImgElm) // add image element to cell

//create remove old mole function
//find starting hole
//remove mole
const removeOldMole = () => {
  let child = moleImgElm
 startingHole.removeChild(child)
//  console.log(startingHole)
}
// removeOldMole()

//create function to show new mole
//generate new random num and assign to variable 'num'
// reassign moleImeElm as new img element
// set src attribute
// set class attribute
// set onclick attribute to startingHole
// append moleImgElm to startingHole
const newMole = () => {
  num = getRandomNumber(minNum, maxNum)
  startingHole = cells[num]
  moleImgElm = document.createElement('img')
  moleImgElm.setAttribute('src', mole)
  moleImgElm.setAttribute('class', 'moleSize')
  startingHole.setAttribute('onclick', 'moleClicked()')
  startingHole.appendChild(moleImgElm)
}

//create a function to play audio
let audio = new Audio('./whack-audio.wav')
const whackMole = () => {
  audio.play()
  console.log('play audio')
}

//create an onclick function to call shuffle mole function
const moleClicked = () => {
  whackMole()
  removeOldMole()
  newMole()
}




