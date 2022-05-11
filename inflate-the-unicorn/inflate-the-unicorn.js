  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")


// Onclick function
// create an array of elements to apply function to
//loop through array and apply function to each element in array
let unicorns = document.getElementsByTagName('img')
console.log(unicorns)
const clicked = () => {
 console.log('Clicked!')
}
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = clicked
}