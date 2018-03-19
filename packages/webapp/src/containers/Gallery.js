import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeImage } from '../bridge/actions';

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
  componentDidMount() { }

  render() {
    const { images } = this.props;

    return (
      <div className="gallery">
        <ul className="gallery-list">
          {images.map(({ src, id, desc }, i) => {
            return (
              <Image src={src} id={id} desc={desc} key={`${i}-${id}`}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('stat', state);
  return { images: [...state.appState.images] }
};
 
const mapDispatchToProps = dispatch => ({
  removeImages: id => dispatch(removeImage(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);