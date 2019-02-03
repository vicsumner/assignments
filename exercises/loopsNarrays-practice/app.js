// exercise #1----------------------------------------
      // variable array-----
      // var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
      
      //Don't assume that there are any occurrences of computer in the array
      // var count = 0;

      // Test to see if the current array item is 1 and, if so, increment the counter
      // for (var i = 0; i < officeItems.length; i++) {
      //     if(officeItems[i] === "computer"){
      //       count++;           
      //     }   
        //Above "if" could also be written using JavaScript's "ternary" operator as this:
        // count = (officeItems[i] === 1) ? ++count : count;   (needs to fix) 
        // }
      // console.log(count);

// exercise #2 with optional bonus #1---------------------------------------------------------
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

 for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){

  // id gender
  // convert to he/she
  var gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;
  if(gender === "male"){
    gender = "he"
  }else{
    gender = "she"
  }

// console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender)

   if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
     console.log(gender + " is old enough to see Mad Max.")
   } else {
     console.log(gender + " is not old enough to see Mad Max.")
   }
 }

 //  Optional Bonus #2 challenge w/ ques 2.---------------------
// not done yet.

//  Optional Bonus challenge---------------------
// not done yet.