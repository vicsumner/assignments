var xhr = new XMLHttpRequest()
var container = document.getElementById("container")

xhr.onreadystatechange = function(){
  if (xhr.status === 200 && xhr.readyState === 4){
    var jsonData = xhr.responseText
    var data = JSON.parse(jsonData)
    listDataToDOM(data.objects[0].pokemon)
    // console.log(data.objects[0].pokemon)
  }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

function listDataToDOM(pokemonArr){
for (var i = 0; i < pokemonArr.length; i++){
  var pokemon = pokemonArr[i]
  var name = document.createElement("h3")
  
  name.textContent = pokemon.name

  container.appendChild(name)
} 
}