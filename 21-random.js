//initialize varibles
var count = 0; //where the game is
var steps = 0; // 1, 2, or 3
var game = []; //numbers couted
var player = ''; // person whos turn it is

do{//end at 21
   //call continuing function for user
	player = "you";
	/*Restrict user input*/
	steps = prompt("starting at "+count+", how many steps do you count (1-3)");
	steps = cleanInput(steps);
	
	count = counting(player,count,steps)
	//call counting function for computer, at 2 steps each time
	player = "me";
	steps = Math.floor((Math.random()) * (3) + 1);
	count = counting(player,count,steps)
}
while(count<21);

alert("you win!"); //temporary

//function for count and display
function counting(player, current, steps){
	game=[];
	for (index=0;index<steps;index++) {
		game[index]=current + index + 1;
	}
	alert(player+": "+game);
	current= parseInt(current)+ parseInt(steps);
	return current;
}

function cleanInput(userVar){
	do{
		userVar = prompt("Try again, Dingus. Please enter a number between 1 and 3");
	}
	while(userVar > 3 || userVar < 1)
	return userVar;
}