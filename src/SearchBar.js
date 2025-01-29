import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({onSearch}) => {

    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
      const value = event.target.value;
      setInput(value);
      localStorage.setItem('searchInput', value);
    };

    useEffect(() => {
      const savedSearchInput = localStorage.getItem('searchInput');
      if (savedSearchInput) {
        setInput(savedSearchInput);
      }
    }, []);
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSearch(input); 
      }
    };

    return (
        <div className="Search-container">
            <input 
              type="text"
              placeholder="Songtitle, Artist or Album"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="Search-input"
            />
            <button 
              type="submit" 
              className="Search-button"
              onClick={() => onSearch(input)}
            >
            Search
            </button>
        </div>
    )
};

export default SearchBar;