import React from 'react';
import './Track.css';

function Track(props) {
    return (
        <div className='Track-information'>
            <h3 className="Name">{props.name}</h3>
            <div className="Artist-album-container">
                <h4 className="Artist">{props.artist}</h4>
                <h4 className="Album">{props.album}</h4>
            </div>
        </div>
    )
}

export default Track;