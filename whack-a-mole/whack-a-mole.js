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
console.log(moleImgElm)
moleImgElm.setAttribute('src', mole)
moleImgElm.setAttribute('class', 'moleSize')
 molesHole.appendChild(moleImgElm)
}
showMole()


//create a function to play audio
//store audio in a variable
//create true false variable
let audio = new Audio('./whack-audio.wav')
audio.play()
// let playAudio = false
//when called change variable to true 
// use settimeout to make it true and back to false
// if true play audio else return
const whackMole = () => {
  audio.play()
}
// whackMole()



//create an onclick function to call shuffle mole function
//onclick call whackMole
//onclick call the showMole function




//loop through cells and add onclick function



