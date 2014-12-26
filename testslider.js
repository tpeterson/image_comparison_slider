var rightClick = function() {
  document.getElementById("front").style.display="none";
  document.getElementById("back").style.display="inline";
}

var leftClick = function() {
  document.getElementById("front").style.display="inline";
  document.getElementById("back").style.display="none";
}

// Swaps between displaying front and back photo by toggling front photo
// Else is default, while if is what happens after imageClick() activated once
var imageClick = function() {
  if (document.getElementById("front").style.right=="-100%") {
    document.getElementById("front").style.right="0%";
  }
  else {
    document.getElementById("front").style.right="-100%"
  }

  //frontPosition = document.getElementById("front").offsetWidth;
  //console.log(frontPosition);
}

// Log position of container and images
window.onload = function() {
  //width between left edge of screen and left edge of image position
  frontPosition = document.getElementById("front").offsetLeft;
  //backPosition = document.getElementById("back").offsetLeft;
  //width of container
  boxPosition = document.getElementById("container").offsetWidth;

  console.log(frontPosition);
  //console.log(backPosition);
  console.log(boxPosition);


/* SANDBOX FOR GETTING POSITION OF SLIDER

window.onload = function() {
  frontPosition = document.getElementById("front").offsetLeft;
  backPosition = document.getElementById("back").offsetLeft;
  sliderPosition = document.getElementById("SLIDER").offsetLeft;
  boxPosition = document.getElementById("container").offsetLeft;

  console.log("frontPosition");
  console.log("backPosition");
  console.log("sliderPosition");
  console.log("boxPosition");
}

FUNCTION FOR WHEN SLIDER DRAGGED
function slideDrag() {
  var frontImage = document.getElementById("front");
  var backImage = document.getElementById("back");
  var slider = document.getElementById("SLIDER");
  var imageHolder = document.getElementById("container");

  if (sliderPosition){

  }

}


SCRIPT FOR KEEPING ELEMENT ATOP PAGE WHILE SCROLLING
WILL BE USED TO UNDERSTAND HOW TO ASCERTAIN POSITION OF SLIDER

window.onload = function(){ // once entire page is loaded this function is fired
// save original y position of element before it is scrolled
yPosition = document.getElementById("layer_tabs").offsetTop;
}

window.onscroll = function(){ // scrolling fires this function

var myElement = document.getElementById("layer_tabs"); // for cleaner code

// compare original y position of element to y position of page
if( yPosition <= window.pageYOffset ){

// snap element to the top by changing css values of element
myElement.style.position = "fixed";
myElement.style.top = "0px";

}
else{

// re-position to original flow of content
myElement.style.position = "relative";
myElement.style.top = ""; // set to default
}
}

*/
