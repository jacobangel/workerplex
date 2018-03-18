import React, { Component } from 'react';
import './Gallery.css';

import './Image.css';

const Image = ({ src, id, desc }) => {
  return (
    <li>
      <img src={src} alt={desc} />
      <p>{desc}</p>
      <button onClick={() => { console.log(`click:  ${id}`) }} >
        Edit
      </button>
    </li>
  )
}

class Gallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="gallery">
        <ul className="gallery-list">
          {images.map(({ src, id, desc }) => {
            return (
              <Image src={src} id={id} desc={desc} key={id}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Gallery;