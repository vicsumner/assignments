import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = (props) => {

  const albumTrendingMap = props.albumTrending.map(item =>
    <div className="albumTrendContainer">
      <div className="videoPic" style={{ backgroundImage: `url(${item.strAlbumThumb})` }}></div>
      <p>{item.strArtist}: {item.strAlbum}</p>
      <p>Chart Place: {item.intChartPlace}</p>
    </div>
  )

  const singlesTrendingMap = props.singlesTrending.map(item =>
    <div className="singlesTrending">
      <div className="videoPic" style={{ backgroundImage: `url(${item.strTrackThumb})` }}></div>
      <p>{item.strTrack}</p>
      <p>{item.strArtist}</p>
      <p>Chart Place: {item.intChartPlace}</p>
      <br />

    </div>

  )
  return (
   <div className="homepg">
      <h1 class="font-effect-destruction">Artist Search</h1>
      <div class="wrap">
      <div class="search">
                  
        <form className="flex-form" name="search">
                {/* //search by artist name */}
          <input className="searchTerm" placeholder="Artist Name" type="text" onChange={props.handleChange} name="searchedArtist" value={props.searchedArtist} />
                
                {/* //search by artist Album  
                <input className="searchTerm" placeholder="Artist Album" type="text" onChange={props.handleChange} name="searchedArtistAlbum" value={props.searchedArtistAlbum}/> */}
          <AnchorLink href='#artistSearch' onClick={props.handleSubmit}>
          <button class="searchButton">
                  <i class="fa fa-search"></i>Submit
          </button>
          </AnchorLink>
        </form>

      </div>
      </div>
        

      <div className="container">
        <h2>Latest Album Trending in US this Week:</h2>
        {albumTrendingMap}

        <h2>Latest Singles Trending in US this Week:</h2>
        {singlesTrendingMap}
        
      </div>
         
         

 </div> 
 )
}

export default Home