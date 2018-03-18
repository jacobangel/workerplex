import React, { Component } from 'react';
import Gallery from './containers/Gallery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    images: []
  }

  constructor(props) {
    super(props);
    this.props.bridge.expensive(1000).then( count => {
      console.log(`Ran ${count} loops`)
    })
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
