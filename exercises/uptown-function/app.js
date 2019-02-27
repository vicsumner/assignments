///Function 1--------------------------------------
//returns contents of the array, lyrics, to the console as a string, including necessary spaces.

var lyrics = ["This", "hit", "that", "ice", "cold",
  "Michelle", "Pfeiffer", "that", "white",
  "gold", "This", "one", "for", "them",
  "hood", "girls", "Them", "good", "girls",
  "straight", "masterpieces", "Stylin'",
  "whilen'", "livin'", "it", "up", "in",
  "the", "city", "Got", "Chucks", "on",
  "with", "Saint", "Laurent", "Gotta", "kiss",
  "myself", "I'm", "so", "pretty"];

//  console.log(lyrics.join(" "))



///Function 2--------------------------------------
//returns lyrics backwards 

// var reversed = lyrics.reverse().join(" ")
// console.log(reversed)


///Function 3--------------------------------------
//returns a string of just every other word

let x = lyrics.filter((element, index) => {
 
  return index % 2 === 0;
})
// console.log (x)

///Function 4--------------------------------------
//returns all of lyrics, but every two words are switched 

///Function 5--------------------------------------
//returns lyrics in a random order.

function myFunc(...items) {
  let myArr = items;
  return myArr;
}
console.log(myFunc(1, 2, 3, 4, 5))