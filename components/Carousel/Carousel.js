/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselCreator(){
  let carousel = document.createElement('div');
  carousel.classList.add('carousel');

  let image = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]
  let left = document.createElement('div');
  left.classList.add('left-button');

  let imgCont = document.createElement('div');
  imgCont.classList.add('image-container')

  for (i in image){
    let img = document.createElement('img');
    img.src = image[i];
    imgCont.appendChild(img);
  }
  console.log(imgCont)
  length = imgCont.querySelectorAll('img').length;
  let im = imgCont.querySelector('.img-container img:nth-child(1)');
  console.log(length);
  console.log(im);
  
  let right = document.createElement('div');
  right.classList.add('right-button');

  carousel.appendChild(left);
  carousel.appendChild(right);
  return carousel
}

let car = carouselCreator();
document.body.append(car);