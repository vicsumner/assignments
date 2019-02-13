var ask = require('readline-sync');
// var welcome = ask.keyInYN('Would you like to play a game? ') //Y

// if "n" end game
// if(welcome === 1){
//   //end game
//   console.log("maybe next time" + " " + name)
// }



///User------------------------------
var user = {
  name: " ",
  health: 1000,
  attack: function() {return Math.floor(Math.random() * 20) + 10 },
  inventory: []
}

///Enemies------------------------------
var enemies =[{
  name: "Barry the Bear",
  health: 1000,
  attack: function(){return Math.floor(Math.random() * 10) + 10},
  reward: "bear claw"
},
{
  name: "Mo the Mosquito",
  health: 1000,
  attack: function(){return Math.floor(Math.random() * 5) + 10 },
  reward: "vial of blood"
},
{
  name: "Larry the Lion",
  health: 1000,
  attack: function(){return Math.floor(Math.random() * 3) + 10 },
  reward: "courage"
}]

//Play Game------------------------

var answer = ask.keyInYN('Would you like to play a the easiest game ever? ')
var userName = ask.question("What's your name? ")
console.log (answer)

if (answer) {
  // 'Y' key was pressed.
  console.log(userName + "," + " " + "let's play!")
  // play game---------------------
  while(user.health > 0 && enemies.length > 0){
    //if(enemies array === 0) console You won!
    var action = ask.keyIn("What do you want to do? Press 'w' to walk, 'p' to print inventory, 'q' to quit" ,{limit: "$<wpq>"})

    if(action === 'w'){
      walk()
    } else if (action === 'p'){
      console.log(user)
    }else if(action === 'q'){
        break
    }
  }
} else {
  // 'N' key was pressed.
  console.log("Maybe next time" + " " + userName);
  // Do something...
}


//functions------------------------

function walk() {
  var attackChance = Math.floor(Math.random() * 3) 
  if(attackChance === 1){
    getAttacked() 
  }
}

function getAttacked(){
  var fightRun = ask.keyIn("An enemy attacked!! What do you want to do, 'f' fight or 'r' run", { limit: "$<fr>" })
  if(fightRun === 'r'){
    var escapeChance = Math.floor(Math.random() * 2)
    if (escapeChance === 1) {
      console.log("you escaped")
    } else {
      console.log("you gotta fight bitch")
      fight()
    }
  } else if (fightRun === 'f'){
      fight()
  }

}
 function fight(){
   var x = Math.floor(Math.random() * enemies.length);
   var currentEnemy = enemies[x];
   while(currentEnemy.health > 0 && user.health > 0){
     currentEnemy.health -= user.attack();
     user.health -= currentEnemy.attack();
   } 
   if(currentEnemy.health <= 0){
// enemy ///dead
    // push enemys reward onto users inventory array
    // currentEnemy.push()
    user.inventory.push(enemies.reward)

    // give the user some health for winning 
    console.log(`${currentEnemy.name} is dead`)

    // console log a message saying you killed the enemy
    console.log("You killed the enemy!")

    // splice the current enemy out of the enemies array so you don't fight him again
    enemies.splice(enemies.indexOf(currentEnemy), 1)
   }else if(user.health <= 0){
// user // dead
    // console log that the user died
    console.log("You died")
   }

 }
