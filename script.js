
var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var currentIndex = 0;

document.getElementById("swipeButton").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length; // Update current index to the next image
  document.getElementById("image").src = images[currentIndex]; // Update image source
});
