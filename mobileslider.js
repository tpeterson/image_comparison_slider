document.addEventListener("readystatechange", function(event) {
  document.getElementById('slider').addEventListener('touchstart', touchDown, false);
  window.addEventListener('touchend', touchStop, false);
});

function touchStop() {
  window.removeEventListener('touchmove', touchSlide, true);
}

function touchDown(e){
  window.addEventListener('touchmove', touchSlide, true);
}

// Function to drag slider
function touchSlide(e){
  var div = document.getElementById("slider");
  var containerPosition = document.getElementById("container").offsetLeft;

  var containerWidth = document.getElementById("container").offsetWidth;
  var sliderWidth = document.getElementById("slider").offsetWidth;
  var minLeft = 0;
  var maxLeft = containerWidth;

  var mouseleft = e.pageX - containerPosition;
  div.style.left = mouseleft - 15 + "px";

  touchdragImage(mouseleft, minLeft, maxLeft);
}

function touchdragImage(sliderLeft, minLeft, maxLeft) {
  var containerPosition = document.getElementById("container").offsetLeft;
  var containerWidth = document.getElementById("container").offsetWidth;

  var where = sliderLeft;

  document.getElementById("front").style.width = where + "px";

  if (where < (minLeft - 15)) {
    var div = document.getElementById("slider");
    var leftedge = document.getElementById("front").style.width;
    var containerWidth = document.getElementById("container").offsetWidth;
    div.style.left = -15 + "px";

    touchStop();
  }
  else if (where > maxLeft + 15) {
    var div = document.getElementById("slider");
    var leftedge = document.getElementById("front").style.width;
    var containerWidth = document.getElementById("container").offsetWidth;
    div.style.left = containerWidth - 15 + "px";

    touchStop();
  }
  else {

  }
}
