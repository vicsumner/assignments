import React from 'react'
import MainContent from './MainContent'



function App(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return(
    <div>
      <h1>Good {timeOfDay}!</h1>
       
        <MainContent 
            contact= {{name:"Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200", phone:"Phone: (212) 555-1234", email:"Email: mr.whiskaz@catnap.meow"
          }}
            
        />

      <MainContent
        contact={{
          name: "Mr. Fluffkins", imgUrl: "http://placekitten.com/200/100", phone: "Phone: (212) 555-1234", email: "Email: mr.whiskaz@catnap.meow"
        }}
      />

      <MainContent
        contact={{
          name: "Destoryer", imgUrl: "http://placekitten.com/400/200", phone: "Phone: (212) 555-1234", email: "Email: mr.whiskaz@catnap.meow"
        }}
      />

      <MainContent
        contact={{
          name: "Felix", imgUrl: "http://placekitten.com/400/300", phone: "Phone: (212) 555-1234", email: "Email: mr.whiskaz@catnap.meow"
        }}
      />
        
    </div>
    
  )
}

export default App;