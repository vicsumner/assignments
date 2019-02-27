import React from "react";
import Movie from "./Movie";
const App = ( ) => {

    const movies = [
        { title: "Black Panther", stars: 5 },
        { title: "Mission Impossible", stars: 4 },
        { title: "Gremlins", stars: 0.1 },
        { title: "Sleepless in Seattle", stars: 4 }
    ]

    const mappedMovies = movies.map(movie => {
        return (
            <Movie title={ movie.title } stars={ movie.stars } />
        )
    })
    
    return (
        <div>
            { mappedMovies }
        </div>
    )
}

export default App;