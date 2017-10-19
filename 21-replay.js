//initialize varibles
do{//end
	var count = 0; //where the game is
	var steps = 0; // 1, 2, or 3
	var game = []; //numbers couted
	var player = ''; // person whos turn it is

	do{//end at 21
	   //call continuing function for user
		player = "you";
		steps = prompt("startig at "+count+", how many steps do you count (1-3)");
		count = counting(player,count,steps)
		if(count >= 21){
			var win = "You Lose!"
		}
		else if(count < 21){
				//call counting function for computer, at 2 steps each time
			player = "me";
			steps = Math.floor((Math.random()) * (3) + 1);
			count = counting(player,count,steps)
			if(count >= 21){
				var win = "You Win!"
			}
		}
		
	}
	while(count<21);

	alert(win)

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
	playAgain = prompt("Do you want to play again? y is yes, anything else is no");
}
while(playAgain == "y");