import React from 'react';
import logo from './vinyl-logo.jpg';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Heading-container">
          <h1 className="App-title">Ja<span className="App-title-part">mmm</span>ing!</h1>
          <p className="App-description">Create a unique playlist for your next event!</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <SearchBar/>
      </nav>
      <body className="Body-container">
        <Results />
        <Playlist />
      </body>
    </div>
  );
}

export default App;
