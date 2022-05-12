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
  const parts = ['head', 'body', 'shoes']
  // give elements id head, body, shoes
  for (let i = 0; i < elmArr.length; i++) {
    elmArr[i].setAttribute('id', parts[i])
  }
  // create counter variables
  let headCount = 3;
  let bodyCount = 4;
  let shoesCount = 4;

  //create variable to hold current count
  let currentCount = headCount
  //create variable to hold current element
  let currentElm = elmArr[0]
  //create variable to hold current part
  let currentPart = head

  //create variable to hold current edit count
  let currentlyEditingCount = 0
  //create variable to hold current element to edit
  let currentElmToEdit = elmArr[0]
  //create var to hold whichcount arr && var to hold array of images array && var to hold current images array
  let whichCountArr = [headCount, bodyCount, shoesCount]
  let imagesArray = [head, body, shoes]
  let currentImageArray = imagesArray[currentlyEditingCount]

 // create function to change forward & back
 //if count is equal to image arr.length - 1
 //set count to 0 else increment
 //if count is equal to 0
 // set count to image array.lengh - 1 else decrement
 // set current image src attribute to arrImages[count]
const changeForward = () => {
  if (currentCount >= currentPart.length - 1) {
    currentCount = 0
  } else {
    currentCount++
    // console.log(currentCount)
  }
  currentElm.setAttribute('src', currentPart[currentCount])
}

const changeBackward = () => {
  if (currentCount === 0) {
    currentCount = currentPart.length - 1
  } else {
    currentCount--
    // console.log(currentCount)
  }
  currentElm.setAttribute('src', currentPart[currentCount])
}

//create down&up functions to change which body part to edit. Only 3 body parts to toggle through. create counter max=3 min= 0.
// if count goes over 3 set to 0 & vice versa. 
const changeDown = () => {
  if (currentlyEditingCount >= imagesArray.length - 1) { 
    currentlyEditingCount = 0
  } else {
    currentlyEditingCount++
  }
  currentCount = whichCountArr[currentlyEditingCount] // set leftRight count var to correct counter. 
 currentElm = elmArr[currentlyEditingCount] // set current element to toggled element
 currentPart = imagesArray[currentlyEditingCount] // set current array of images to body part currently toggled
}

const changeUp = () => {
  if (currentlyEditingCount === 0) {
    currentlyEditingCount = imagesArray.length - 1
  } else {
    currentlyEditingCount--
  }
  currentCount = whichCountArr[currentlyEditingCount] // set leftRight count var to correct counter. 
  currentElm = elmArr[currentlyEditingCount] // set current element to toggled element
  currentPart = imagesArray[currentlyEditingCount] // set current image showing to correct 
}

// create slider function and assign to left-right-down-up arrow keys
const arrowsSlide = (e) => {
  e.preventDefault()
  return e.keyCode === 37 ? changeBackward()
  : e.keyCode === 39 ? changeForward()
  : e.keyCode === 40 ? changeDown()
  : e.keyCode === 38 ? changeUp()
  : console.log('keyCode error!');
}
document.addEventListener('keydown', arrowsSlide)