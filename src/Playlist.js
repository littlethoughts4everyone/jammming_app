import React, { useState } from 'react';
import './Playlist.css';
import Tracklist from './Tracklist';

function Playlist() {

    const [playlistName, setPlaylistName] = useState('');

    const handlePlaylistName = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div className="Playlist-container">
            <input 
            type="text"
            placeholder="Playlist Name"
            value={playlistName}
            onChange={handlePlaylistName}
            className='Playlist-input'
            />
            <Tracklist />
            <button
            type="submit"
            className="Spotify-button"
            >
            Save to Spotify
            </button>
        </div>
    )
};

export default Playlist;