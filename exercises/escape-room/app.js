var ask = require("readline-sync");
var name = ask.question("what is your name? ");
console.log("Hey let's play a game of Escape Room " + name + "!");

var options = ["Put hand in hole", "Find the key", "Open door"] 
var keyOptions = ["Open door", "Leave game"]
var gameOver = false
var hasKey = false
//Build var for finding key

// Game Loop
while (!gameOver){
    var userChoice = ask.keyInSelect(options, "What would you like to do?")
    console.log(userChoice)

    if (userChoice === 0){
      console.log("You put your hand in the hole, and a bear ate you. DEAD!")
      gameOver = true;

    }else if(userChoice === 1){
      hasKey = true;
      console.log("Great! You found the key, now open the door.")
      
    }else if (userChoice === 2){
      if(hasKey){
        console.log("Great! You escaped!")
        gameOver = true;
      }else{ 
        console.log("You must unlock the door in order to leave.")}  

    }else {
      
      console.log("Canceled");
      gameOver = true;
    }

}