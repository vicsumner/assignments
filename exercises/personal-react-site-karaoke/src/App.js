import React, {Component} from 'react'
import axios from 'axios'
import {Switch, Route, withRouter} from 'react-router-dom'
import './styles.css'
import noImage from './no_image_available.gif'

import {CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import AnchorLink from 'react-anchor-link-smooth-scroll'

// import Nav from './context/Nav'
// import Home from './context/Home'
// import Artist from './context/Artist'
// import Discography from './context/Discography'


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
    //console.log(this.state.artistAlbums)
    const artistInfoMap = this.state.artistAlbums.map(item => 
      <div className="artistArea">
          <div className="albumCover" style={
          { backgroundImage: item.strAlbumThumb ? `url(${item.strAlbumThumb})` : `url(https://cdn-dom-p.azureedge.net/-/media/DOM/PimDam/sorry-image-not-available.png?modified=20180213132206)`}
            }></div>
          
          <div className="artistInfo">
            <p>{item.strAlbum}</p>
            <p>Release year: {item.intYearReleased}</p>
            <p>Genre: {item.strGenre}</p>
            <p>Music Label: {item.strLabel}</p>
            <p>Sales: {item.intSales}</p> 
          </div>
          <p className="album-desc"> <br /> {item.strDescriptionEN}</p>   
        
      </div>
      )

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

    const albumTrendingMap = this.state.albumTrending.map(item =>
      <div className="albumTrendContainer">
        <div className="videoPic" style={{backgroundImage: `url(${item.strAlbumThumb})`}}></div>
        <p>{item.strArtist}: {item.strAlbum}</p>
        <p>Chart Place: {item.intChartPlace}</p>
      </div>
    )

    const singlesTrendingMap = this.state.singlesTrending.map(item => 
      <div className="singlesTrending">
        <div className="videoPic" style={{backgroundImage: `url(${item.strTrackThumb})`}}></div>
        <p>{item.strTrack}</p>
        <p>{item.strArtist}</p>
        <p>Chart Place: {item.intChartPlace}</p>
        <br />
      
      </div>
      
    )
    //console.log(this.state.searchedSingleAlbum)
//console.log(this.state.searchedArtist)
    return (
      
         <div>
              {/* <Nav />
              <Switch>
                  <Route exact path="/" render={rProps => <Home {...rProps} />}/>
                  <Route path="/artist" render={rProps => <Artist {...rProps} />} />
                  <Route path="/discography" render={rProps => <Discography {...rProps}/> } />
                  
              </Switch> */}
   
        <div className="homepg">
                <h1 class="font-effect-destruction">Artist Search</h1>
                  <div class="wrap">
                  <div class="search">
                  
                  <form className="flex-form" name="search">
                        {/* //search by artist name */}
                        <input className="searchTerm" placeholder="Artist Name" type="text" onChange={this.handleChange} name="searchedArtist" value={this.state.searchedArtist} />
                        
                        {/* //search by artist Album  
                        <input className="searchTerm" placeholder="Artist Album" type="text" onChange={this.handleChange} name="searchedArtistAlbum" value={this.state.searchedArtistAlbum}/> */}
                <AnchorLink href='#artistSearch' onClick={this.handleSubmit}>
                <button class="searchButton">
                                <i class="fa fa-search"></i>Submit
                        </button>
                        </AnchorLink>
                        
                
                </form>

                </div>
            </div>
        </div>

        <div className="container">
          <h2>Latest Album Trending in US this Week:</h2>
          {albumTrendingMap}

          <h2>Latest Singles Trending in US this Week:</h2>
          {singlesTrendingMap}

          {/* {albumInfoMap} */}
         

          <h1 id="artistSearch">{this.state.artistObject.strArtist}</h1>
          {artistInfoMap}
          
          <h1 className="discoHeader">Discography: {this.state.artistObject.strArtist}</h1>
          {artistDiscoMap}

         

          <div>
            <ScrollUpButton 
              StopPosition={0}
              ShowAtPosition={150}
              EasingType='easeOutCubic'
              AnimationDuration={500}
              ContainerClassName='ScrollUpButton__Container'
              TransitionClassName='ScrollUpButton__Toggled'
              style={{}}
              ToggledStyle={{}}
            />
          </div>

      </div>
        <footer>
          <p>© 2019 Victoria Sumner. All rights reserved.</p>
        </footer>
  </div>
      
    )

  }
}


export default (App)