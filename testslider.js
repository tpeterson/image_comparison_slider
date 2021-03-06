document.addEventListener("readystatechange", function(event) {
  document.getElementById('slider').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
});

function mouseUp() {
  window.removeEventListener('mousemove', dragItem, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', dragItem, true);
}

// Function to drag slider
function dragItem(e){
  var div = document.getElementById("slider");
  var containerPosition = document.getElementById("container").offsetLeft;

  var containerWidth = document.getElementById("container").offsetWidth;
  var sliderWidth = document.getElementById("slider").offsetWidth;
  var minLeft = 0;
  var maxLeft = containerWidth;

  var mouseleft = e.clientX - containerPosition;
  div.style.left = mouseleft - 15 + "px";

  slideImage(mouseleft, minLeft, maxLeft);
}

function slideImage(sliderLeft, minLeft, maxLeft) {
  var containerPosition = document.getElementById("container").offsetLeft;
  var containerWidth = document.getElementById("container").offsetWidth;

  var where = sliderLeft;

  document.getElementById("front").style.width = where + "px";

  if (where < (minLeft - 15)) {
    var div = document.getElementById("slider");
    var leftedge = document.getElementById("front").style.width;
    var containerWidth = document.getElementById("container").offsetWidth;
    div.style.left = -15 + "px";

    mouseUp();
  }
  else if (where > maxLeft + 15) {
    var div = document.getElementById("slider");
    var leftedge = document.getElementById("front").style.width;
    var containerWidth = document.getElementById("container").offsetWidth;
    div.style.left = containerWidth - 15 + "px";

    mouseUp();
  }
  else {

  }
}
