document.addEventListener("readystatechange", function(event) {
  document.getElementById('slider').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
});

// Stop dragging when slider button released
function mouseUp() {
  window.removeEventListener('mousemove', dragItem, true);
}

// Call function to drag slider when mouse pressed down over slider button
function mouseDown(e){
  window.addEventListener('mousemove', dragItem, true);
}

// Function to drag slider
function dragItem(e){
  var div = document.getElementById("slider");
  var containerPosition = document.getElementById("container").offsetLeft;

  // TEST FOR BOUNDARIES ON SLIDER
  var containerWidth = document.getElementById("container").offsetWidth;
  var sliderWidth = document.getElementById("slider").offsetWidth;
  minLeft = 0;
  maxLeft = containerWidth;

  var mouseleft = e.clientX - containerPosition;
  div.style.left = mouseleft - 15 + "px";

  slideImage(mouseleft);

  /*var sliderLeft = div.style.left;
  console.log("Client X: " + e.clientX + "px");
  console.log("Container: " + containerPosition + "px");
  console.log("Container Width: " + containerWidth + "px");
  console.log("MouseLeft: " + mouseleft + "px");
  console.log("Slider Left: " + sliderLeft);
  console.log("Min Left: " + minLeft + "px");
  console.log("Max Left: " + maxLeft + "px");
  console.log("Back: " + document.getElementById("back").offsetLeft);*/
}

// Function to slide back image in sync with slider button's location
function slideImage(sliderLeft) {
  var containerPosition = document.getElementById("container").offsetLeft;
  var containerWidth = document.getElementById("container").offsetWidth;

  var where = sliderLeft;

  // TEST FOR BOUNDARIES ON SLIDER
  if(where < minLeft) {
    where = 0;

    var div = document.getElementById("slider");
    var leftedge = document.getElementById("front").style.width;
    var containerWidth = document.getElementById("container").offsetWidth;
    div.style.left = leftedge + 15 + "px";

    mouseUp();
  } else if ( where > maxLeft) {
    where = containerWidth;

    var div = document.getElementById("slider");
    var leftedge = document.getElementById("front").style.width;
    var containerWidth = document.getElementById("container").offsetWidth;
    div.style.left = containerWidth - 15 + "px";

    mouseUp();
  }
  else {
    document.getElementById("front").style.width = where + "px";
  }

  var frontPosition = document.getElementById("front").offsetWidth;
  var backPosition = document.getElementById("animal").offsetLeft;
  var sliderPosition = document.getElementById("slider").offsetLeft;
  var containerPosition = document.getElementById("container").offsetLeft;
  /*console.log("And now...");
  console.log("Front width: " + frontPosition);
  console.log("Back from left: " + backPosition);
  console.log("Slider from left: " + sliderPosition);
  console.log("Container from left: " + containerPosition);*/
}
