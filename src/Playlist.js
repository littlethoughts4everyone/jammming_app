import React, { useCallback } from 'react';
import Tracklist from './Tracklist';
import './Playlist.css';

function Playlist({newPlaylist, playlistName, handlePlaylistName, handleRemoveFromPlaylist, onSave}) {

    const handleNameChange = useCallback((event) => {
        handlePlaylistName(event.target.value);
    }, [handlePlaylistName]);

    return (
        <div className="Playlist-container">
            <input 
            type="text"
            placeholder="Enter a Playlist Name"
            value={playlistName}
            onChange={handleNameChange}
            className='Playlist-input'
            />
            {newPlaylist.length === 0 && <div className="Empty-message">Your playlist is empty.</div>}
            <Tracklist newPlaylist={newPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} />
            <button
            type="submit"
            className="Spotify-button"
            onClick={onSave}
            disabled={newPlaylist.length === 0}
            >
            Save to Spotify
            </button>
        </div> 
    )              
};

export default Playlist;