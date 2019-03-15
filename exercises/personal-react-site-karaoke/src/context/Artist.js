import React from 'react'


const Artist = (props) => {
  console.log(props.searchedSingleAlbum)
  return (
     //console.log(this.state.artistAlbums)
    const artistInfoMap = this.state.artistAlbums.map(item =>
      <div className="artistArea">
        <div className="albumCover" style={
          { backgroundImage: item.strAlbumThumb ? `url(${item.strAlbumThumb})` : `url(https://cdn-dom-p.azureedge.net/-/media/DOM/PimDam/sorry-image-not-available.png?modified=20180213132206)` }}>
      </div>

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
  )
}

export default Artist