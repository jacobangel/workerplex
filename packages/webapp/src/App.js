import React, { Component } from 'react';
import Gallery from './containers/Gallery';
import logo from './logo.svg';
import './App.css';

const Spinner = () => {
  return (
    <div className="Spinner">
        Loading...
    </div>
  );
};
class App extends Component {
  state = {
    images: [],
    loading: false,
  }

  componentWillMount() {
    // now we just convert this to a redux action wrapped call and we're golden!
    this.props.onConnect();
  }

  componentWillUnmount() {
    // this.props.disconnect?
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gallery Worker Example</h1>
        </header>
        <div>
          { loading ?
          <Spinner /> :
          <ul>
            <Gallery images={this.state.images} />
          </ul>
          }
        </div>
      </div>
    );
  }
}

export default App;
