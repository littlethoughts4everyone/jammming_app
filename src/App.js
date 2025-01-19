import React, { useState, useCallback } from 'react';
import logo from './vinyl-logo.jpg';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results';
import Playlist from './Playlist';
import Spotify from './SpotifyRequests';

function App() {
  const [searchResults, setSearchResults] = useState([]); 
  const [playlistName, setPlaylistName] = useState('');
  const [newPlaylist, setNewPlaylist] = useState([]);

  const onSearch = (input) => {
    if (!input) return; 
    Spotify.getSearchResults(input).then(setSearchResults);
  };

  const handleAddToPlaylist = useCallback(
    (track) => {
      if (newPlaylist.some((savedTrack) => savedTrack.id === track.id))
        return;

      setNewPlaylist((prevTracks) => [...prevTracks, track]);
    },
    [newPlaylist]
  );

  const handleRemoveFromPlaylist = useCallback((track) => {
    setNewPlaylist((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const handlePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    if (!playlistName.trim()) {
      alert("Please enter a playlist name.");
      return;
    };
    const trackUris = newPlaylist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName("");
        setNewPlaylist([]);
        alert("Playlist saved successfully!");
    })
      .catch((error) => {
        console.error("Error saving playlist:", error);
        alert("Failed to save playlist. Maybe you forgot to enter a playlist name or the name already exists in your spotify library.");
    });
  }, [playlistName, newPlaylist]);

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
        <SearchBar 
          onSearch={onSearch}
        />
      </nav>
      <body className="Body-container">
        <Results 
          searchResults={searchResults} 
          handleAddToPlaylist={handleAddToPlaylist}
        />
        <Playlist 
          playlistName={playlistName}
          newPlaylist={newPlaylist}
          handlePlaylistName={handlePlaylistName}
          handleRemoveFromPlaylist={handleRemoveFromPlaylist}
          onSave={savePlaylist}
        />
      </body>
    </div>
  );
}

export default App;
