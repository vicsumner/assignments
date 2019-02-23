// Social.js exercise----------------------
//--- At least 3 nested levels of data(including objects and arrays)
//--- At least 1 method
//--- Span across at least 50 lines of code. (No empty lines)

//----------------------------------- 

const musicLovers = {
    name: "Vicki",
    age: 41,
    favoriteGenre:[],
    musicLoversFriends:[
      {
        //-----friend one
        name: "Maddie",
        age: 30,
        favoriteGenre:[
          {
            favoriteArtist: "Prince",
            genreName: "pop",
            decade:"80's"
          }
        ]
      },
      {
        //-----friend two
        name: "JoJo",
        age: 42,
        favoriteGenre: [
          {
            favoriteArtist: "Sweet Mickey",
            genreName: "cerole",
            decade: "00's"
          }
        ]
      },
      {
        //-----friend three
        name: "Farah",
        age: 32,
        favoriteGenre: [
          {
            favoriteArtist: "DMX",
            genreName: "hiphop",
            decade: ["80's","90's","00's"]
          }
        ]
      },
      {
        //-----friend four
        name: "Tony",
        age: 39,
        favoriteGenre: [
          {
            favoriteArtist: "Nas",
            genreName: "hiphop",
            decade: ["80's", "90's", "00's"]
          }
        ]
      }
    ],
    // musicLovers.musicLoversFriends.push({name:"mat"})
    printInfo: function() {
     console.log(musicLovers.musicLoversFriends[2].favoriteGenre[0].genreName) 
      
    }
}
musicLovers.printInfo()


// function printInfo() {
//   console.log(musicLovers.musicLoversFriends[3].favoriteGenre[0].favoriteArtist)
// }
// printInfo()

