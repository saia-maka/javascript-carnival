  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
// setup 
let count = 0;

// create image counter function
// increment count every time function is called
// if count is greater than 3 reset counter to 0
let counter = (arr) => {
count++
if (count > 3) {
  count = 0
}
console.log('count is: ' + count)
return count
}

// Onclick functions

// create onclick function to return thank you message
// function takes arugment representing unicorn number
// create if count === 3 return alert message 'Unicorn number X says thank you!'
let tymsg = (unicornNumber) => {
if (count === 3) {
  setTimeout(() => {
    alert(`Unicorn number ${unicornNumber} says thank you!`)
  }, 500)
} else {
  return
}
}

// create variable representing currently clicked unicorn
// find number of unicorn and place in variable
// set attribute on targeted elm
// use counter function to change attribute per click
// call thank you msg function and enter unicorn number variable as argument
let unicorns = document.getElementsByTagName('img')
console.log(unicorns)
const clicked = (e) => {
 let elm = e.target
 let unicornNum = elm.getAttribute('num')
  elm.setAttribute('src', `./images/unicorn-${counter()}.png`)
  tymsg(unicornNum)
}
// create an array of elements to apply function to
// set a number for each element in array
//loop through array and apply function to each element in array
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].setAttribute('num', i + 1)
  unicorns[i].onclick = clicked
}

