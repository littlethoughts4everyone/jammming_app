import React from 'react';
import './Results.css';
import Track from './Track';

function Results({searchResults, hasSearched, handleAddToPlaylist}) {
    return (
        <div className="Results-container">
            <h2 className="Results-heading">Your Search Results</h2>
            <ul className="Tracklist">
                {hasSearched && searchResults.length === 0 ? (
                    <div>No results found</div>
                ) : (
                <>
                {searchResults.map((track) => (
                    <li key={track.id} className="Track-container">
                        <Track 
                            track={track}
                            name={track.name} 
                            artist={track.artist} 
                            album={track.album} />
                        <button 
                            type="submit" 
                            className="Add-button"
                            onClick={() => handleAddToPlaylist(track)}
                        >
                        +
                        </button>
                    </li>
                ))}
                </>)}
            </ul>
       </div>
    )
}

export default Results;