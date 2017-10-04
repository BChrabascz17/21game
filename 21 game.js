var player = 0;
var comp = 0;
var total = 0;

alert("The 21 Game! press Enter to start");
alert("The game is simple. You add 1, 2 or 3 to the total, starting at 0.");
alert("The goal is to have the other player (being me) say 21.");
alert("To be curtious, I will let you go first.");
alert("Try your best! May the better player win!");

do{
	var player = 0;
	var comp = 0;
	var total = 0;
	do{
		player = prompt("Say 1, 2 or 3 to add to the total.");
		if(player == 1){
			total = total + 1;
			alert("The total has become "+total+"!")
			comp = 3
			total = total + comp
			alert("I added "+comp+" making the total "+total+"!")
		}
		else if(player == 2){
			total = total + 2;
			alert("The total has become "+total+"!")
			comp = 2
			total = total + comp
			alert("I added "+comp+" making the total "+total+"!")
		}
		else if(player == 3){
			total = total + 3;
			alert("The total has become "+total+"!")
			comp = 1
			total = total + comp
			alert("I added "+comp+" making the total "+total+"!")
		}
	}
	while(total < 20)
	alert("The total has become 20. You're only option is 21. I win!")
	playAgain = prompt("would you like to play again. y is yes, type anything else for no.")
}
while(playAgain == "y")
