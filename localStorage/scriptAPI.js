//create variable for img
var imgElem = document.querySelector('img');
//creat variable for image
var imageForm = document.getElementById('image');

if(!localStorage.getItem('image')) {
  populateStorage();
} else {
  setStyles();
}
//store image
function populateStorage() {
  localStorage.setItem('image', document.getElementById('image').value);
  setStyles();
}
//get image from local storage to display
function setStyles() {
  var currentImage = localStorage.getItem('image');
  document.getElementById('image').value = currentImage;
  imgElem.setAttribute('src', currentImage);
}

imageForm.onchange = populateStorage;
