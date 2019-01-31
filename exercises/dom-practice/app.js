// var myH1 = document.getElementById("myId");
// console.log(myH1);

// Steps:
// Create and Editing Elements

// 1.create the element
// var myH1 = document.createElement("h1")

// 2.give the element some content
// myH1.textContent = "hello World"
// myH1.innerHTML = "<h2>Hello World</h2>"

// 3.placing that element on the DOM
// var container = document.getElementById("container")
// container.appendChild(myH1)

// 1. Create a div in your HTML and give it an ID
// 2. Create an h1 in js
// 3. Give that h1 text content
// 4. Select the div from your HTML
// 5. Append the h1 into the div so it shows up on the webpage

//4.
var container = document.getElementById("container");

//2.
var myH1 = document.createElement("h1");

//3.
myH1.textContent = "hello world";

//5.
container.appendChild(myH1);