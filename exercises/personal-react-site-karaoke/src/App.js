import React, {Component} from 'react'
import axios from 'axios'
import {Switch, Route, withRouter} from 'react-router-dom'
import './styles.css'
import noImage from './no_image_available.gif'

import {CircleArrow as ScrollUpButton } from 'react-scroll-up-button';


import Nav from './context/Nav'
import Home from './context/Home'
import Artist from './context/Artist'
import Discography from './context/Discography'


class App extends Component {
  constructor() {
    super()
    this.state = {
      artistAlbums: [],
      artistObject: {},
      artistVid:[],
      artistDisco:[],
      albumTrending:[],
      singlesTrending:[],
      searchedArtist: "outkast",
      searchedArtistAlbum: "",
      searchedSingleAlbum:[]
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value 
    })

  }

  handleSubmit = e =>{
      e.preventDefault()

      const newArtistInfo = {
        searchedArtist: this.state.searchedArtist,
        searchedArtistAlbum: this.state.searchedArtistAlbum
      }

      // this.setState({
      //   searchedArtist: 
      // })

      this.getArtist()
  }

  componentDidMount() {
    this.getArtist()
    
  }

  getArtist = () => {
    console.log(this.state.searchedArtist)
    axios.get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${this.state.searchedArtist}`).then(response => {
      //resolve
      // console.log(response.data.artists)
      this.setState({
        artistObject: response.data.artists[0]
      }, () => {
        this.getAlbums()
        //this.getVid()
        this.getArtistDisco()
        this.getTrendingAlbum()
        this.getTrendingSingles()
        this.getSingleAlbum()
      })
    

    }) //reject
      .catch(error => console.log(error))
  }

  getArtistDisco = () => {

    axios.get(`https://theaudiodb.com/api/v1/json/1/discography.php?s=${this.state.searchedArtist}`)
    .then(response => {
      //resolve
      //console.log(response.data.album)
      this.setState({
        artistDisco: response.data.album
      })
    }) //reject
      .catch(error => console.log(error))
  }

  getTrendingAlbum = () => {

  axios.get(`https://theaudiodb.com/api/v1/json/1/trending.php?country=us&type=itunes&format=albums`).then(response => {
    //resolve
    //console.log(response.data.trending)
    let trending = response.data.trending.reverse()
   
    this.setState({
      albumTrending: trending
    })
  }) //reject
    .catch(error => console.log(error))
  }

  getTrendingSingles = () => {

    axios.get(`https://theaudiodb.com/api/v1/json/1/trending.php?country=us&type=itunes&format=singles`).then(response => {
      //resolve
      //console.log(response.data.trending)
      let trending = response.data.trending.reverse()

      this.setState({
        singlesTrending: trending
      })
    }) //reject
      .catch(error => console.log(error))
  }

  getAlbums = () => {

    axios.get(`https://theaudiodb.com/api/v1/json/1/album.php?i=${this.state.artistObject.idArtist}`).then(response => {
      //resolve
      this.setState({
        artistAlbums: response.data.album
      })
      //console.log(response.data.message.body.track_list)

    }) //reject
      .catch(error => console.log(error))
  }

  getSingleAlbum = () => {

    axios.get(`https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=${this.state.searchedArtistAlbum}`).then(response => {
      //resolve
      //console.log(response.data)

      this.setState({
        searchedSingleAlbum: response.data.album
      })
      //console.log(response.data.message.body.track_list)

    }) //reject
      .catch(error => console.log(error))
  }



  render() {
  

    // const albumInfoMap = this.state.searchedSingleAlbum ? this.state.searchedSingleAlbum.map(item => 
    //   <div className="artistArea">
    //       <div className="albumCover" style={{ backgroundImage: `url(${item.strAlbumThumb})`}}></div>
          
    //       <div className="artistInfo">
    //         <p>{item.strAlbum}</p>
    //         <p>Release year: {item.intYearReleased}</p>
    //         <p>Genre: {item.strGenre}</p>
    //         <p>Music Label: {item.strLabel}</p>
    //         <p>Sales: {item.intSales}</p>  
    //       </div>
    //       <p className="album-desc"> <br /> {item.strDescriptionEN}</p>   
        
    //   </div>
      
    //   ) 
    
    //   :null

     const artistDiscoMap = this.state.artistDisco.map(item =>
      <div className="first-disco">
         <p>{item.strAlbum}</p>
         <p>Release year: {item.intYearReleased}</p>
      </div>
    )

  
    //console.log(this.state.searchedSingleAlbum)
//console.log(this.state.searchedArtist)
    return (
      
         <div>
              <Nav />
              <Switch>
          <Route exact path="/" render={rProps => <Home 
                                                    {...rProps} 
                                                    handleChange={this.handleChange} 
                                                    searchedArtist={this.state.searchedArtist} 
                                                    handleSubmit={this.handleSubmit}
                                                    singlesTrending={this.state.singlesTrending}
                                                    albumTrending={this.state.albumTrending}
                                                    />}/>
                  <Route path="/artist" render={rProps => <Artist {...rProps} 
                                                    
                                                    />} />
                  <Route path="/discography" render={rProps => <Discography {...rProps}/> } />
                  
              </Switch>
   
        

          {/* {albumInfoMap} */}
         

          <h1 id="artistSearch">{this.state.artistObject.strArtist}</h1>
          {artistInfoMap}
          
          

         

        

      
        <footer>
          <p>© 2019 Victoria Sumner. All rights reserved.</p>
        </footer>
      </div>
 
      
    )

  }
}


export default (App)