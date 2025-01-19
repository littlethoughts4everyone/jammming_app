import React from "react";
import Track from "./Track";
import "./Tracklist.css";

function Tracklist({newPlaylist, handleRemoveFromPlaylist}) {
    return (
        <ul className="Playlist">
                        <>
                        {newPlaylist.map((track) => (
                            <li key={track.id} className="Playlist-track">
                                <Track 
                                    track={track}
                                    name={track.name} 
                                    artist={track.artist} 
                                    album={track.album} 
                                    uri={track.uri}
                                />
                                <button 
                                    type="submit" 
                                    className="Remove-button"
                                    onClick={() => handleRemoveFromPlaylist(track)}
                                >
                                -
                                </button>
                            </li>
                        ))}
                        </>
                    </ul>
    )
}

export default Tracklist;