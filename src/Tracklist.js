import React from 'react';
import './Tracklist.css';
import Track from './Track';
import SearchBar from './SearchBar';
import { songs } from './SongtitleMockup';

function Tracklist({searchresults}) {

    return (
        <ul className="Tracklist">
            {searchresults.map((searchResult) => (
                <div className="Track-container">
                    <Track key={song.id} name={song.name} artist={song.artist} album={song.album} />
                    <button type="submit" className="Add-button">+</button>
                </div>
            ))}
        </ul>
    )
}

export default Tracklist;