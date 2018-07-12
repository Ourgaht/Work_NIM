var MAX_FRAME = 10;
var counter = {Value: 0};

function find__previous_state(counter){
	if(counter.Value > 0)
		counter.Value--;
}

function find__next_state(counter){
	if(counter.Value < MAX)
		counter.Value++;
}

function load_frame(counter){
	
}

