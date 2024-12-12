import React, { useState } from 'react';
import './SearchBar.css';
import { songs } from './SongtitleMockup';

function SearchBar() {

    const [searchTitle, setSearchTitle] = useState('');
    const [searchResults, setSearchResults] = useState([])

    const handleSearchInput = (event) => {
        setSearchTitle(event.target.value);
    };

    const handleSearchTask = (event) => {
        setSearchResults((searchResults) => searchResults.filter((searchResult) => searchTitle === songs.title))
    };

    return (
        <div className="Search-container">
            <input 
            type="text"
            placeholder="Songtitle"
            value={searchTitle}
            onChange={handleSearchInput}
            className="Search-input"
            />
            <button 
            type="submit" 
            className="Search-button"
            onClick={handleSearchTask}
            >
            Search
            </button>
        </div>
    )
};

export default SearchBar;