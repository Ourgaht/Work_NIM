var MAX_FRAME = 10;
var counter = {Value: 0};


/* ------------------- Function for loading frames for the animation ------------------- */

//Reduce the value of counter by 1 if it's > 0, used
function previous_state(counter){
	if(counter.Value > 0)
		counter.Value--;
}

function next_state(counter){
	if(counter.Value < MAX)
		counter.Value++;
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

}

/*function load_frame(counter){
	show_image(+counter+".png")
}*/

/*--------------- Test function-------------------*/

function test__previous_state(){
	var counter_test = {Value: 1};
	previous_state(counter_test);
	alert("Testing previous_state function...\n Entering value : 1, expected : 0, obtained :", counter_test.Value);
}

function hello(){
	alert("Hello World");
}
