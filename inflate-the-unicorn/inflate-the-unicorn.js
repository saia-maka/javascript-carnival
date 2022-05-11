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

// Onclick function

// create variable representing currently clicked unicorn
// set attribute on targeted elm
// use counter function to change attribute per click
let unicorns = document.getElementsByTagName('img')
console.log(unicorns)
const clicked = (e) => {
 let elm = e.target
//  elm.setAttribute('src', counter(unicornImgs))
  elm.setAttribute('src', `./images/unicorn-${counter()}.png`)
}
// create an array of elements to apply function to
//loop through array and apply function to each element in array
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = clicked
}

