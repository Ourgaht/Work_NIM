var MAX_FRAME = 10; //Number of frames total minus 1
var counter = {Value: 0};


//Warning : At the moment all images are stored locally, you have acces to them thanks to the git repository.

/* ------------------- Function for loading frames for the animation ------------------- */

//Reduce the value of counter by 1 if it's > 0
/*function previous_state(counter){
	counter.Value--;
}

//Raise the value of counter by 1 if it's < MAX_FRAME
function next_state(counter){
	counter.Value++;
}


//Show an image src where src is the path to this image and alt the textbox that appears when you hover it.
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

		document.body.appendChild(img);
}

//This loads the image counter.Value.png in the Test/Images folder
// /!\ Images must be named by their number without unnecessary 0 before or after them, ex: "1" and "24" works, but "01", "Image1" or "1.0" won't work.
// All images must be in .png format

function load_frame(counter){
	show_image("Test/Images/"+counter.Value+".png", 600, 600, "test image");
}

function load__next_frame(counter){
	if(counter.Value < MAX_FRAME){
		next_state(counter);
		load_frame(counter);
	}
}

function load__previous_frame(counter){
	if(counter.Value > 0){
		previous_state(counter);
		load_frame(counter);
	}
}*/

var imageFiles = ["Test/Images/0.png", "Test/Images/1.png", "Test/Images/2.png"];

function NextImage (imgId) {
  var img = document.getElementById (imgId);
  if (img.imageIdx === undefined) {
    img.imageIdx = -1;
  }
  img.imageIdx = (img.imageIdx + 1);

  img.src = imageFiles[img.imageIdx];
}

function PreviousImage (imgId) {
  var img = document.getElementById (imgId);
  if (img.imageIdx === undefined) {
    img.imageIdx = -1;
  }
  img.imageIdx = (img.imageIdx - 1);

  img.src = imageFiles[img.imageIdx];
}

/*--------------- Test function-------------------*/

function test__previous_state(){
	var counter_test = {Value: 1};
	previous_state(counter_test);
	alert("Testing previous_state function...\n Entering value : 1, expected : 0, obtained : " + counter_test.Value);
}

function test__next_state(){
	var counter_test = {Value: 0};
	next_state(counter_test);
	alert("Testing next_state function...\n Entering value : 0, expected : 1, obtained : " + counter_test.Value);
}

function hello(){
	alert("Hello World");
}
