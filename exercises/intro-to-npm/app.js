// var readline = require("readline-sync")
// var name =readline.question("What is your name? ")
// console.log("Hello " + name)

// var answer = readline.keyInYN("Do you like Node?")
// console.log(answer)

// var animals = ["sheep", "buffalo", "bird", "lion", "snake"]
// var favAnimals = readline.keyInSelect(animals, "what your favorite animals?")

// console.log(animals[favAnimals])
// var animalsNotSelected = true;

// while (animalsNotSelected){
//   var favAnimal = readline.keyInSelect(animals, "What is your favorite animals?")

//   if (favAnimal === -1){
//     console.log("Choose an animal, don't cancel")

//     } else {console.log("I like " + animals[favAnimal] + "s too!")
//     animalsNotSelected = false
      
//     }
// }

var readline = require("readline-sync");
var welcome = readline.question('May I have your name? ');
var hello = "hello";

console.log(hello.toUpperCase() + " " + welcome + '!');
console.log("Your name has " + welcome.length + " letters.")
// var str = "hello";
// for (var i = 0; i < welcome.length; i++) {
//   var c = str.charAt(i);
//   console.log(c);
// }
