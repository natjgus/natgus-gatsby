import React from 'react'
import Gallery from './ImageGallery'
import ReactPlayer from 'react-player'


class Photography extends React.Component {
  render() {
    return ( 
      <div class="photography-component">
        <h2 className="major">Photography</h2>
        <p>My complete photography portfolio is coming soon. In the meantime here is an eclectic gallery with some of my favorite shots. Enjoy!</p>
        <Gallery />
        <p className="nospace">My work has been featured in:</p>
        <ul>
          <li>La Sportiva</li>
          <li>Desnivel Magazine</li>
          <li>Ultima Hora Mallorca</li>
          <li>Mallorca Zeitung</li>
          </ul>
        <h2 id="video" className="major">Videos</h2>
        <p>Here are a few climbing videos that I made as well... if you are into that sort of thing!</p>
        <ReactPlayer url='https://vimeo.com/250394677' width='100%'/>
        <p></p>
        <ReactPlayer url='https://vimeo.com/133495253' width='100%'/>
      </div>

    );
  }
}

export default Photography;