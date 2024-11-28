import logo from './vinyl-logo.jpg';
import './App.css';
import {SearchBar} from './SearchBar.js';
import {SearchResults} from './SearchResults.js';
import {Playlist} from './Playlist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ja<span>mmm</span>ing!</h1>
      </header>
      <nav>
        <SearchBar />
      </nav>
      <body>
        <SearchResults />
        <Playlist />
      </body>
    </div>
  );
}

export default App;
