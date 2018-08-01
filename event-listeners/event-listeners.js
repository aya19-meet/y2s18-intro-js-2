// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg', './imgs/another.jpg', './imgs/einstien.jpeg', './imgs/download.jpeg', './imgs/imag.jpeg', './imgs/images.jpeg'];
var currentIndex = 0;
var img = document.getElementsByTagName('img')

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  img[0].src=pictures[currentIndex]
}
document.getElementsByTagName("body")[0].addEventListener("click", function(event){showNextPicture()})