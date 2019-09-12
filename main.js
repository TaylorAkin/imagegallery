var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
//why not a onclick first?
btn.addEventListener('click', showOverlay);


/* Looping through image folder and adding to thumb-bar div*/


// i begins at 0, if its less than 5, it will run the loop again.
for (i = 1; i <= 5; i++) {

  // creating a new image element called newImage
  var newImage = document.createElement('img');
  // create variable picName that changes between the picture files 
  var picName = "images/pic" + (i) + ".jpg";
  // this changes the src attribute of newImage to picName, which changes each click. 
  newImage.setAttribute('src', picName);
  //when you click on new image, function runs to change the source attribute of displayedImage to picName
  newImage.onclick = function updateDisplay() {
    var currentImage = this.getAttribute('src')
    console.log(currentImage)
    displayedImage.setAttribute('src', currentImage);
  }
  //this adds images to the thumbbar
  thumbBar.appendChild(newImage);

}


/* Wiring up the Darken/Lighten button */

//why e?
function showOverlay (e) {
  var status = e.target.getAttribute('class');
  if (status == "Darken" ){
    var lighten = "Lighten"
    btn.setAttribute('class', lighten);
    btn.textContent = lighten;
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else {
    var dark = "Darken";
    btn.setAttribute('class', dark);
    btn.textContent = dark;
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
