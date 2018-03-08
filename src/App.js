import React, { Component } from 'react';
import 'tachyons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 class="f4 lh-copy normal">Spotify single finder</h1>
        <p class="f1">Sometimes I save songs from my Discover Weekly but can't find them again.</p>
        <p class="f3">This will list songs from only one artist</p>
      </div>
    );
  }
}

export default App;
