//Array Method Questions----------------------------
// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//Ques. 1-Remove the last item---------------------------
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// vegetables.pop();
// console.log(vegetables);

// Ans - ['carrot', 'tomato', 'pepper']

//Ques. 2-Remove the first---------------------------
// var fruit = ["banana", "apple", "orange", "watermelon"];
// fruit.shift();
// console.log(fruit);

// Ans - ['apple', 'orange', 'watermelon']

//Ques. 3- Find the index of "orange."---------------------------
// var fruit = ["apple", "orange", "watermelon"];
// console.log(fruit.indexOf("orange"));

// Ans- 1

//Ques. 4-Add that number to the end---------------------------
// var fruit = ['apple', 'orange', 'watermelon']
// fruit.push (1);
// console.log(fruit);

// Ans - ['apple', 'orange', 'watermelon', 1]

//Ques. 5-Use the length property to find the length---------------------------
// var vegetables = ['carrot', 'tomato', 'pepper'];
// console.log(vegetables.length);

// Ans- 3

//Ques. 6-Add that number to the end ---------------------------
// var vegetables = ['carrot', 'tomato', 'pepper'];
// vegetables.push(3);
// console.log(vegetables);

// Ans - ['carrot', 'tomato', 'pepper', 3]

//Ques. 7-Put the two arrays together---------------------------
// var vegetables = [' carrot', 'tomato', 'pepper', 3];
// var fruit = ['apple', 'orange', 'watermelon', 1,];
// var food = fruit + vegetables;
// console.log(food);

// Ans - apple, orange, watermelon, 1, carrot, tomato, pepper, 3

//Ques. 8-Remove 2 elements from your new array starting at index 4---------------------------
// var food = ["apple", "orange", "watermelon", 1, "carrot", "tomato", "pepper", 3];
// var spliceElements = food.splice(4, 2);
// console.log(food);
// Ans -[ 3, 'pepper', 1, 'watermelon', 'orange', 'apple' ]

//Ques. 9- Reverse your array---------------------------
// var food = ["apple", "orange", "watermelon", 1, "pepper", 3];
// console.log(food.reverse()); 

// Ans - [3, 'pepper', 1, 'watermelon', 'orange', 'apple']


//Ques. 10-Turn the array into a string and return it---------------------------
// var food = [3, 'pepper', 1, 'watermelon', 'orange', 'apple'];
// var foodStr = food.join();
// console.log(foodStr);

// Ans - 3, pepper, 1, watermelon, orange, apple