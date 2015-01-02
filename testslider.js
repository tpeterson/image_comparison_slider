document.addEventListener("readystatechange", function(event) {
  document.getElementById('slider').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
});

// Stop dragging when slider button released
function mouseUp()
{
  window.removeEventListener('mousemove', dragItem, true);
}

// Call function to drag slider when mouse pressed down over slider button
function mouseDown(e){
  window.addEventListener('mousemove', dragItem, true);
}

// Function to drag slider
function dragItem(e){
  var div = document.getElementById('slider');
  var containerPosition = document.getElementById("container").offsetLeft;
  var mouseleft = e.clientX - containerPosition - 20;
  div.style.left = mouseleft + 'px';
  var sliderLeft = div.style.left;

  slideImage(mouseleft);

  console.log("Client X: " + e.clientX + "px");
  console.log(sliderLeft);
}

// Function to slide back image in sync with slider button's location
function slideImage(sliderLeft) {
  var where = sliderLeft + 40;

  if (document.getElementById("front").style.width == "400") {
    document.getElementById("front").style.width = where + "px";
  }
  else {
    document.getElementById("front").style.width = where + "px";
  }

  var frontPosition = document.getElementById("front").offsetWidth;
  var backPosition = document.getElementById("back").offsetLeft;
  var sliderPosition = document.getElementById("slider").offsetLeft;
  var containerPosition = document.getElementById("container").offsetLeft;
  console.log("And now...");
  console.log("Front: " + frontPosition);
  console.log("Back: " + backPosition);
  console.log("Slider: " + sliderPosition);
  console.log("Container: " + containerPosition);
}

// Log position of container and images
window.onload = function() {
  //width between left edge of screen and left edge of image position
  var frontPosition = document.getElementById("front").offsetLeft;
  var backPosition = document.getElementById("back").offsetLeft;
  //width of container
  var containerPosition = document.getElementById("container").offsetLeft;
  var sliderPosition = document.getElementById("slider").offsetLeft;

  console.log("On load...");
  console.log("Container: " + containerPosition);
  console.log("Front: " + frontPosition);
  console.log("Back: " + backPosition);
  console.log("Slider: " + sliderPosition);
}
