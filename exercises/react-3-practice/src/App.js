import React from 'react'
import JokeList from  './JokeList'
// import Joke from'./Joke'
import jokesData from './jokesData';


function App(){
const jokeComponents = jokesData.map(joke => <JokeList question={joke.question} punchLine={joke.punchLine} />)



  return(
    <div>
          <h1 className="title">Hi Vicki</h1>

          {jokeComponents}
          
            {/* <JokeList 
                joke={{
                   imgUrl:"http://placekitten.com/300/200", question:"Hi?", 
                   punchLine:"Who goes there", 
                   comedian:"Vicki Leigh"}} />
            
            <JokeList
              joke={{ imgUrl: "http://placekitten.com/400/200", question: "Hi2?", punchLine: "Got ya'", comedian: "Vicki sumner" }} />

            <JokeList
              joke={{ imgUrl: "http://placekitten.com/200/200", question: "Hi3?", punchLine: "Who got the props", comedian: "Vicki Lunch" }} />

            <JokeList
              joke={{ imgUrl: "http://placekitten.com/400/200", question: "Hi4", punchLine: "Who goes there", comedian: "Vicki Funtj" }} />
              
            <JokeList
              joke={{ imgUrl: "http://placekitten.com/300/200", question: "Hi5?", punchLine: "Pome Pome", comedian: "Leigh Leigh" }} /> */}
    </div>


)

}





export default App