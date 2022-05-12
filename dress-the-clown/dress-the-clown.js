  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

// Setup
  //image arrays
  const head = ['head0.png', 'head1.png', 'head2.png', 'head3.png', 'head4.png', 'head5.png']
  const body = ['body0.png', 'body1.png', 'body2.png', 'body3.png', 'body4.png', 'body5.png']
  const shoes = ['shoes0.png', 'shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png', 'shoes5.png']
  // elements arrays
  const elmArr = document.getElementsByTagName('img')
  const elmIds = ['head', 'body', 'shoes']
  // give elements id head, body, shoes
  for (let i = 0; i < elmArr.length; i++) {
    elmArr[i].setAttribute('id', elmIds[i])
  }
  // create counter variables
  let headCount = 0;
  let bodyCount = 0;
  let shoesCount = 0;

  


// create function to change forward
  // takes in array of images
  // 
const changeForward = () => {};