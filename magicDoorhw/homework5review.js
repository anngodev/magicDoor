// 6 - declare function that takes name as argument
function identifyPerson(name) {
	console.log("you entered" + name);
}
// invoke/call the function

identifyPerson("An");
identifyPerson(prompt("Please enter your name"));

// 7 - declare function that takes no arguments
function hr() {
	console.log("Hi".repeat(20) );
}

// 8 - 
function doorGame(prizes) {
		var door = parseInt(prompt("Please enter a door"));
		if( !prizes[door-1] ) {
			alert("Door does not exist, try again");
			doorGame(prizes);
		} else {
			alert("Congrats, you just won " + prizes[door-1])
		}
		return prizes[door-1];
	}
	var prizes = ["A brand new car!","An all expense paid vacation!", "A rock!"];
	doorGame(prizes);