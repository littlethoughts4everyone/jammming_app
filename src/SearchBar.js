import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({onSearch}) => {

    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
      setInput(event.target.value);
    };
  
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