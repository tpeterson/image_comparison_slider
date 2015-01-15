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

  // TEST FOR BOUNDARIES ON SLIDER
  var containerWidth = document.getElementById("container").offsetWidth;
  var sliderWidth = document.getElementById("slider").offsetWidth;
  minLeft = 0; //
  maxLeft = containerWidth;

  var mouseleft = e.clientX - containerPosition;
  div.style.left = mouseleft - 15 + 'px';
  var sliderLeft = div.style.left;

  slideImage(mouseleft);

  console.log("Client X: " + e.clientX + "px");
  console.log("MouseLeft: " + mouseleft + "px");
  console.log("Slider Left: " + sliderLeft);
  console.log("Min Left: " + minLeft + "px");
  console.log("Max Left: " + maxLeft + "px");
}

// Function to slide back image in sync with slider button's location
function slideImage(sliderLeft) {
  var containerPosition = document.getElementById("container").offsetLeft;
  var containerWidth = document.getElementById("container").offsetWidth;

  var where = sliderLeft; // previously '+ 40'

  // TEST FOR BOUNDARIES ON SLIDER
  if(where < minLeft) { // plus or minus to change where back photo/slider stops
    where = containerPosition; // must be same as if argument
    mouseUp();
  } else if ( where > maxLeft) { // plus or minus to change where back photo/slider stops
    where = containerPosition + containerWidth; // must be same as else if argument
    mouseUp();
  }
  else {
    document.getElementById("front").style.width = where + "px";
  }

  var frontPosition = document.getElementById("front").offsetWidth;
  var backPosition = document.getElementById("back").offsetLeft;
  var sliderPosition = document.getElementById("slider").offsetLeft;
  var containerPosition = document.getElementById("container").offsetLeft;
  console.log("And now...");
  console.log("Front width: " + frontPosition);
  console.log("Back from left: " + backPosition);
  console.log("Slider from left: " + sliderPosition);
  console.log("Container from left: " + containerPosition);
}

// Log position of container and images
window.onload = function() {
  //width between left edge of screen and left edge of image position
  var frontPosition = document.getElementById("front").offsetLeft;
  var backPosition = document.getElementById("back").offsetLeft;
  //width of container
  var containerPosition = document.getElementById("container").offsetLeft;
  var sliderPosition = document.getElementById("slider").offsetLeft;
  var containerWidth = document.getElementById("container").offsetWidth;
  var sliderWidth = document.getElementById("slider").offsetWidth;
  var minLeft = containerPosition + 10;
  var maxLeft = containerPosition + containerWidth;

  console.log("On load...");
  console.log("Container from left: " + containerPosition);
  console.log("Container Width: " + containerWidth);
  console.log("Front from left: " + frontPosition);
  console.log("Back from left: " + backPosition);
  console.log("Slider from left: " + sliderPosition);
  console.log("Slider Width: " + sliderWidth);
  console.log("Min left: " + minLeft);
  console.log("Max left: " + maxLeft);
}
