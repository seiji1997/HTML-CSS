// Image Slideshow
const slideshowImages = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3"
];

let currentImageIndex = 0;

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  document.getElementById("slideshow").src = slideshowImages[currentImageIndex];
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(showNextImage, 3000);

// Fetch and insert introductory text from intro.txt
fetch('intro.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('introText').innerHTML = `<p>${text}</p>`;
    })
    .catch(error => console.error('Error fetching introductory text:', error));
