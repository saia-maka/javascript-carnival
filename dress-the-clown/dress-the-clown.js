  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

// Setup
  //image arrays
  const head = ['./images/head0.png', './images/head1.png', './images/head2.png', './images/head3.png', './images/head4.png', './images/head5.png']
  const body = ['./images/body0.png', './images/body1.png', './images/body2.png', './images/body3.png', './images/body4.png', './images/body5.png']
  const shoes = ['./images/shoes0.png', './images/shoes1.png', './images/shoes2.png', './images/shoes3.png', './images/shoes4.png', './images/shoes5.png']
  // elements arrays
  const elmArr = document.getElementsByTagName('img')
  const elmIds = ['head', 'body', 'shoes']
  // give elements id head, body, shoes
  for (let i = 0; i < elmArr.length; i++) {
    elmArr[i].setAttribute('id', elmIds[i])
  }
  // create counter variables
  let headCount = 3;
  let bodyCount = 4;
  let shoesCount = 4;

  


// create function to change forward
// takes in counter for body part
// takes in image element to change
// takes in array of images
const changeForward = (partCount, elm, arr) => {
 partCount++ 
 elm.setAttribute('src', arr[partCount])
};
// changeForward(headCount, elmArr[0], head)

// create function to change forward
// takes in counter for body part
// takes in image element to change
// takes in array of images
const changeBackward = (partCount, elm, arr) => {
  partCount-- 
  elm.setAttribute('src', arr[partCount])
 };
//  changeForward(bodyCount, elmArr[1], body)