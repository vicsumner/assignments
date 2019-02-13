var matrix = []
for(var i = 0; i< matrix.length; i++){
  for(var j = 0; j< matrix.length; j++){
    for(var k = 0; k< matrix.length; k++){
      console.log(matrix[i][j][k])
    }
  }
}

function Person (name, isAlive, hairColor, speak){
  this.name = name;
  this.isAlive = isAlive;
  this.hairColor = hairColor;
  this.speak = speak;
}

