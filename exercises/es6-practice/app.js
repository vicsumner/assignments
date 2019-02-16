//Morning Practice--------------------------------------Friday Feb.14 2019-- ES6 practice-----
//ES6 Practice - Slope Style----------------------

//Ques.1----------------------
function collectAnimals(...animals) {
  return animals
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Ques.2----------------------
function combineFruit(fruit, sweets, vegetables) {
  return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
  ["cake", "pie"],
  ["carrit"]))


//Ques.3----------------------
const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence() {
  return `We're going to have a good time in ${location} for ${duration}`
}
