  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
// setup 
const unicornImgs = ['./images/unicorn-0.png', './images/unicorn-1.png', './images/unicorn-2.png', './images/unicorn-3.png']
let count = 0;


// create image counter function
// increment count every time function is called
// if count is greater than 3 reset counter to 0
// return an array element at index number [count]
let counter = (arr) => {
count++
if (count > 3) {
  count = 0
}
console.log('count is: ' + count)
return arr[count]
}



// Onclick function
// create an array of elements to apply function to
//loop through array and apply function to each element in array

// create variable representing currently clicked unicorn
// set attribute on targeted elm
// use counter function to change attribute per click
let unicorns = document.getElementsByTagName('img')
console.log(unicorns)
const clicked = (e) => {
 let elm = e.target
 elm.setAttribute('src', counter(unicornImgs))
}
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = clicked
}

