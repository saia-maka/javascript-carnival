  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
// setup 
const unicornImgs = ['unicorn-0.png', 'unicorn-1.png', 'unicorn-2.png', 'unicorn-3.png']
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
let unicorns = document.getElementsByTagName('img')
console.log(unicorns)
const clicked = () => {
 console.log('Clicked!')
 return counter()
}
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = counter
}

