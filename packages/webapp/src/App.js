import React, { Component } from 'react';
import Gallery from './containers/Gallery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    fetch('/gallery/all')
      .then(res => res.json())
      .then(images=> this.setState({ images}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gallery Worker Example</h1>
        </header>
        <div>
          <ul>
            <Gallery images={this.state.images} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
