import "../animation.js"

function test__find_previous_state(){
	print("Test for find__previous_state...");
	var counter = {Value = 1};
	print("Test for counter = 1, expected result : 0");
	print("Result obtained :" %d, find__previous_state(counter));
}

test__find_previous_state();